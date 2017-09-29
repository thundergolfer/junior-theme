---
layout: about
title: About Me
permalink: /about/
tags: about
flicker: true
headshot: /images/headshot.jpg
js:
- js/quick_facts.js
---

{% if site.show_about_me_quick_facts %}
{% comment %} This must be put first after the Jeykll metadata header! {% endcomment %}
@@ moderator of [r/learnmachinelearning](https://www.reddit.com/r/learnmachinelearning/)
@@ author of [insults](https://github.com/thundergolfer/Insults)
@@ 123 Github Stars
{% endif %}

I am a Software Engineering student at [RMIT University](https://www.rmit.edu.au/) in Melbourne. I interned with [Zendesk](https://www.zendesk.com/) as a Data Engineer November 2016-2017 and I will be interning with [Atlassian](https://www.atlassian.com/) late November 2017 through to March 2018.

I'm currently doing a lot of work building developer communities around my University. I'll chase any opportunity to improve collaboration and outreach in the tech. industry.

My main areas of interest are in NLP, Agent-Oriented Programming, and Computational Dialectics.

{% if site.show_talks_section %}
## Talks

- Put something here!
{% endif %}

{% if site.show_workshops_section %}
## Workshops

- Put something here!
{% endif %}


<style>
.post-header, #talks, #workshops {
  text-align: center; /* Want the About Page header to be in the middle */
}

#quick_fact {
  border: 2px solid black;
  font-size: 0.8em;
  padding: 1%;
  margin-right: 2%;
}
</style>

{% for js in page.js %}
  <script type="text/javascript">
  {% include {{ js }} %}
  </script>
{% endfor %}
