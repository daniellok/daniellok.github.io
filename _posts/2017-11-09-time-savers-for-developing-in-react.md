---
layout: post
type: "blogpost"
title:  "Time Savers for Developing in React"
date:   2017-11-09
excerpt: "Further lessons I've learned in this project"
image: "/assets/images/hourglass-and-laptop.jpeg"
---

It's been a while since the [last post](/blog/building-a-mobile-app/), but I've learned a couple more lessons which I'd like to share.

---

## Identify and abstract out reusable components
Over the course of this project, I realize I have been taking a top-down approach with regard to development. Once our designer had finished the wireframes, I started working screen-by-screen: I'd work on the settings page, then the storefront page, then the notifications page, etc. At the time, it made sense. The content of each screen was almost completely unique, so I felt this was a fine approach to take.

However, in hindsight, I realize that I would have saved a lot of time if I had taken a day or so to identify small components that would be reused, and build those first. Much like how any program will have some functions that will be called from multiple places, an app with a consistent design language will definitely have components (such as buttons or modals) which make an appearance in multiple screens.

In the case of this app, I would have benefited massively from building a separate component for this button:

<img src="/assets/images/cartbutton.gif" style="margin: auto; display: block; max-width: 70%" />

The reason I didn't at first was that it was a fairly simple element--a `TouchableOpacity` with some text inside. However, the fact that it's a simple component shouldn't be a deterrent from abstracting it. This button was used in almost every page in _both_ apps (for different functions), and that should have been a clear indicator that it deserved to be its own component.

At first, I didn't feel inconvenienced. I was working on this project alongside my regular coursework, so progress on the app was done in slow, spread-out chunks. However, when the time came to polish off some features (e.g. experimenting with small UI improvements such as drop shadows and animations), it became a nightmare to change all the styles in all the files in which this button made an appearance. 

[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is a common principle in software development, and I'm not sure why I didn't realize earlier that it's equally applicable to front-end elements. In fact, React makes it [easy](https://reactjs.org/docs/composition-vs-inheritance.html)! Components are made to be reused, and modifying them to suit an individual page's needs can be done through supplying different `props` or `children`.

## Get a linter

When you're working on getting features up, it can be tempting to tell yourself "I'll clean up later". However, in my experience, this often doesn't pan out, and you're left with code which is hard to read. Sometimes, even if you do intend to clean up, it can be quite discouraging to go back to a long, messy file.

If you haven't yet, one thing that has helped me immensely is installing [ESLint](https://eslint.org/), and getting a good style guide (e.g. [Airbnb's](https://github.com/airbnb/javascript). There's even an [npm package](https://www.npmjs.com/package/eslint-config-airbnb) for it!).

Over time, I feel that this has helped me get into the habit of writing neat code, even when I'm using editors which don't have a linter installed.

---