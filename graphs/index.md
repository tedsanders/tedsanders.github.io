---
layout: default
title: Graphs
description: Ted graphs data.
---

<ul class="no-bullets">
  {% for post in site.categories.graphs %}
    <li class="list-row">
    	<div class="clearfix">
	    	<a class="align-left list-title" href="{{ post.url }}">{{ post.title }}</a>
	    	<span class="align-right list-date date"><time datetime="{{post.date|date:"%F"}}">{{post.date|date:"%d %b %Y"}}</time></span>
    	</div>
    </li>
  {% endfor %}
</ul>

<p>I'm learning to make internet graphs with d3. In the meantime, here are some <a href="http://d3js.org/">d3.js</a> resources:</p>


<h2>D3 Examples</h2>
<ul>
<li><a href="https://github.com/mbostock/d3/wiki/Gallery">https://github.com/mbostock/d3/wiki/Gallery</a></li>
<li><a href="http://nvd3.org/ghpages/examples.html">http://nvd3.org/ghpages/examples.html</a></li>
<li><a href="http://bost.ocks.org/mike/">http://bost.ocks.org/mike/ (one of the creators of d3.js who now works at the NYT)</a></li>
</ul>


<h2>D3 Tutorials</h2>
<ul>
<li><a href="http://alignedleft.com/tutorials/d3/">http://alignedleft.com/tutorials/d3/</a></li>
<li><a href="http://www.dashingd3js.com/">http://www.dashingd3js.com/</a></li>
<li><a href="http://christopheviau.com/d3_tutorial/">http://christopheviau.com/d3_tutorial/</a></li>
<li><a href="http://www.janwillemtulp.com/category/d3/">http://www.janwillemtulp.com/category/d3/</a></li>
<li><a href="http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/">http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/</a></li>
</ul>
