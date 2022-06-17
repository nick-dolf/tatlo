---
layout: home
title: Home
permalink: "/:path/:basename/"
description: Tatlo is a collaboration between Sara Jimenez and Jade Yumang. The two
  met in New York City and started to make work together in 2012.
menu:
- page: pages/work/weighted-wait.md
  title: Weighted Wait
  link: "/assets/images/weighted-wait/menu.jpg"
  alt_text: The two artists (Jade and Sara) crawling on the ground
  src: ''
- link: pages/work/inherited-weight.md
  title: Inherited Weight
  src: "/assets/images/inherited-weight/menu.jpg"
  alt_text: The artists (Sara and Jade) wrapped in warning tape around their heads.

---
<main id="main-menu">

    {% for page in site.data.main-menu.pages %}
    <a href="{{ page.url }}"  class="main-menu-link">
      {% include components/img.html
          src=page.image
          alt="test"
          class="main-menu-image"
      %}
      <div class="main-menu-title">{{ page.title }}</div>
    </a>
    {% endfor %}


  </main>