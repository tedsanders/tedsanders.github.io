---
layout: default
description: A pie chart that spins!
title: My sixth pie chart with d3
subtitle:
categories: graphs
tags:
stars:
hide:
comments: true
jquery: true
---

<style>

svg {
    -webkit-transition: all 2345ms cubic-bezier(0.250, 0.460, 0.450, 0.940); 
       -moz-transition: all 2345ms cubic-bezier(0.250, 0.460, 0.450, 0.940); 
         -o-transition: all 2345ms cubic-bezier(0.250, 0.460, 0.450, 0.940); 
            transition: all 2345ms cubic-bezier(0.250, 0.460, 0.450, 0.940); /* constant friction approximation */
  }

#sixth-pie {
    position:relative;
}

#arrow {
    position:absolute;
    top: 268px;
    left: 568px;
    z-index:2;


    width: 0; 
    height: 0; 
    border-top: 32px solid transparent;
    border-bottom: 32px solid transparent;    
    border-right:32px solid black; 
}

</style>

<p>Click a link to transform the pie chart!</p>

<ul id="options" class="no-bullets">
    <li><a href="#restaurant">Restaurant</a> </li>
    <li><a href="#buffet">Buffet</a> </li>
    <li><a href="#date">Date</a> </li>
    <li><a href="#bigBertha">Big Bertha</a> </li>
</ul>

<div id="sixth-pie"><div id="arrow"></div></div>

<p>Click the wheel to spin it! (The more you click, the faster it goes!)</p>



And if something doesn't look right, please leave a comment below and mention which browser you're using. The spinning pie chart looks fine on my version of Chrome, but I wouldn't be surprised if my code is buggy in other browsers. Thanks!


<script src='{{ site.url }}/js/my-sixth-pie-chart.js'> </script>
