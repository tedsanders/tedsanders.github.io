---
layout: default
title: Blog
---

<ul class="no-bullets">
  {% for post in site.posts %}
    <li>
    	<div class="clearfix">
	    	<a class="align-left" href="{{ post.url }}">{{ post.title }}</a>
	    	<span class="align-right date"><i class="icon-clock"></i><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span>
    	</div>
    </li>
  {% endfor %}
</ul>