---
layout:     post
title:      Quick facts on the Google Brain AMA
date:       2016-08-13
summary:    A summarization of the awesome Google Brain AMA on r/machinelearning
categories: machine-learning
---

<style type="text/css">
  .post>.measure {
    max-width: 50rem;
  }
</style>

Read through Google Brain's AMA on [r/machinelearning](https://www.reddit.com/r/MachineLearning/comments/4w6tsv/ama_we_are_the_google_brain_team_wed_love_to?st=irsuxr8l&sh=0288a171) if you have forgotten what true yearning feels like. Man what a great job to have. Maybe one day guys, maybe one day.

### Education Levels at Google Brain

"Do you need a PHD?" is a painfully common question asked of ML researchers at Google, and the answer is pretty clear. No, you dont *need* one because 22% of the Google Brain team don't have one, but the clear majority do have one.

Chris Olah is a clear outlier, having not completed a university degree. Damn impressed with you Chris.

#### *Doctorate of Philosophy Degrees: 78%*

#### *Masters Degrees: 34%*

#### *Bachelors Degrees: 95%*

About 5% of the questions in the AMA were related to education for a career in ML. That's around 40 questions, all with about 1 upvote each.

### Most Responsive Googler = Jeff Dean

![most_responsive]({{ site.url }}images/most_responsive.png)

### Googler's Most Used Words

![most_responsive]({{ site.url }}images/most_used_words.png)

### Highest Upvoted Answer:

#### How was ['Dropout'](https://en.wikipedia.org/wiki/Convolutional_neural_network#Dropout) conceived? Was there an 'aha' moment?

<blockquote>
  <p>
  There were actually three aha moments. One was in about 2004 when Radford Neal suggested to me that the brain might be big because it was learning a large ensemble of models. I thought this would be a very inefficient use of hardware since the same features would need to be invented separately by different models. Then I realized that the "models" could just be the subset of active neurons. This would allow combinatorially many models and might explain why randomness in spiking was helpful.<br><br>
  Soon after that I went to my bank. The tellers kept changing and I asked one of them why. He said he didn't know but they got moved around a lot. I figured it must be because it would require cooperation between employees to successfully defraud the bank. This made me realize that randomly removing a different subset of neurons on each example would prevent conspiracies and thus reduce overfitting.<br><br>
  I tried this out rather sloppily (I didn't have an adviser) in 2004 and it didn't seem to work any better than keeping the squared weights small so I forgot about it.
  Then in 2011, Christos Papadimitriou gave a talk at Toronto in which he said that the whole point of sexual reproduction was to break up complex co-adaptations. He may not have said it quite like that, but that's what I heard. It was clearly the same abstract idea as randomly removing subsets of the neurons. So I went back and tried harder and in collaboration with my grad students we showed that it worked really well.
  </p>
  <footer><a href="http://www.cs.toronto.edu/~hinton/"><cite title="Geoffrey Hinton">Geoffrey Hinton, /u/geoffhinton</cite></a></footer>
</blockquote>

### Method & Final Thoughts

This information was produced using simple tools from [praw](https://praw.readthedocs.io/en/stable/), [matplotlib](http://matplotlib.org/), and [nltk](http://www.nltk.org/). Education information was gathered manually (eugh).

I was really encouraged to read about the diversity within the Google Brain team. Having come from a design and architecture background myself, with a fondness for philosophy and literature, it's great to see that intellectual diversity is valued highly.
