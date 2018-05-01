---
layout: post
title: "Dimming with arduino"
description: "Building a dimmer with arduino"
category: diary
startDate: 2018-04-02
tags: ["arduino", "json", "serial", "AC"]
comments: false
learnings: 
  - NEVER EVER be sure that the reason you suspect why an error occurs is correct! NEVER!
links:
  - url: https://arduinojson.org/assistant/
    name: Arduino JSON Library and Assistant

---

### What I've done today

I started building an Arduino/ESP8266 controlled lamp two years ago.
Never finished it since now because everytime a new problem occured.

![Lamps and code :-)]({{ site.url }}/assets/arduino-lamp.jpg "Lamps and code")

I actually wanted to build it using ESP8266 only. But the critical timing for dimming the lamps does not work reliably on the ESP :-(

So I decided to rebuild it and do the MQTT and WLAN Part on the ESP and the rest on the arduino.
Communication between those two is done via JSON over Serial. Because I'm a webdev. I want JSON.

Today I finished the Arduino part after a lot of swearing.

I you're interested in this project: I'll write more about it while working on it and especially when it's finished.