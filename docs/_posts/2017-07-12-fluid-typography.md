---
layout: post
title: "Fluid Typography & Layout"
description: "Making slider Elements fluid"
category: diary
startDate: 2017-06-20
tags: [scss, codepen, experimental]
comments: false
learnings: 
  - CSS can really do a lot of interesting stuff that looks like Javascript would be involved
links:
  - url: https://codepen.io/hputzek/full/QgzZYe/
    name: Codepen from my current experiment (resize window to see the effect)
  - url: https://github.com/hputzek/portfolio-rocio/tree/feature/add-projects-programatically
    name: Link to current feature branch of portfolio I'm working on (github)
  - url: https://www.smashingmagazine.com/2016/05/fluid-typography/
    name: Article about fluid typography on smashing magazine
---
![Fluid Typography]({{ site.url }}/assets/fluidLayout.png "Fluid Layout")
### What I've done today

Today I experimented with fluid layout.
I'm going to build a site that basically consists of sliders.

So the requirements are:
* The Layout of a slide has to be as free as possible.
	* That means elements can be placed freely and can overlap each other.
* The plan is to make the whole thing responsible.

Soooo... I started by experimenting in a codepen.

[Feel free to check out the first results](https://codepen.io/hputzek/full/QgzZYe/ "Codepen about fluid layout")

This is what happens:
* I place elements by ``left`` and ``top`` CSS Values.
* In addition to that I implemented fluid typography.
* If the viewport width is under a certain limit, I just place the elements per ``display: block;`` and ``position: relative;``
which means they take the full window with.

This way it's possible to do 'gridless' layouts with all freedom possible but also have them work responsive.

Nice :-)

### What I'm planning to do next

Refine my work
