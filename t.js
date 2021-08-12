{% for post in site.posts %}
var {{ post.url }}
{% endfor %}
{% for page in site.pages %}
var {{ page.permalink }}
{% endfor %}
