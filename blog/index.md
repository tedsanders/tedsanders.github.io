---
layout: default
title: Blog
description: Ted blogs.
alias: /blog.php
---

<ul class="no-bullets">
  {% for post in site.tags.blog %}
    <li>
    	<div class="clearfix">
	    	<a class="align-left" href="{{ post.url }}">{{ post.title }}</a>
	    	<span class="align-right date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span>
    	</div>
    </li>
  {% endfor %}
</ul>