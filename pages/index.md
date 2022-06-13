---
layout: default
title: Home
permalink: "/"
menu:
- pages/work/inherited-weight.md

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
