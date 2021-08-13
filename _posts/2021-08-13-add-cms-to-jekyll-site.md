---
layout: post
title: Add CMS To Your Jekyll Site
description: ""
author: shoaiyb
categories: [ Jekyll, CMS ]
image: assets/images/cms-jekyll.webp
imageshadow: true
toc: true
---




Jekyll is a blog-aware static site generator built with Ruby. Github Pages are powered by Jekyll, making it a popular choice for developer blogs and project pages.

If you're starting a new project, the fastest route to publishing on a Jekyll website with Netlify CMS is to deploy a template on Netlify.


## Add Netlify CMS

### Add `admin/index.html`     
Create a file `admin/index.html` in the root of your repo - it should look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Netlify CMS -->
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </body>
</html>
```

### Add `admin/config.yml`
Create a file `admin/config.yml` in the root of your repo - it should look like this:

```html

```
































