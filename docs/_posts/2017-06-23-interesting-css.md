---
layout: post
title: "Discovered css property 'text-decoration-skip: ink'"
description: Tried out flexbox and some fancy css properties
category: diary
startDate: 2017-06-20
tags: [javascript, css, vue.js, templating]
comments: false
learnings: 
  - there are some really nice css props that finally work in modern browsers
links:
  - url: https://webcode.tools/json-ld-generator/person
    name: JSON-ld generator
  - url: https://search.google.com/structured-data/testing-tool
    name: Structured Data testing tool
  - url: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip
    name: CSS Property 'text-decoration-skip' on MDN
  - url: https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
    name: Nice article about vertical centering with flexbox
---

### What I've done today

* Adding a profile pic to my diary
* Adding Structured Data to diary ([author](http://schema.org/author "Author at schema.org"))
* Refined styling
* Added the current day to the link description generated for twitter and facebook
* Use flexbox to align icons and text on post list

#### I learned about a css property to make underlined links look more nice:
```css
a:hover {
  text-decoration: underline;
  text-decoration-skip: ink;
}
```

The result can be seen if you hover over links on this page: The underline does not cross through the descender of letters anymore.
[Learn more about text-decoration-skip](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip "MDN")

It can already be used because it degrades gracefully.
<p data-height="265" data-theme-id="dark" data-slug-hash="kXpyyw" data-default-tab="html,result" data-user="nhoizey" data-embed-version="2" data-pen-title="text-decoration-skip" class="codepen">See the Pen <a href="https://codepen.io/nhoizey/pen/kXpyyw/">text-decoration-skip</a> by Nicolas Hoizey (<a href="https://codepen.io/nhoizey">@nhoizey</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Use flexbox to align icon and text

I used the technique described in this codepen for the icon+text in the post list.
This makes them align correctly also on mobile

<p data-height="265" data-theme-id="dark" data-slug-hash="BKqQzp" data-default-tab="css,result" data-user="ingomc" data-embed-version="2" data-pen-title="Flex-Box dynamic width, auto-width" class="codepen">See the Pen <a href="https://codepen.io/ingomc/pen/BKqQzp/">Flex-Box dynamic width, auto-width</a> by Andre (<a href="https://codepen.io/ingomc">@ingomc</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### What I'm planning to do next

Finally work on the [portfolio](https://github.com/hputzek/portfolio-rocio "Portfolio on github")
