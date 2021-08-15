---
layout: null
---
const staticShoaiybSysa = "shoaiyb-sysa-site-v1";
const assets = [
  "/",
  "/404.html",
  "/index.html",
  {% comment %}{% for post in site.posts %}"{{ post.url }}",{% endfor %}
  {% for page in site.pages %}"{{ page.url }}",{% endfor %}
  {% for post in site.posts %}"{{ post.image | jsonify }}",{% endfor %}
  {% for page in site.pages %}"{{ page.image | jsonify }}",{% endfor %}{% endcomment %}
  "/assets/images/logo.svg",
  "/assets/images/logo.png",
  "/assets/images/favicon-16x16.png",
  "/assets/images/favicon-32x32.png",
  "/assets/images/apple-touch-icon.png",
  "/assets/css/prism.css",
  "/assets/css/theme.css",
  "/assets/js/theme.js",
  "/assets/js/lazyload.js",
  "/assets/js/lunr.js",
  "/assets/js/lunrsearchengine.js",
  "/assets/js/prism.min.js",
  "/assets/js/jquery.min.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticShoaiybSysa).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
