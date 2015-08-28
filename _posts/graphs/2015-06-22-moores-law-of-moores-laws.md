---
layout: default
description: The number of Moore's laws doubles every five years.
title: Moore's Law of Moore's Laws
subtitle: Every five years, the number of Moore's Laws doubles
categories: graphs
tags:
javascript: d3
---

<style>
  text,circle {pointer-events:none}
  .bars:hover {fill:url(#barhover)}
</style>

<svg id="mooreslaw" viewbox="0 0 720 720">
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

Below is a draft of a column submitted to MRS Bulletin. Some parts I really like, some parts still feel amateurish. Feedback welcome.

50 years ago, a mild-mannered, 36-year-old chemist named Gordon Moore penned an innocuous article in the trade magazine Electronics. In the article, Moore, the director of R&D at Fairchild Semiconductor, put forth a prediction about the nascent semiconductor industry. After seeing transistor counts jump year-to-year from roughly 8 to 16 to 32 to 64, Moore forecast that this exponential progress in integrated circuits would continue unabated until at least 1975, and perhaps even beyond.

Well, half a century hence, I’m typing out this article on a computer packing around 1,400,000,000 transistors (for those keeping score at home, that’s about 30 doublings). To call Moore’s prediction a success would be like calling Serena Williams a semi-decent tennis player. Usually, a prediction is fortunate if it correctly predicts the future just once. If a prediction is right again and again, decade after decade, it’s practically a miracle.

And when I say Moore’s law is practically a miracle, I don’t mean to be hyperbolic. The exponential rise in computing power is the engine powering the digital revolution. It’s lifting living standards around the world and forever changing the way humans work and play (and even how they watch British babies bite fingers. Bad Charlie!).

Given the tremendous success and fame of Moore’s law, it’s no surprise that, just like a rock star, it would attract groupies and posers and copycats and coattail-riders.

Suppose you’re a materials scientist trying to publicize your research but failing to get any traction. Every year, you improve your material, but beyond some rote applause at a conference and a citation or two, no one seems to really care about your life’s work. How can you ever hope to attain some hype?

These days, I see more and more scientists resorting to the same simple strategy. Do you research batteries? Then talk about the Moore’s law of batteries! Do you research materials for nuclear fusion? Talk about the Moore’s law for fusion! Do you research how paint dries? Talk about the Moore’s law of drying paint!

Comparing your research to Moore’s law is an instant recipe for getting your audience to imagine how your work might one day spawn entire industries and radically transform the world. And the best part about exponential growth is that it starts small. If anyone ever questions whether your work actually *is* world-changing, you can just rebut that while your first steps are admittedly small on an absolute scale, that’s how exponential curves always start. Only after growing exponentially for decades will they become obviously huge.

Riding coattails is a time-tested strategy, and in the world of materials science and technology, there may be no bigger coattails than those of Moore’s law. So it’s hardly a surprise to see more and more scientists calling their research subject’s progress the “Moore’s law of ______.” In the past few years I’ve heard scientists reference the Moore’s law of solar power, the Moore’s law of mass spectroscopy, and the Moore’s law of batteries, just to name a few.

Seeing this explosion of references to Moore’s law got me thinking along the same lines as Gordon Moore 50 years ago. How fast are these pseudo Moore’s laws being invented? Are they following any sort of predictable trend that would invite us to cautiously extrapolate? And if so, is this merely a short-term fad or the beginning of a tectonic shift in science salesmanship?

Well, my dear reader, you are in for a treat. On your behalf, I have humbly performed some original scholarly research, scouring the web for every reference I could find to the “Moore’s law of X” or “Moore’s law for Y” and then tracing each back to its earliest mention. As I compiled these data, I made a shocking discovery:

There is a Moore’s law of Moore’s laws! (See Figure 1!)

For decades now, the number of Moore’s laws coined has been roughly doubling every five years. Early Moore’s laws were technical in nature (e.g., the Moore’s law of software or the Moore’s law of bandwidth), but as time passed Moore’s laws were coined for topics far afield of computers (e.g., the Moore’s law of corn or the Moore’s law for NFL field goals).

Let’s extrapolate this exponential growth forward. If the number of Moore’s laws continues to double every five years, then, by the year 2080, there will exist a Moore’s law for every single word in the English language (which number a few hundred thousand to a million, depending on your degree of vocabulistic conservatism). We’ll have a Moore’s law of zebras, a Moore’s law of love, and even a Moore’s law of absquatulating. At that point, for the Moore’s law of Moore’s laws to continue, we may need to start inventing new words. Are you ready for a Moore’s law of zakalaxing?

Of course, the other possibility is that at some point this exponential growth will decelerate. As the poet Chaucer cautioned back in 1374, “All good things must come to an end.” Perhaps what so far looks like an exponential curve is really just the first half of its calmer cousin, the S-curve.

When it comes to the original Moore’s law of integrated circuits, the writing may already be on the wall (no, literally, there’s a Moore’s law poster in my hallway). A constellation of facts suggest that the era of rapidly shrinking transistors is at last ending. Next-gen EUV lithography is years behind schedule. Graphics chips from AMD and NVIDIA have been stuck at the 28-nm node since 2011. And the industry’s most successful transistor shrinker, Intel, recently delayed its Cannonlake processor indefinitely, breaking the company’s famous tick-tock pattern of CPU releases. Ultimately, as transistors approach the atomic scale, it’s becoming harder to make them cheaply and reliably.

If Moore’s law is ending, what does that bode for the Moore’s law of Moore’s laws? Well, just as Gordon Moore made a bold prediction at the end of his famous 1965 article in Electronics magazine, I’ll end this article with a bold prediction of my own:

50 years from today, I, like Gordon Moore before me, will be a CEO billionaire, famous around the world for first recognizing the Moore’s Law of Moore’s Laws. And you, dear reader, will be able to brag at dinner parties that you were among the first to read about it, in your very own issue of MRS bulletin now framed on your living room wall.
