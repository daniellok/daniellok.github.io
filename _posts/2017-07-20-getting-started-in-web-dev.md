---
layout: post
type: "blogpost"
title:  "Getting Started in Web Development"
date:   2017-07-20
excerpt: "The struggle of picking up JavaScript, and all the packages that come with it"
image: "http://i.imgur.com/lrgCHVu.jpg"
---

Close to the end of May, I started my first [JavaScript](https://github.com/workshopper/javascripting) and [Node.js](https://github.com/workshopper/learnyounode) tutorials after reading [Mozilla's re-introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). In general, I would say that the experience has been very rewarding, and in this post I'll be going through some of the challenges I've faced so far.

---

## Syntactic Sugar
One of the key strengths of JavaScript is that it makes asynchronous functions extremely easy to work with via callbacks. This is particularly important in web applications, as you will most likely be making a call to fetch data from a webpage or API of some sort. Prior to learning JavaScript, the only other experience I'd had with HTTP requests was with Python's [requests](https://github.com/requests/requests) package, in which the functions are blocking.

It took a while for me to get used to using callbacks, but I got there eventually. However, before I had time to feel proud of my achievement, I heard about [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)--a better way of writing callbacks which offers increased readability and convenience. Still fresh and eager to learn, I dove into the documentation and tried to convert all the callbacks from my tutorials into Promises. When I was done with that, I came across the new [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)!

I began to feel a bit frustrated--I had spent a lot of time learning what appeared to be three ways of doing the same thing:

```
// with a callback
fetchData(url, (response) => { 
  saveData(response, (status) => {
    console.log(status);
  });
});

// with a Promise
fetchData(url)
  .then((response) => saveData(response))
  .then((status) => console.log(status));

// with async/await
let response = await fetchData(url);
let status = await saveData(response);
console.log(status);
```
<p style="text-align: center; font-size: 1rem"><i>Arrow functions vs. functions were another thing I had to wrap my head around, not to mention "var" vs. "let"</i></p>

Each one seemed to be more or less equivalent to the others, and I wondered why callbacks had to be changed in the first place. However, as I began working on projects, the benefits became clearer. Promises really _do_ make your code more readable, especially when dealing with long chains of callbacks. Additionally, async/await helps your async functions behave a bit more like synchronous functions, which I've found useful in certain situations.

If you're just beginning to pick up JavaScript, I urge you to suspend judgement of these little inconveniences--developers are lazy by nature, so if there's a new feature in a language, chances are that there were good reasons for it to be implemented. Also, don't feel pressured to learn everything right away! In fact, I didn't bother picking up async/await until I felt like I needed its functionality. Starting out is the hardest part of learning anything, and in my opinion, the most important thing to do in this phase is to keep yourself interested by learning things you'll actually use. That brings me to my next point...

## Frameworks & Packages
Once I got down to actually trying to build something, it seemed like vanilla JavaScript wasn't going to cut it after all--I had to learn back-end frameworks like [Express](https://expressjs.com/), front end frameworks like [React](https://reactjs.org/) and [jQuery](https://jquery.com/), mapping tools like [Sequelize](http://docs.sequelizejs.com/) to interact with databases, and those are just the ones I've had time to learn so far. [This article](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) pretty much sums up how I felt.

| <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" style="height: 100px; vertical-align: middle" /> | <img src="https://cdn.worldvectorlogo.com/logos/react.svg" style="height: 80px; vertical-align: middle" /> | <img src="https://angular.io/assets/images/logos/angular/angular.svg" style="height: 85px; vertical-align: middle" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/800px-Vue.js_Logo.svg.png" style="height: 85px; vertical-align: middle" /> | <img src="http://docs.sequelizejs.com/manual/asset/logo-small.png" style="height: 85px; vertical-align: middle" /> |

Now that I think back, though, I realize how insanely convenient it is to be able to learn a single programming language and go on to build your own web-app, database and server included. Yes, there __is__ a lot to learn, but I'm not entirely sure why that was so frustrating. I believe it has something to do with the fact that I haven't grown up without the internet. Everything in this day and age is _expected_ to come with some sort of internet functionality, and so it becomes very easy to take web-apps for granted.

Learning to build a full-stack web application is definitely tough, but I'm grateful that the learning curve is significantly reduced these days with the ability to learn it all in one language. It would probably have taken me twice as long to build something if I had to learn Ruby/Go/PHP/Django (Python) and SQL on top of JavaScript (although I would like to pick up some of these in the future).

---

All-in-all, getting started in web development can be an incredibly frustrating task, but after the pain of building your first web-app, I think it's important to take a step back and reflect on your frustrations. Learning a new skill is never easy, and especially for something as complex as __building a secure, responsive application on the internet__, it shouldn't be expected to be. At least in my case, having that perspective helps to keep me humble and motivated. I'm still a long way from knowing what I'd like to know, and I couldn't be more excited about that.