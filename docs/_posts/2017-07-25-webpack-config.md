---
layout: post
title: "(Responsive) Image Processing using Webpack & gulp"
description: "autogenerating srcset + preview images for vue app"
category: diary
startDate: 2017-06-20
tags: [javascript, webpack, gulp, responsive, image processing]
comments: false
learnings: 
  - Everything takes longer than expected
  - But thats fine
links:
  - url: https://www.netlifycms.org
    name: Netlify CMS
  - url: https://github.com/herrstucki/responsive-loader
    name: webpack responsive loader by stucki
  - url: https://github.com/mahnunchik/gulp-responsive
    name: gulp responsive
  - url: https://github.com/lovell/sharp
    name: "sharp: High performance Node.js image processing"
---
![Webpack banner]({{ site.url }}/assets/webpack-cover.jpg "http://www.cross-platform-blog.de/tools/interview-mit-webpack-autor-tobias-koppers/")

### What I've done today

Today I worked on automatically processing images with webpack and gulp.
I'm building a responsive image component in vue which uses the generated images.

The workflow is the following:

For the main site I use:
> Image -> webpack -> resized images + srcset markup + inlined preview image

Additionally I need a preview image which is used in netlify cms when working on adding / changing content.

This preview image is created by gulp:

> Image -> gulp -> dist folder: resized preview image

I use a pretty fast library here to save time in the build process. Its called sharp (see links)

For the webpack side of things I use ``responsive-image-loader`` and in gulp I use ``gulp responsive``
Actually I dont create responsive image versions with gulp, but it uses the fast sharp library :-)

Why webpack AND gulp?

Because webpack automagically creates an image object which also contains the image size. I need that.
The gulp task is more "dumb" and just processes everything from its input dir to its output dir.
### What I'm planning to do next

Working on the responsive image vue component
