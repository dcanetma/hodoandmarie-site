---
# Title
title: {{ title }}

# Project subtitle (optional)
subTitle: {{ subTitle }}

# Post date
date: {{ date }}

# 'Client name', (not used, yet)
client: {{ client }}

# 'Year', (not used yet)
year: 2020

# 'Intro text'
# It will be used on the project page header and for SEO purposes
intro: >
	{{ intro }}

# 'Project tags'
tags:
  - Art direction
  - Identity
  - Print
  - Branding   
  - Animation
  - Illustration 

# 'Vimeo Id video'
# Set this value in case you want to feature a header video on the
# project page. You can take it from the Vimeo video url.
vimeoId: '334092219'

# 'Square image for the project grid'
# Set <project> with the name of the folder you choose to 
# store your images for this project.
thumbnailUrl:
  - media/<project>/rabbit320.mp4
  - media/<project>/rabbit320.webm
  - media/<project>/rabbit320.jpg

# 'Font colors' 
# They will both be used on the project grid
# and the text color on the project page header, only
bgColor:    '#e4e4e4' 
textColor:  white

# 'Header image'
# A header image to show on the page for this project
imageUrl: >-
  /media/<project>/sample.jpg

# After the tree dashes goes the post content.
# It accepts both HTML and Markdown.
  
---

<!-- Sample of a full size vimeo video inside the post -->
<!-- Pay attention to the use of 'gallery-1' class for a right separation with the  -->
<!-- next/previous element -->
<!-- Also, you may need to use 'embed-responsive' and 'embed-responsive-16by9'  -->
<!-- Others: 'embed-responsive-4by3', 'embed-responsive-1by1">', 'embed-responsive-21by9' -->
<!-- @see: https://getbootstrap.com/docs/4.0/utilities/embed/ -->
<div class="gallery gallery-1">
  <p class="embed-responsive embed-responsive-16by9"> 
    <iframe src="https://player.vimeo.com/video/343188343?color=000000" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </p>
</div>

<!-- This is a 3x gallery sample -->
<!-- Always add a linebreak between images -->
<!-- It needs three images between paragraph tags -->
<div class="gallery gallery-3">

![Alt text](http://placekitten.com/920/920 )

![Alt text](http://placekitten.com/910/910 )

![Alt text](http://placekitten.com/930/930 )

</div>


<!-- This is a 2x gallery sample -->
<!-- Always add a linebreak between images -->
<!-- It needs two images between paragraph tags -->
<div class="gallery gallery-2">

![Alt text](http://placekitten.com/650/420 )

![Alt text](http://placekitten.com/650/420 )


</div>


<!-- This is a 1x gallery sample -->
<!-- Always add a linebreak after the image -->
<!-- It needs one images between paragraph tags -->
<div class="gallery gallery-1">

![Alt text](http://placekitten.com/1330/600 )

</div>

<!-- For a proper separation with the next gallery, 
     you need to add a <br> tag after the last paragraph -->
Welcome back to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).
<br><br>

<div class="gallery gallery-3">

![Alt text](http://placekitten.com/600/600 )

![Alt text](http://placekitten.com/800/800 )

![Alt text](http://placekitten.com/700/700 )

</div>



<!-- This is a 3x VIDEO gallery sample -->
<!-- Always add a linebreak between images -->
<!-- It needs three images between paragraph tags -->
<div class="gallery gallery-3">

<p>
  <video playsinline="playsinline" muted loop autoplay>
      <source src="/demo/media/sample/rabbit320.mp4" type="video/mp4">
      <source src="/demo/media/sample/rabbit320.webm" type="video/webm">
  </video>
</p>

<p>
  <video playsinline="playsinline" muted loop autoplay>
      <source src="/demo/media/sample/rabbit320.mp4" type="video/mp4">
      <source src="/demo/media/sample/rabbit320.webm" type="video/webm">
  </video>
</p>

<p>
  <video playsinline="playsinline" muted loop autoplay>
      <source src="/demo/media/sample/rabbit320.mp4" type="video/mp4">
      <source src="/demo/media/sample/rabbit320.webm" type="video/webm">
  </video>
</p>

</div>


<!-- This is a 2x gallery VIDEO sample -->
<!-- Always add a linebreak between images -->
<!-- It needs two images between paragraph tags -->
<div class="gallery gallery-2">

<p>
  <video playsinline="playsinline" muted loop autoplay>
      <source src="/demo/media/sample/rabbit320.mp4" type="video/mp4">
      <source src="/demo/media/sample/rabbit320.webm" type="video/webm">
  </video>
</p>

<p>
  <video playsinline="playsinline" muted loop autoplay>
      <source src="/demo/media/sample/rabbit320.mp4" type="video/mp4">
      <source src="/demo/media/sample/rabbit320.webm" type="video/webm">
  </video>
</p>


</div>


<!-- Sample credits secion -->
## Credits

* Client: {{ client }}
* Year: 2021


* Creative direction: hodo&marie
* Art direction: hodo&marie
* Graphic design: hodo&marie
* Production: hodo&marie