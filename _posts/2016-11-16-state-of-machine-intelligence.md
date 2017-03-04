---
layout:     post
title:      State Of Machine Learning 3.0.1
date:       2016-11-14
summary:    I made Bloomberg Beta's cool infographic more useful.
categories: machine-learning
---

![state of machine learning 3.0](https://d3tdunqjn7n0wj.cloudfront.net/720x480/main-art-v-3-mi-landscape-3.81-1400px-4f76e61045d9dc463cae0acfff57c210.jpg)

### From Image To List

The above infographic from [Bloomberg Beta](https://github.com/Bloomberg-Beta/Manual) provides a snapshot of the 'players' in Machine Intelligence, from their perspective. There's around 100 or so names on it, and as logos on a page there's no much you can do with them. I thought it would be cool to try and follow all of them on Twitter and Linkedin and Github, so that my social network feeds became filled with people in the MI/ML/AI space. To do this I needed to have all those logos in an image become a text list I could feed into a program.

To get this list I enlisted the help of a nice Egyptian lad through [Freelancer](https://www.freelancer.com.au/?gclid=CMKIqYCJrdACFYGXvAodCbUJIw&utm_expid=294858-480.BePKZE1sQ3uuAHUp7JoJ1Q.0&utm_referrer=https%3A%2F%2Fwww.google.com.au%2F). I did about 30 names, and then went to sleep whilst my new 'employee' toiled away on the rest. The wonders of outsourcing.

I woke up in the morning to a hierachical list in JSON format, ready for me to play around with in Python. For the list of all *companies* and *technologies* in the infographic see [this Github Gist](https://gist.github.com/thundergolfer/9367910f03904c1338a93d7a7fa221bd).

### LinkedIn API Problems

I wanted to follow these companies on LinkedIn if I could so naturally I searched on Google for a Python API wrapper. The most starred was [ozgur/python-linkedin](https://github.com/ozgur/python-linkedin). It looked good, a lot of functionality and a lot of documentation on the README. I would find out not too long after that not only was repo very poorly maintained, it's Github source code had diverged from the PyPi package source and it was servicing a version of the LinkedIn API that no longer exists!

I've come across a few project now that have a lot of stars, and were once likely good open-source projects, but have no become abandoned by their owner. These situations are frustrating and I think Github should do a better job of handling them. At *minimum* I think there should be a warning sign that shows above the repo to say that the project has been neglected for a while. This particular project has 9 pull-requests outstanding, most fixing existing problems.

Safe to say I abandoned the idea of following these companies on LinkedIn with a script.

### Following On Twitter

I did have success with Twitter following thankfully. Seeing as I only had the company's name and not their Twitter ID, I coded a few tricks that allowed me to search the company name as a *keyword* and then narrow down that results according to certain 'checks'. The code is in a script called `twitter_follow.py` and it's available in the same Github Gist [here](https://gist.github.com/thundergolfer/9367910f03904c1338a93d7a7fa221bd).

### Going Forward

I might write a script to find these company's Github accounts and follow them. I may also use this list in the future to track the health of this group of companies. Many of them are startups so it will be interesting to see which fail, merge, or grow.

Another thing I may use it for is as a 'target list' of companies to apply to for internships and graduate roles. Now that I have a text list I can put it all into Excel or something and manage all my applications better.
