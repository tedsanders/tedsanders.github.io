---
layout: default
title: Reviews
description: Ted reviews things.
---

<ul class="no-bullets">
  {% for post in site.categories.reviews %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}
	    	{% if post.stars == 0 %} &nbsp;&nbsp;☆☆☆☆☆
	    	{% elsif post.stars == 1 %} &nbsp;&nbsp;★☆☆☆☆
	    	{% elsif post.stars == 2 %} &nbsp;&nbsp;★★☆☆☆
	    	{% elsif post.stars == 3 %} &nbsp;&nbsp;★★★☆☆
	    	{% elsif post.stars == 4 %} &nbsp;&nbsp;★★★★☆
	    	{% elsif post.stars == 5 %} &nbsp;&nbsp;★★★★★
	    	{% endif %}
        </a>
	    	<!--span class="align-right list-date date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span-->
    	</div>
    </li>
  {% endfor %}

    <br>
    Coming soon:
    <li class="list-row">
        <div class="clearfix">
            Snow Crash ★★★☆☆

        </div>
    </li>
    <li class="list-row">
        <div class="clearfix">
            The Rent is Too Damn High ★★★★☆

        </div>
    </li>
    <li class="list-row">
        <div class="clearfix">
            Average is Over ★★★☆☆

        </div>
    </li>
    <li class="list-row">
    	<div class="clearfix">
	    	On Writing ★★☆☆☆

    	</div>
    </li>
    <li class="list-row">
    <div class="clearfix">
	    	So Good They Can't Ignore You ★★★★☆

    	</div>
    </li>
    <li class="list-row">
    	<div class="clearfix">
	    	Europe's Financial Crisis ★★★☆☆

    	</div>
    </li>
    <li class="list-row">
    	<div class="clearfix">
	    	The Lights in the Tunnel ★★☆☆☆

    	</div>
    </li>
    <li class="list-row">
    	<div class="clearfix">
	    	Harry Potter and the Methods of Rationality ★★★☆☆

    	</div>
    </li>
    <li class="list-row">
    	<div class="clearfix">
	    	Thinking, Fast and Slow ★★★★☆

    	</div>
    </li>

</ul>


<br>
What do the stars mean?

★★★★★ = it was amazing<br>
★★★★☆ = really liked it<br>
★★★☆☆ = liked it<br>
★★☆☆☆ = it was ok<br>
★☆☆☆☆ = did not like it<br>
☆☆☆☆☆ = couldn't be worse<br>

But really they don't mean anything.

They are a complex function of my history, my mood, and my desire to signal a false image of myself to you.
