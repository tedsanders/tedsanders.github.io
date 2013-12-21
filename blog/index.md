---
layout: default
title: Blog
description: Peer into the mind of Ted Sanders by reading his blog.
alias: /blog.php
---

<ul class="no-bullets">
  {% for post in site.posts %}
    {% if post.stars == nil %}
    {% if post.hide != true %}
    <li>
    	<div class="clearfix">
	    	<a class="align-left" href="{{ post.url }}">{{ post.title }}</a>
	    	<span class="align-right date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span>
    	</div>
    </li>
    {% endif %}
    {% endif %}
  {% endfor %}
</ul>