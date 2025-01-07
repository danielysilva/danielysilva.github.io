---
layout: default
permalink: blog/categorias/
title: Categorias
---
# Categorias
<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
      <h2 class="category-head">{{ category_name }}</h2>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
        <span class="blog-date">
  {% assign m = post.date | date: "%-m" %}
  {{ post.date | date: "%-d" }}
  {% case m %}
  {% when '1' %}jan
  {% when '2' %}fev
  {% when '3' %}mar
  {% when '4' %}abr
  {% when '5' %}maio
  {% when '6' %}jun
  {% when '7' %}jul
  {% when '8' %}ago
  {% when '9' %}set
  {% when '10' %}out
  {% when '11' %}nov
  {% when '12' %}dez
  {% endcase %}
  {{ post.date | date: " %Y" }}</span></li>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
