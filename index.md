---
title: Home
layout: default
description: Welcome to tedsanders.com
---

# Essays & notes

>"Everything is vague to a degree you do not realize till you have tried to make it precise..."
><p style="font-weight: bold; text-align: right">-Bertrand Russell</p>

In these essays I try to make my thoughts precise:

&nbsp;

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