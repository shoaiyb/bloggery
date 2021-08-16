---
layout: post
title: Build A REST API With Jekyll
description: ""
author: shoaiyb
image: assets/images/rest-api.webp
imageshadow: true
categories: [ Jekyll, API, Develop ]
toc: true
published: false
---



## Site

```json

```

## Posts

```json
---
layout: null
permalink: /api/posts/
---
[
{% for post in site.posts %}
{
"title"    : "{{ post.title }}",
"url"     : "{{ post.url }}",
"date"     : "{{ post.date | date: "%B %d, %Y" }}",
"tags"  : {{ post.tags }},
"categories"  : {{ post.categories }},
"description"  : "{{ post.description | escape }}"
} {% if forloop.last %}{% else %},{% endif %}
{% endfor %}
]
```

## Pages

```json

```




