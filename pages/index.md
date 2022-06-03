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
      <img class="main-menu-image" width="514" height="216" src="{{ page.image }}" />
      <div class="main-menu-title">{{ page.title }}</div>
    </a>
    {% endfor %}


  </main>
