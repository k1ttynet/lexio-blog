---
layout: ../../layouts/BlogLayout.astro
title: 'FUCK ECHO: Why You Should Use Alt Text'
shortenedDate: "10/30"
shortenedYear: "24"
pubDate: "October 30, 2024"
author: 'lexio'
image:
    url: 'https://iili.io/2CDN1Ra.png'
    alt: "The source code of Echo's website, containing several ableist remarks in the site's alt text."
tags: ["2024", "accessibility"]
---

I was scrolling through Fedi when I came across a post by [@echo@woem.men](https://woem.men/@echo) saying to SSH to [their website](https://exhq.dev) (which resulted in this, by the way:)

![Connecting to exhq.dev via SSH, resulting in a message saying "uhhh uhmmm girls are really cool and I like them" with a pleading Neocat below it](https://woem.men/files/webpublic-0a88a5a9-ae76-491d-a790-68d134c3a5dd)

I went to the website itself out of curiousity and found this:

![Their website having several unloaded images, revealing the alt text for every image, which was "LMAO IMAGINE BEING BLIND".](https://catrat.social/system/media_attachments/files/113/396/744/038/334/390/original/ecfe54bede915b82.png)

*edit 2-26-2025: this image was hosted on a previous version of catrat.social, therefore it doesnt show anymore. however, it is a good example on how alt text is useful, so i'm keeping it like this.*

Now, if you don't know what's going on in this image, let me explain:

These are images failing to load. When an image fails to load in most web browsers, it shows the alt text to help the user identify the image without it having to be loaded. However, with all of the alt text saying "LMAO IMAGINE BEING BLIND", it is impossible.

I'm not saying that you *have* to use alt text (however it is highly recommended), just don't use it for this purpose.

### <mark>How do I use alt text on my website?</mark>

#### HTML

```html
<img src="https://fyle.uk/yuri" alt="Two cat girls kissing">
```

#### Markdown
```md
![Two cat girls kissing](https://fyle.uk/yuri)
```