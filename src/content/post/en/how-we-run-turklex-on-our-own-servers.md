---
title: 'How we run Turklex on our own servers'
excerpt: "Turklex's API and databases run on hardware we operate. Here is how we define the environments with Terraform and Ansible, deploy with GitHub Actions and monitor everything with OpenTelemetry."
publishDate: 2026-11-22
draft: true
translationKey: turklex-own-servers
---

Turklex is the AI legal platform we build for lawyers and law firms in Turkey. Its backend is Kotlin on JVM 21 with Quarkus. Data lives in PostgreSQL, full-text search in Elasticsearch and vector search in Qdrant. RabbitMQ carries the queues, Redis holds sessions and cache, and SeaweedFS provides S3-compatible object storage for files.

We run all of them on our own hardware, in virtual machines on Proxmox VE. The AI models are the exception: we call them through external providers' APIs, so model requests leave our servers while the application and its data stay on them.

## What runs where

There are three environments, dev, sandbox and prod, and each has its own stack definition in the repository. Sandbox and prod run in separate virtual machines.

Every service has its own Docker Compose file, and an environment's stack is assembled from those files. Changing a service's image version or settings means editing one file.

The web side lives elsewhere. The React app and the turklex.ai marketing site are static builds served from Cloudflare Pages, and DNS is on Cloudflare too. Environments that aren't public, such as sandbox, sit behind Cloudflare Access.

## Machines in Ansible, resources in Terraform

We use the two tools for two different layers.

Ansible manages the machines and what runs on them: the Proxmox host, the guest VMs, the Compose stacks, the GitHub Actions runners and cloudflared. VM setup is defined in playbooks too.

Terraform manages what lives inside the services. RabbitMQ queues, SeaweedFS buckets, Elasticsearch indexes and Qdrant collections are declared in Terraform, and so is the Cloudflare account: DNS records and zone settings, including the minimum TLS version we accept.

The providers are cloudflare, rabbitmq, elasticstack, minio and aws. The last one never talks to AWS. SeaweedFS exposes an S3 API, so we point the aws provider at SeaweedFS's S3 endpoint and use it as a generic S3 client. Terraform state is kept in a remote S3-compatible store as well.

Prod has one extra guard. CI runs `terraform plan` against prod, and the job fails if the plan would destroy anything. Since the plan comes from CI and `apply` is run by hand, a change that deletes a queue or an index can't reach production without someone noticing.

## Releases: GitHub Actions with a runner per environment

Every pull request runs these checks:

- Backend: ktlint, build, image build and a check of the stack files.
- Web app: dependency install and build.
- turklex.ai site: lint, format check, type check and build.
- Terraform for prod, sandbox and Cloudflare: fmt, validate and plan.

Deploy jobs run on our own self-hosted runners. Each environment has its own runner in its own VM, so a prod deploy runs on the prod runner.

Every merge to `main` goes to sandbox. A production release is started by hand from `main` and has to pass the approval on GitHub's `production` environment. Because both environments are fed from the same branch, code that reaches prod has already run in sandbox.

Backend images are stored in GitHub Container Registry. Passwords and keys stay out of the repository; they come from GitHub secrets and `TF_VAR_` environment variables.

An issue, its branch, its pull request and the squash commit all carry the same issue number. To find out why a change is in production, we follow the commit back to the issue.

## Monitoring: OpenTelemetry, metrics and logs

The backend emits three kinds of signal. Quarkus's OpenTelemetry extension produces traces, Micrometer's Prometheus registry produces metrics, and logs go to stdout as JSON.

Grafana Alloy runs on the hypervisor, on each VM and on the runner, and it only pushes data out. Metrics go to Prometheus, logs to Loki and traces to Tempo, and we read all of them in Grafana.

Missing data raises an alert too. If a server or a collector stops sending, its dashboards go quiet, and a quiet dashboard looks exactly like a healthy one. The absence-of-data rule exists to catch that case.

Dashboards and alert rules are code in the repository. We don't edit dashboard JSON by hand; a Python script generates it, and the script has its own tests. There are separate dashboards for the backend, usage, PostgreSQL, Elasticsearch, Qdrant, RabbitMQ, Redis, SeaweedFS, Tika and the host. Alert rules are YAML files.

## Backups

PostgreSQL is backed up with pgBackRest: continuous WAL archiving, a full backup every week and a differential every night, all stored off the server in S3-compatible storage. Files that users upload are copied to a versioned bucket, also off the server.

We don't back up the legislation and case-law corpus or the search indexes, because they can be rebuilt from their sources. Both the rebuild and the restore steps are written up as runbooks.

## What this setup costs us

Running your own hardware means doing the work a cloud provider would otherwise do. Disks, operating system updates, capacity planning and hardware failures are ours to handle. With no managed database service, we also plan PostgreSQL's backups and version upgrades ourselves.

So we don't recommend this setup to every client. For a company with nobody on the team to look after infrastructure, a managed cloud service is usually the better choice.

If you want a similar release and monitoring setup for your own system, our [DevOps and infrastructure](/en/services/devops-and-infrastructure/) page explains how we work. What Turklex does and what it's built with is on the [Turklex page](/en/products/turklex/).
