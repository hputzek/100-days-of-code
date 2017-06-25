---
layout: post
title: "Rooting my phone to fix google backup transport"
description: "Fix backup and restore function on xiaomi MI5s"
category: diary
tags: [adb shell, twrp, android, miui]
comments: false
learnings: 
  - Learned a lot about twrp, adb shell, google backup transport configuration
links:
  - url: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
    name: Markdown cheatsheet
  - url: https://www.chinahandys.net/xiaomi-mi5s-test/
    name: Xiaomi mi5s Test
  - url: https://jftr.de/2014/01/fairphone-and-android-backups-to-the-google-cloud/
    name: fix google backup transport
    
---

Today was more like a "fix some stuff" day, but I did enough "real" programming the days before :-)

### What I've done today

Today I finally managed to fix google backup transport on my MI5s china phone.
[Bug description](http://en.miui.com/thread-550568-1-1.html "Bug description in miui forum")
> Google Backup Transport does not work - "no account is currently storing backed up data"

To fix that I did [the steps described here](https://jftr.de/2014/01/fairphone-and-android-backups-to-the-google-cloud/ "Fix google backup transport")
Essentially 
* root the phone and 
* do a complete reinstall of the google apps,
* configure backup set to restore

### What I'm planning to do next

Work on the [portfolio site](https://github.com/hputzek/portfolio-rocio "Portfolio Rocio on github")
