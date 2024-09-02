'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "08829f9d2c0dd606b4eb37ba1d7b3476",
"assets/AssetManifest.bin.json": "8ff3bd68b5d74199f71321f191dad865",
"assets/AssetManifest.json": "a9f390e874c7b529847f09f4a246c800",
"assets/assets/animations/developer.json": "c84f08d11d4c37c60f65b1fcbc98eb1a",
"assets/assets/animations/dev_app.json": "fa8197bd921b447ac65cba66b411ced0",
"assets/assets/images/api.png": "3082fee7d84a008372d78b922c47f6e0",
"assets/assets/images/contact.svg": "86fb43071bcfbc4177450f2c6aa9b1db",
"assets/assets/images/csharp.png": "d86edd7b6da8c50ec3efdc0665061a5d",
"assets/assets/images/css.png": "78c042d9262bc854b44540c757bf2135",
"assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/dotnet.png": "5e6a4e1009ea979cfa753f6e38098428",
"assets/assets/images/firebase.png": "d05384b4acc38edc04b2342ddc0433aa",
"assets/assets/images/flutter.png": "585d61dd834a388f456b1812d2573b7e",
"assets/assets/images/grab_and_go_customer.PNG": "fade311e106357e4189192447f04029e",
"assets/assets/images/grab_and_go_rider.PNG": "04754e98f3c1f9330b625a8423e2f8c3",
"assets/assets/images/grab_and_go_vendor.PNG": "be21f01ba6fbb8e3cb36f917ed1981fe",
"assets/assets/images/html.png": "f32e2a9c6799c9ae376dc42844243c2e",
"assets/assets/images/js.png": "3a9f0890a40192a1fef3bd64e81c9238",
"assets/assets/images/map.png": "4025d5af5c50df1cf2ee552e01172d24",
"assets/assets/images/payfast.png": "ada37fd1fbb53f0f3068704008f8e9b8",
"assets/assets/images/reg_maker.png": "3cc8189f0cc16d32210d8a1fff7f8a44",
"assets/assets/images/report.png": "893f1195590139900d39df531aecea60",
"assets/assets/images/sql.png": "e9ea7844d9654fce618cf7605578d439",
"assets/assets/images/ultrabiz_erp/erp_desktop.PNG": "105b18d5ca2ef57432fac37bcf170045",
"assets/assets/images/ultrabiz_erp/erp_desktop_light.PNG": "32913f7a4dc35cc5e50952f91d9359fb",
"assets/assets/images/ultrabiz_erp/erp_mobile_1.png": "620575737566ac28b598de1be866dac4",
"assets/assets/images/ultrabiz_erp/erp_mobile_2.png": "4d686357738205121c837a522a6f0a28",
"assets/assets/images/ultrabiz_erp/erp_mobile_3.png": "35641d9fa1ec252cd84cb793ee7efe55",
"assets/assets/images/ultrabiz_erp/erp_mobile_4.png": "6dfae95ddb3cbc876696714c30424594",
"assets/assets/images/ultrabiz_erp/erp_web.PNG": "4eb290e9b4c1c9e17fc9d0fc5a82523d",
"assets/assets/images/ultrabiz_erp/erp_web_chart.PNG": "7c9e270e0b5308917fead9b19f8b327b",
"assets/assets/images/ultrabiz_erp/erp_web_invoice.PNG": "e22cb59e73e5898062a7efa571345ac3",
"assets/assets/images/ultrabiz_erp/erp_web_invoice_add.PNG": "ce0a6b4146256d755d93f466036867d4",
"assets/assets/images/ultrabiz_erp/erp_web_invoice_dark.PNG": "62ce0474d5d82afba2f531030824ced0",
"assets/assets/images/ultrabiz_erp_api.PNG": "eea88f822da539ea7e6cfe62d802b6d2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e9e43fbe8839ccb2e75fe998c96bb26f",
"assets/NOTICES": "509eaffc26737b62e29ccb8f4061cde3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "63be71b3ac04c9f39367ec1f4b53965a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c038c50943eb2b64f94bfb43ee003c84",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "da9ed8c46d9c6d2370ef18d7eb237355",
"/": "da9ed8c46d9c6d2370ef18d7eb237355",
"main.dart.js": "ba30de4064b24385d886fa6fad24856d",
"manifest.json": "3ffd0eb1c219c58ad473c11346ee7ef8",
"version.json": "9afe24c16352eb1de24f6df78d304104"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
