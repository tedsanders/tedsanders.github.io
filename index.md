---
title: Home
layout: default
description: Welcome to tedsanders.com
---

# Under construction

Here are some of my thoughts:

<ul class="no-bullets">
  {% for post in site.posts %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<!-- span class="align-right date list-date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span -->
    	</div>
    </li>
  {% endfor %}
</ul>