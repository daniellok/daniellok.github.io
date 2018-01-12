---
layout: post
type: "blogpost"
title:  "Building a Cross-Platform Mobile App"
date:   2017-10-03
excerpt: "If you thought cross-browser compatibility was finicky..."
image: "https://camo.githubusercontent.com/0a5cdea7053e94023fb22b5241aa5e774ce0df9e/68747470733a2f2f63646e2e7261776769742e636f6d2f616873616e617a696d2f776f726b73686f702f6d61737465722f696d672f72656163742d6e61746976652d6c6f676f2e737667"
---

A while ago, a friend of mine asked me if I was interested in helping him build a couple of mobile apps to help streamline the business process for a local noodle supplier. It seemed like a fairly simple task--we wouldn't be handling transactions, just building a platform to place orders and track deliveries.

Since I had a bit of experience with React at this point, I figured that this project would be a good chance to give React Native a try. Plus, being committed to a project which you know will be used in a business always helps to keep you attentive and responsible. I agreed to take on the project, and although I haven't finished building it yet, here are some tips I wish I had known before starting out.

---

## React Native is great, but it has its shortcomings
React native is an amazing framework to conveniently build cross-platform apps, but this doesn't mean that you don't have to test on multiple devices! Much like how you should test your web-apps for cross-browser compatibility, it is important to test your React Native app on both iOS and Android to make sure things render as expected.

I use a MacBook Pro with a 120GB SSD, and although I intended to install Android Studio and test on both platforms, I ran out of space after installing XCode. Until I found time to install it on an external hard-drive, I was careful not to use any components marked "iOS only", and hoped for the best. However, when I finally got around to running the app on an Android device, I discovered that all my ScrollView components had their padding removed! [After](https://github.com/facebook/react-native/issues/15707) [Googling](https://github.com/facebook/react-native/issues/2914) [around](https://github.com/facebook/react-native/issues/11367), it seemed that other people have faced this problem, and used `margin` as a workaround.

Fine. I changed my stylesheets, but unfortunately, `padding` and `margin` are not identical. `padding` adds space _within_ an element, while `margin` adds space _around_ an element. In the end, I had to change a few components from this:

{% raw %}
```
<ScrollView style={{ padding: 20 }}>
  ... children
</ScrollView>
```

to this:

```
<ScrollView>
  <View style={{ margin: 20 }}>
    ... children
  </View>
</ScrollView>
```
{% endraw %}

Although that was a slightly frustrating bug, React Native is robust enough that it was pretty much the only cross-platform issue I ran into. Additionally, a lot of work could have been avoided had I been testing on both OSes from the start. The true challenge was trying to make sure the app renders nicely across different devices.

## Cross-Device Rendering
There are a lot of phones on the market today, and there is a wide variety of different screen resolutions. However, [most](http://iosres.com/) [modern](http://www.mi.com/en/list/) [phones](https://www.samsung.com/us/mobile/phones/) have a standard 16:9 aspect ratio (though the very latest models have been getting taller), so we can expect an app to more or less look the same across devices right? Wrong.

One thing I hadn't considered was the fact that I was using some fixed sizes in my styles. For example, it's fairly common in apps to have a header and a footer element for navigation purposes.

<img src="http://is1.mzstatic.com/image/thumb/Purple118/v4/47/80/a1/4780a17a-276d-53c3-8d16-d9c3f09acc8f/source/392x696bb.jpg" style="margin: auto; display: block; max-width: 100%" />
<p style="text-align: center; font-size: 1rem"><i>A header and footer in the Telegram app</i></p>

These elements should take up as little space as possible in order for the actual content to have more real estate on screen. Therefore, in general their height will be fixed, and will take up a smaller percentage of the screen on larger devices as compared to smaller devices.

Additionally, since our app was catered toward an older demographic, we felt it was important that the font sizes and pictures be slightly larger than usual. I had been testing our app using a larger simulator, and when I ran the app on a smaller device, I found that the large font sizes and images caused some unintended wrapping. As a result of these fixed-width elements, the app was significantly different when rendered on two devices, even though their aspect ratio was the same.

| <img src="/assets/images/6s.png" width="100%" /> | <img src="/assets/images/5.png" width="100%" /> |

<p style="text-align: center; font-size: 1rem"><i>The app on an iPhone 6s vs. an iPhone 5</i></p>

In the end, I suppose issues like these come down to design choices. Keeping in mind your target users, would you rather ensure the app renders nicely across all devices and change your original decisions, or stick with your choices and forsake some cross-device consistency? These are definitely not trivial choices, and something worth discussing with your team before moving forward.

---

That's all the tips I have for now! I'll probably be making another post when I'm farther along in development, so look out for it!