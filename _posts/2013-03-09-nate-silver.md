---
layout: default
title: Why the media is ignoring Nate Silver by praising Nate Silver
description: An introduction to Bayesian reasoning that doesn't use the phrase Bayesian reasoning. Until now. Oops.
alias: /nate-silver.php
comments: true
---

<p>Mr Blue claims a weighted coin is biased to land heads 90% of the time. Mr Red claims the coin is biased to land heads 50% of the time. You flip the coin only once, and it lands heads. Who was right?
</p>

<p>This question is a deep one.
</p>

<p>Clearly, after only one flip, we can't say for certain who was right, since both men predicted that heads had a chance of coming up (they only disagreed on the probabilities, not the possibilities). And yet, there is a sense that Mr Blue, who predicted a 90% chance of heads, was more corroborated by reality than Mr Red, who predicted only a 50% chance. But how much more credit does Mr Blue deserve?
</p>

<p>It turns out that there is a beautifully simple method for calculating how new evidence should affect old beliefs (like how a coin landing heads should affect your belief of whos right). Here's how it works:
</p>

<p>To visualize the probabilities better, let's imagine that we live in 100 possible universes.
</p>

<figure>
<img src="{{site.url}}/img/universes100.gif" />
</figure>

<p>Before the flip, let's suppose we trusted each man equally. In other words, in 50 possible universes Mr Blue was right and in the other 50 possible universes Mr Red was right.
</p>

<figure>
<img src="{{site.url}}/img/universes50-50.gif" />
</figure>

<p>Now, in the universes where Mr Blue is right, the coin will land heads 90% of the time. But in the universes where Mr Red is right, the coin will land heads only 50% of the time.
</p>

<figure>
<img src="{{site.url}}/img/universes-45-5-25-25.gif" />
</figure>

<p>Before we flip the coin, we expect to find ourselves in any of these 100 possible universes with equal likelihood. But what about after the coin flip?
</p>

<p>After the coin flips heads, it's time to update our beliefs. Now we know our universe cannot be one in which tails was flipped, narrowing down the number of possible universes to 70. Of these 70 universes remaining, we see Mr Blue is right in 45 of them while Mr Red is right in 25 of them.
</p>

<figure>
<img src="{{site.url}}/img/universes45-25.gif" />
</figure>

<p>Before the coin flip, we believed each man equally. That is, we thought Mr Blue had a 50% chance of being right and we thought Mr Red had a 50% chance of being right. However, after the coin flip, we should believe Mr Blue has a 45/70 (64%) chance of being right while Mr Red only has a 25/70 (36%) chance of being right.
</p>

<p>The coin flip increased our confidence in Mr Blue by only 14 <a href="http://xkcd.com/985/">percentage points</a>!
</p>


<p>So what does any of this have to do with Nate Silver and title of this post?</p>

<p>Some time before the 2012 US Presidential Election, Nate Silver's forecast model showed that Obama had a 90% chance of winning the election. At the time, people like David Brooks, Joe Scarborough, and others argued that the election was still a 50/50 toss up.</p>

<p>When Obama eventually won, many people in the media believed that the outcome vindicated Nate Silver's high degree of confidence and his polling model. But in doing so, they are ignoring the mathematical approach that Nate Silver preaches. The single data point of Obama's victory should only boost our belief in Nate Silver by a modest amount.
</p>

<p>By itself, an Obama victory is not enough to prove the model right, and in fact a Romney victory (which Nate Silver predicted would happen with 10% confidence) would not have been enough to prove the model wrong either.</p>

<p>My point is not that Nate Silver's model is bad or that we shouldn't trust him (in fact, I think his model is great and there are many reasons to trust him). Rather, my point is that we shouldn't judge the success or failure of a model on limited, noisy data. The right way to judge a probabilistic model is to ask whether it makes sense, not whether it matches a few data points.</p>