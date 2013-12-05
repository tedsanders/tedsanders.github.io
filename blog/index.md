---
layout: default
title: Blog
---

#Blog posts#

<ul>
  {% for post in site.posts %}
    <li>
    	<span class="date"><i class="icon-clock"></i><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%b %d, %Y"}}</time></span><br/>
    	<a href="{{ post.url }}">{{ post.title }}</a>
    	<p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>