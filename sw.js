importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "876218034b4809ef8bff0136a1a967b8"
  },
  {
    "url": "inline.2443edd3d995a968138d.bundle.js",
    "revision": "2b035e38abfe3f6165882574296df6f5"
  },
  {
    "url": "main.f9c048da36f27972ceaf.bundle.js",
    "revision": "e514cb5c8caa5825b8cb661b0e83b71f"
  },
  {
    "url": "polyfills.f6b0f6b051a39246134a.bundle.js",
    "revision": "e3c2313ef7fa963b17abba99b055732c"
  },
  {
    "url": "styles.c11cfe8a87f9a45866fa.bundle.css",
    "revision": "c11cfe8a87f9a45866fabfd9606ab6d9"
  },
  {
    "url": "vendor.3aee18591cf66ac89c09.bundle.js",
    "revision": "12c85e122464798af9ed172cb85723ac"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "068c8657447c8cab46d113bc5e3d1c0d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
