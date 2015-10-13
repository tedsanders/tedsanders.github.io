---
layout: default
description: The number of Moore's laws doubles every five years.
title: Moore's Law of Moore's Laws
subtitle: Every five years, the number of Moore's Laws doubles
categories: graphs
comments: true
tags:
javascript: d3
---

<style>
  text,circle {pointer-events:none}
  .bars:hover {fill:url(#barhover)}

.axis path, .axis line {
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 16px;
}

.axis-label {
  font-family: sans-serif;
  font-size: 20px;
}

</style>

<svg id="mooreslaw" viewbox="0 0 720 1100">
  <defs>

    <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%" spreadMethod="pad">
      <stop offset="72%" style="stop-color:rgb(137,207,240)" />
      <stop offset="100%" style="stop-color:rgb(255,255,255)" />
    </linearGradient>

    <linearGradient id="barhover" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="72%" style="stop-color:rgb(170,127,170);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
    </linearGradient>

  </defs>
</svg>

<script src='{{ site.url }}/js/mooreslaw.js'> </script>
