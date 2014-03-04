---
layout: default
description: My sixth d3 pie chart.
title: My sixth pie chart with d3
subtitle:
categories: graphs
tags:
stars:
hide: true
comments: true
jquery: true
---

<style>

svg {
    -webkit-animation: rotation 6s infinite linear;
    animation: rotation 6s infinite linear;
}

@-webkit-keyframes rotation {
    from {-webkit-transform: rotate(0deg);}
    to   {-webkit-transform: rotate(359deg);}
}

@keyframes rotation {
    from {transform: rotate(0deg);}
    to   {transform: rotate(359deg);}
}

</style>

<div id="sixth-pie"></div>



<ul id="options" class="no-bullets">
    <li><a href="#restaurant">Restaurant</a> </li>
    <li><a href="#buffet">Buffet</a> </li>
    <li><a href="#date">Date</a> </li>
    <li><a href="#bigBertha">Big Bertha</a> </li>
</ul>

Click a link to transform the pie chart!

<script src='{{ site.url }}/js/my-sixth-pie-chart.js'> </script>
