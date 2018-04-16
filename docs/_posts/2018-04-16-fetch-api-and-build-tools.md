---
layout: post
title: "The fetch api & build tools"
description: "About the fetch api & how to compile node-sass on a windows machine"
category: diary
startDate: 2018-04-02
tags: [javascript, yarn, babel, SCSS, gulp, git]
comments: false
learnings: 
  - npm install -g windows-build-tools instead of doing everything by hand
  - Use the javascript fetch api with different connection methods and headers (and the request object)
links:
  - url: https://courses.edx.org/courses/course-v1:Microsoft+DEV234x+1T2018a/course/
    name: "edx Course: Asynchronous Programming with Javascript"
  - url: https://popmotion.io/
    name: "popmotion.js - a functional, flexible JavaScript motion library"
---

### What I've done today
![The fetch api]({{ site.url }}/assets/fetch-api.jpg "the javascript fetch api")

Today I learned how to use the fetch api in Javascript instead of relying on jQuery or other libraries for doing ajax calls.

Furthermore I managed to install and configure the build tools for building node-sass on my windows machine.

[node-gyp](https://github.com/nodejs/node-gyp#on-windows) had to be configured correctly to allow node-sass to compile while doing yarn install - this took way to long.

After trying to do it by hand I found out that ``npm install -g windows-build-tools`` is a bit easier.. but it still did not work.
Finally  ``npm config set msvs_version 2015`` Did the job...

### What I'm planning to do next

Now that node-sass finally works I wanna try out popmotion.js!
Popmotion is a functional, flexible JavaScript motion library.
