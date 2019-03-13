# 🖼 JQuery Preview Slider 🖼

![CDNJS](https://img.shields.io/cdnjs/v/jquery.svg)
[![GitHub license](https://img.shields.io/github/license/ArslanAmeer/Ui-Component-Minimal-Slider.svg)](https://github.com/ArslanAmeer/Ui-Component-Minimal-Slider/blob/master/LICENSE)
![GitHub repo documentation](https://img.shields.io/badge/Documentation-Proper-brightgreen.svg)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![Author](https://img.shields.io/badge/Author-Arslan_Ameer-lightgrey.svg)

### A Simple 👌 Elegant 💎 and Lightweigh ( ⛏ Customized) Previewer Slider with Thumbnails Made with HTML CSS &amp; JQuery.

#### Many Thanks To 🙏 [JQuery Light Slider](http://sachinchoolur.github.io/lightslider/) by _sachinchoolur_ and [JQuery Zoom](http://www.jacklmoore.com/zoom/) by _Jack Moore_ . 🙇‍♂️

---

### DEMO

<div style="text-align:center"><img src ="sliderDemo.gif" /></div>

👉 **[Try Live Demo](https://arslanameer.github.io/Ui-Component-JQuery-PreviewSlider/)**

---

## ✏ About 💡:

This Previewer is made with html css and JQuery. It uses JQuery to slide images automatically and through navigation buttons, as well as ZOOM effect within image canvas on mouse over.
This Previewer Slider is Made/Customized for standard use, as a product Images Preview.

**NOTE:** I set Iage Previwer's css and settings for Demo purpose.

Try & modify it as you need.

## 💡 How To Use 🔬 :

➕ Add minifed CSS (styling File) and JS (script File) links inside `<head>` tag of your html file.
These files can be found in `dist/assets/css` and `dist/assets/js` folders.

```html
<link rel="stylesheet" href="assets/css/imagepreviewer.min.css" />
```

And because this slider is JQuery dependent. You can either download [Jquery](https://jquery.com/) from website or use bellow cdn link.

Add this link inside of `<head>` tag.

```html
<!-- Jquery Script Linking -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
OR
<script src="assets/js/jquery-3.3.1.min.js"></script>

<!-- Main Previewer Script Linking -->
<script src="assets/js/imagepreviewer.min.js"></script>
```

➕ Add Markup in your body:

```html
<body>
	<div class="demo">
		<ul id="lightSlider">
			<li data-thumb="assets/images/d500a.jpg">
				<img src="assets/images/d500a.jpg" />
			</li>
			<li data-thumb="assets/images/d500b.jpg">
				<img src="assets/images/d500b.jpg" />
			</li>
			<li data-thumb="assets/images/d500c.jpg">
				<img src="assets/images/d500c.jpg" />
			</li>
			<li data-thumb="assets/images/d500d.jpg">
				<img src="assets/images/d500d.jpg" />
			</li>
			<li data-thumb="assets/images/d500e.jpg">
				<img src="assets/images/d500e.jpg" />
			</li>
		</ul>
	</div>
	<script>
		// Will Add Image Previewer Slider & Zoom on Hover Initializing Script Here
	</script>
</body>
```

**Finally**
➕ Add this script to your file within separate `<script>...</script>` tag to initialize your Image Slider.

```js
//  Image Slider With Thumbnail Initialization

$(document).ready(function() {
	$('#lightSlider').lightSlider({
		gallery: true, // Show Thumbnails Panel
		item: 1, // Items or Images in Main Display Are. (Suitable for Content Slider)
		loop: true, // Repeat Images
		slideMargin: 1, // Spaces Between Main Slides Images
		thumbItem: 4, // Number Of Thumbnails to show on THumbnail Panel
		speed: 800, // Image Change : Slider Speed in Miliseconds ms
		auto: false, // Auto play Slideshow On
		pause: 5000, // Pause Between Each Slide Change
	});
});

$('li>img')
	.wrap('<span style="display:inline-block"></span>')
	.css('display', 'block')
	.parent()
	.zoom({
		magnify: 1.3,
	});
// To use zoom with img elements, they will need to be wrapped with another element.
```

## YOU'RE DONE! 🎆🎇🎉👏👏

---

### Additional Settings 😎

You can add or modify Image Previewer Slider settings & in script file. following are complete list of settings you can apply.

```js
$(document).ready(function() {
	$('#lightSlider').lightSlider({
		item: 3,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,

		addClass: '',
		mode: 'slide',
		useCSS: true,
		cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
		easing: 'linear', //'for jquery animation',////

		speed: 400, //ms'
		auto: false,
		loop: false,
		slideEndAnimation: true,
		pause: 2000,

		keyPress: false,
		controls: true,
		prevHtml: '',
		nextHtml: '',

		rtl: false,
		adaptiveHeight: false,

		vertical: false,
		verticalHeight: 500,
		vThumbWidth: 100,

		thumbItem: 10,
		pager: true,
		gallery: false,
		galleryMargin: 5,
		thumbMargin: 5,
		currentPagerPosition: 'middle',

		enableTouch: true,
		enableDrag: true,
		freeMove: true,
		swipeThreshold: 40,

		responsive: [],

		onBeforeStart: function(el) {},
		onSliderLoad: function(el) {},
		onBeforeSlide: function(el) {},
		onAfterSlide: function(el) {},
		onBeforeNextSlide: function(el) {},
		onBeforePrevSlide: function(el) {},
	});
});
```

For Further Guidance and Information Please Visit: http://sachinchoolur.github.io/lightslider/ & http://www.jacklmoore.com/zoom/

## 📄 License 🔐

Ui-Component-JQuery-PreviewSlider (Images Gallery Preview)
Copyright (C) 2019 - Arslan Ameer

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>
