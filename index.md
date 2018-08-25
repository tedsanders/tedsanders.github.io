---
title: Ted Sanders
layout: default
alias: /index.php
description: Welcome to tedsanders.com
---

Welcome to my website. Under construction.

## Draft Notes

<ul class="no-bullets">
  {% for post in site.posts %}
  {% if post.tags contains 'notes' %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<!-- span class="align-right date list-date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span -->
    	</div>
    </li>
  {% endif %}
  {% endfor %}
</ul>

## Draft Posts

<ul class="no-bullets">
  {% for post in site.posts %}
  {% unless post.tags contains 'notes' %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<!--span class="align-right date list-date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span-->
    	</div>
    </li>
  {% endunless %}
  {% endfor %}
</ul>
