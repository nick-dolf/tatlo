---
layout: home
title: Home
permalink: "/:path/:basename/"
menu:
- pages/work/inherited-weight.md
- pages/work/weighted-wait.md
description: Tatlo is a collaboration between Sara Jimenez and Jade Yumang. The two
  met in New York City and started to make work together in 2012.

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