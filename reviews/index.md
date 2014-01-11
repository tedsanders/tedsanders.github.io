---
layout: default
title: Reviews
description: Ted reviews things.
---

<ul class="no-bullets">
  {% for post in site.categories.reviews %}
    <li>
    	<div class="clearfix">
	    	<a class="align-left" href="{{ post.url }}">{{ post.title }}</a>
	    	{% if post.stars == 0 %} &nbsp;(☆☆☆☆☆)
	    	{% elsif post.stars == 1 %} &nbsp;(★☆☆☆☆)
	    	{% elsif post.stars == 2 %} &nbsp;(★★☆☆☆)
	    	{% elsif post.stars == 3 %} &nbsp;(★★★☆☆)
	    	{% elsif post.stars == 4 %} &nbsp;(★★★★☆)
	    	{% elsif post.stars == 5 %} &nbsp;(★★★★★)
	    	{% endif %}
	    	<span class="align-right date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span>
    	</div>
    </li>
  {% endfor %}
</ul>