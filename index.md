---
title: Ted Sanders
layout: default
alias: /index.php
description: Welcome to tedsanders.com
---

Welcome to my website. Under construction.

<<<<<<< HEAD
## Recent posts

<ul class="no-bullets">
  {% for post in site.tags.blog %}
=======
## Current drafts

<ul class="no-bullets">
  {% for post in site.posts %}
>>>>>>> 016cdb953ac79a288820f1d21e4001fd5a214fdf
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<!--span class="align-right date list-date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span-->
    	</div>
    </li>
  {% endfor %}
</ul>
