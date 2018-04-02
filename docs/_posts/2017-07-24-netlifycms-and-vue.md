---
layout: post
title: "Experiments with netlify cms and vue/nuxt"
description: "using netlifycms to provide content for a nuxt/vue app"
category: diary
startDate: 2017-06-20
tags: [netlify cms, netlify, vue.js, nuxt, github]
comments: false
learnings: 
  - netlifycms is great for small projects!
links:
  - url: https://www.netlifycms.org
    name: Netlify CMS
---
![Netlify Swag]({{ site.url }}/assets/netlify-swag.jpg "Netlify Swag")
### What I've done today

* Registered @ netlify
* Deployed my app there
* Started configuring netlifycms

If you're interested in this kind of stuff stay tuned, I'll post a detailed description of what I did when it's finished and you can see some outcome :-)
I'll also provide a link to the repo and the finished app then.


This is my experimental config since now.
I try to reproduce a datastructure I already use in the app so that I can use netlifycms's output directly in my app.
````
collections: # A list of collections the CMS should be able to edit
  - name: "projects-collection" # all the things in one entry, for documentation and quick testing
    create: true # Allow users to create new documents in this collection
    label: "Projekte"
    files:
      - name: "projects"
        label: "Projekte"
        description: "Projekte, die im Slider angezeigt werden"
        file: "static/data/projekte.json"
        fields:
          - label: "Projekt"
            name: "project"
            widget: "list"
            fields:
              - label: "Seite"
                name: "slide"
                widget: "list"
                fields:
                  - {label: "Seitentitel", name: "title", widget: "string"}
                  - label: "Seiteninhalte"
                    name: "elements"
                    widget: "object"
                    fields:
                      - label: "Überschriften"
                        name: "headlines"
                        widget: "list"
                        fields:
                          - {label: "headline", name: "type", widget: "hidden", default: "hidden"}
                          - {label: "Überschrift", name: "content", widget: "string"}
                          - {label: "Abstand links in %", name: "positionLeftInPercent", widget: "number"}
                          - {label: "Abstand von oben in %", name: "positionTopInPercent", widget: "number"}
                          - {label: "z-index", name: "zIndex", widget: "number"}

````

### What I'm planning to do next

Integrate the generated data (json) in vue app
