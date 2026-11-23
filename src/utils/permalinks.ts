import { SITE } from 'astrowind:config';

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, '');

const BASE_PATHNAME = SITE.base || '/';

/** Absolute canonical URL for a path, with the trailing slash the site is configured for. */
export const getCanonical = (path = ''): string => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** Path of a file served from `public/` (or generated at the site root). */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlashes(el))
    .filter((el) => !!el)
    .join('/');
