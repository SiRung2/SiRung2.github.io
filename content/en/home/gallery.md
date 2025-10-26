---
widget: gallery
headless: false
active: true
weight: 15
title: "Gallery"
subtitle: "Beautiful images from Unsplash"

content:
  # Page type to display. E.g. project.
  page_type: gallery

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: All
      tag: "*"
    - name: Technology
      tag: Technology
    - name: Nature
      tag: Nature
    - name: Abstract
      tag: Abstract

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Gallery view
  # Choose how many columns to display (1-4)
  columns: "2"
  # Choose how many rows to display (1-4)
  rows: "2"
  # Choose how much space between items (1-4)
  spacing: "2"
  # Choose how to crop images (1-4)
  crop: "center"

design:
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns: "1"
  # Choose a size for the section
  size: "medium"
  # Choose a background color, gradient, or image
  background:
    color: "#f8f9fa"
    gradient_start: "#f8f9fa"
    gradient_end: "#e9ecef"
    text_color_light: false
  spacing:
    padding: ["20px", "0", "20px", "0"]
---

## Unsplash Image Gallery

Beautiful images from various topics brought from Unsplash.
