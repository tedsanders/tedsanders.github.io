---
title: Ted Sanders
layout: default
alias: /index.php
description: Welcome to tedsanders.com
---

Welcome to my website. Under construction.

## Recent posts

<ul class="no-bullets">
  {% for post in site.tags.blog %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<!--span class="align-right date list-date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span-->
    	</div>
    </li>
  {% endfor %}
</ul>
