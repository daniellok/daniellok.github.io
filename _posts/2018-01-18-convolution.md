---
layout: post
type: "blogpost"
title:  "Edge Detection & Convolution with 2D Images"
date:   2018-01-18
excerpt: "An introduction to a simple image processing technique"
image: "/assets/images/edge-detection.png"
---

[Convolution](https://en.wikipedia.org/wiki/Convolution) is an operation which has wide-reaching applications across different fields. In this post, I'll be going through a visualization of convolution in the [context of image processing](https://en.wikipedia.org/wiki/Kernel_(image_processing)#Convolution). I've also included a [Jupyter Notebook](https://github.com/daniellok/edge-detection/blob/master/edge-detection.ipynb) containing my implementation of the function, as well as my method for generating the GIFs used below (requires the [ImageMagick](https://www.imagemagick.org/script/index.php) CLI tools). 

---

## Kernels
If you've read about image processing, you've probably come across the concept of ["kernels"](https://en.wikipedia.org/wiki/Kernel_(image_processing)). One thing that confused me (and continues to confuse me) is that "kernel" is such a [semantically overloaded term](https://en.wikipedia.org/wiki/Kernel) in math and computer science.

However, in the context of image processing, a kernel is simply a matrix! Here are some examples (a more comprehensive list can be found on [Wikipedia]((https://en.wikipedia.org/wiki/Kernel_(image_processing)))):

| Name | Function | Kernel |
| :---: | :---: | :---: |
| Sobel (vertical) | Edge detection | $$\begin{bmatrix} 1 & 0 & -1 \\ 2 & 0 & -2 \\ 1 & 0 & -1 \end{bmatrix}$$ |
| Sobel (horizontal) | Edge detection | $$\begin{bmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ -1 & -2 & -1 \end{bmatrix}$$ |
| Laplacian | Edge detection | $$\begin{bmatrix} 0 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 0 \end{bmatrix}$$ |
| Box Blur | Blurring | $$\frac{1}{9}\begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{bmatrix}$$ |
| Identity | Nothing | $$\begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$ |

Now, what exactly does one do with these matrices, and how do they relate to image processing? In order to answer this question, we first need to go through exactly what an image is, and how we can even begin to process them.

## What is an image?

It's fairly common knowledge that a digital image is made of pixels, but we often don't think about what exactly a pixel is. 

In the context of image processing (which is important to specify, since it's another [overloaded term](https://en.wikipedia.org/wiki/Pixel#Technical)), a pixel is simply an integer from 0 (black) - 255 (white). More formally, it is an 8-bit unsigned integer. An image, then, can be represented as a 2D array of these values.

Of course, having only one value means that we can't represent color! For colored images, each pixel can typically be seen as a vector of length 3, whose elements are all integers from 0 - 255 representing the values of red, green, and blue respectively. We can think of a colored image as a 3D integer array (three 2D arrays layered on top of each other).

<img src="/assets/images/rgb.png" style="display: block; margin: auto; max-width: 250px;" />
<p style="text-align: center; font-size: 1rem"><i>Imagine something that looks like this, but with numbers</i></p>

Once we understand this concept, it becomes much easier to understand how we can use matrices to modify images.

## Convolution 

Convolution is exactly this process of using matrices (kernels) to modify images. The example kernels provided above are all three-by-three, but they can come in all shapes and sizes. Now, what exactly do we do with them?

From a high-level perspective, we are essentially just using the kernel to compare each pixel in our image to its neighboring pixels. Visually, imagine laying the kernel on top of our image. Each value in our kernel will be lined up with some value in the image. We multiply these values element-wise, sum them, and take the result as a new value in our output image! More specifically, if our kernel is centered on pixel \\((x,y)\\) of our input image, then the result of this operation will be the value of pixel \\((x,y)\\) of our output image.

<img src="/assets/images/convolution.jpg" style="display: block; margin: auto; max-width: 400px;" />
<p style="text-align: center; font-size: 1rem"><i>An exellent diagram from <a href="http://machinelearninguru.com/computer_vision/basics/convolution/image_convolution_1.html#convolution">machinelearninguru</a>.</i></p>

We simply repeat this process for every pixel in our input. To help visualize this, I've created a short animation of a kernel "sliding" over an image. The following example uses the Laplacian edge detection kernel on a 25-by-25 pixel drawing.

<img src="/assets/images/dino.gif" height="250" width="500" style="image-rendering: optimizeSpeed; image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges; image-rendering: -webkit-optimize-contrast; image-rendering: pixelated; image-rendering: optimize-contrast; -ms-interpolation-mode: nearest-neighbor; margin: auto; display: block"/>
<p style="text-align: center; font-size: 1rem; max-width: 400px; display: block; margin: auto;"><i>An example of image convolution. On the left is our input image, on the right is our output. The yellow box represents the kernel, and the center flashes red when the output value is greater than zero (i.e. non-black) <a href="http://piq.codeus.net/picture/138943/untitled">(image source: piq.codeus.net)</a></i></p>

<br />
And that's about it! Additionally, once you develop an intuition about how convolution works, you can more or less infer the function of a kernel from its structure. For example, the Box Blur kernel above averages a pixel's value with that of its neighbors. The Laplacian kernel, on the other hand, changes a pixel's value to zero (or close to it) if its neighbors are of a similar color (an indicator that the pixel does not belong to an edge).

Oh, and before I forget, there are a few things I've skipped over...
<dl>
<dt>How do you center the kernel on the edges/corners of the input image?</dt>
<dd><p>There are multiple solutions for this, but ultimately it's up to you! You could treat the out-of-bound pixels as zeroes, you could pad the input image with a couple of extra rows and columns, or you can simply not bother calculating values for the edges. In the Jupyter Notebook provided above, I choose the latter approach (this is also visualized in the gif above).</p></dd>
<dt>If colored images are 3D arrays, how can we perform 2D convolution on them?</dt>
<dd><p>Once again, there are a couple of approaches to this. In the case of edge detection, it is not necessary to preserve the color information of the original image. Therefore, we can convert the image to greyscale (i.e. a 2D array) before operating on it. In other cases where we might want to preserve color data (e.g. blurring, sharpening), we can perform the convolution individually on the red, green, and blue layers, and combine them afterward.</p></dd>
</dl>

---

I hope you've been able to gain something useful from this post! Learning about image processing basics has really helped me demystify the inner workings of the image editors we use everyday (e.g. Instagram, Preview, Photoshop). And as always, the more you know, the more you are able to appreciate the work others have put in to develop the products we have today. 
