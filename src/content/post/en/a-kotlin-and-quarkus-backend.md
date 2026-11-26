---
title: 'A Kotlin and Quarkus backend: notes from Turklex'
excerpt: "Turklex's backend is written in Kotlin and runs on Quarkus. Which Quarkus extensions we use and what for, how the tests are set up, and when we'd recommend Spring Boot instead."
publishDate: 2026-11-22
draft: true
translationKey: kotlin-quarkus-backend
---

The backend of Turklex is written in Kotlin and runs on JVM 21 with Quarkus. At the time of writing that means Kotlin 2.4, Quarkus 3.39 and Gradle 9. The main source set has no Java files, and there's no Spring Boot anywhere.

Turklex is the legal platform we build for lawyers and law firms in Turkey. The backend handles legislation and case-law search, document processing, case records and the calls behind the AI assistant.

## What we use from Quarkus

Most of the application is built from standard Quarkus extensions.

- REST endpoints use Quarkus's REST extension, with each group of resources in its own `...Resource.kt` class.
- Dependency injection is ArC, Quarkus's CDI implementation.
- The scheduler extension runs periodic jobs and the health extension serves health checks. Timeouts and retries on calls to outside services are declared with the fault tolerance extension.
- We reach the database through the Kotlin module of Hibernate ORM with Panache. Every schema change is a Flyway migration in the repository, and there are more than a hundred SQL migration files today.
- Authentication is built on Quarkus OIDC and Security JPA. So that the Claude and ChatGPT connector can sign users in, the backend also contains our own OAuth server package.
- Long-running work is taken off the request path and handed to RabbitMQ through SmallRye Reactive Messaging's AMQP connector. Document processing, reading court notifications and syncing the legislation corpus each have their own queues.
- The MCP server behind the Claude and ChatGPT connector is written with Quarkus's MCP Server extension. The connector's only permission is legislation and case-law search, so it can't see a firm's files.
- Features that are switched on per user, per firm or per plan are managed with Quarkus Flags.
- Calls to AI models go through the Quarkus extension for LangChain4j.
- For observability there's OpenTelemetry for traces, Micrometer's Prometheus registry for metrics and the JSON logging extension. Where those signals end up is covered in [how we run Turklex on our own servers](/en/blog/how-we-run-turklex-on-our-own-servers/).

## Kotlin with Quarkus

Quarkus supports Kotlin, but one of the language's defaults clashes with the framework. Kotlin classes are final unless you open them, while CDI and Hibernate need to create subclasses (proxies) of some classes. For that reason the Quarkus Kotlin guide recommends the Gradle allopen plugin, configured with the annotations whose classes need proxies.

Panache has a separate module for Kotlin. Queries that the Java flavour writes as static methods on the entity class go on a companion object instead, and that's the module Turklex uses.

ktlint checks code style. It runs as a Gradle plugin, so a style violation fails the build, and the same check runs in CI on every pull request.

## Tests

A few rules shape the test setup:

- Backend tests start Redis and RabbitMQ in their own containers with Testcontainers, and they talk to those real services rather than to mocks.
- The test run is split across four parallel forks.
- Tests that call live third-party hosts are tagged and left out of the default build. When an outside service is down, CI stays green.
- TDD is a written rule in the repository: the failing test comes first, then the code that makes it pass.

The backend job in CI runs ktlint, the build, the image build and a check of the stack files.

## Outside Quarkus

Not every piece comes from a Quarkus extension. We use Apache PDFBox to split PDFs and openhtmltopdf to render reports. Text extraction and OCR are done by Apache Tika running in its own container, from an image we build in the repository with Turkish in mind. Password rules are enforced on the server with Passay.

These are plain Java libraries. They'd go into a Spring Boot project the same way, and the choice of framework doesn't affect them.

## Build and runtime

The backend is built with Gradle 9 and runs on the JVM, in a container based on the UBI9 OpenJDK 21 image. Quarkus can also produce a native image with GraalVM; Turklex runs in JVM mode.

Following 12-factor, which is another written rule in the repository, configuration comes from environment variables. Passwords and keys are never stored in the repository.

## When we recommend Spring Boot

On client projects, the framework is usually decided by what the team already knows. If your team knows Spring, or the existing code is Spring Boot, we recommend staying with it. It's the most widely used framework in the Java world, and the next person you hire is likely to know it.

We recommend Quarkus for a new service that will run in a container, where startup time and memory use matter. Quarkus resolves much of the configuration and dependency injection at build time, which leaves less work for the application to do when it starts.

Both frameworks work with the same libraries, Hibernate and Micrometer among them, so a developer moving from one to the other finds familiar ground. The differences are mostly in configuration and annotations. Because Turklex has no Spring Boot in it, we don't cite it as evidence for our Spring Boot services.

If you need an API or a service written to run on the JVM, our [Java backend development](/en/services/java-backend-development/) page explains how we work.
