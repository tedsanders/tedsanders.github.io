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

    <li>
    	<div class="clearfix">
	    	Average is Over (★★★☆☆)
	    	<span class="align-right date">2014</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	On Writing (★★☆☆☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	Ninety Percent of Everything (★★★★☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    <div class="clearfix">
	    	So Good They Can't Ignore You (★★★★☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	Europe's Financial Crisis (★★★☆☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	The Lights in the Tunnel (★★☆☆☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	Harry Potter and the Methods of Rationality (★★★☆☆)
	    	<span class="align-right date">2013</span>
    	</div>
    </li>
    <li>
    	<div class="clearfix">
	    	Thinking, Fast and Slow (★★★★☆)
	    	<span class="align-right date">2012</span>
    	</div>
    </li>

</ul>

What do the stars mean?

★★★★★ = it was amazing
★★★★☆ = really liked it
★★★☆☆ = liked it
★★☆☆☆ = it was ok
★☆☆☆☆ = did not like it
☆☆☆☆☆ = nothing is worse

But really they don't mean anything.

They are a complex function of my history, my mood, and my desire to signal a false image of myself to you.