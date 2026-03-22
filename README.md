# 🚀 ChaiTailwind — Mini Utility-First CSS Engine

A lightweight JavaScript-based utility-first CSS engine that mimics the core idea of Tailwind CSS by dynamically applying styles at runtime.

---

## 📌 Overview

ChaiTailwind allows developers to style elements using custom utility classes like:

```html
<div class="chai-p-20 chai-bg-red chai-text-center">
  Hello World 🚀
</div>
```

Instead of writing CSS, the engine:

* Scans the DOM
* Parses class names
* Converts them into inline styles
* Applies them dynamically

---

## ⚙️ How It Works

1. Waits for DOM to fully load
2. Traverses all elements in the document
3. Identifies classes starting with `chai-`
4. Parses the class pattern (`chai-{property}-{value}`)
5. Applies corresponding styles using JavaScript
6. Optionally removes original classes for clean DOM

---

## ✨ Features

### 📦 Spacing Utilities

* `chai-p-10`, `chai-px-20`, `chai-py-10`
* `chai-m-10`, `chai-mx-15`, `chai-my-5`
* Individual sides: `chai-pt-10`, `chai-ml-5`

---

### 🎨 Colors

* Background: `chai-bg-red`, `chai-bg-blue`
* Text: `chai-text-white`
* Alignment: `chai-text-center`, `chai-text-left`, `chai-text-right`

---

### 🔤 Typography

* Font size: `chai-fs-20`
* Font weight: `chai-fw-bold`

---

### 🔲 Borders & Radius

* Border: `chai-border-red`
* Border width: `chai-bw-2`
* Border radius: `chai-br-10`

---

### 📐 Layout Utilities

* Flexbox: `chai-flex`
* Justify content: `chai-jc-center`
* Align items: `chai-ai-center`
* Width & Height: `chai-w-200`, `chai-h-100`

---

## 🧪 Demo

### Input

```html
<div class="chai-flex chai-jc-center chai-ai-center chai-h-200 chai-bg-lightblue">
  <div class="chai-p-20 chai-bg-red chai-text-white chai-br-10 chai-fs-20">
    ChaiTailwind 🚀
  </div>
</div>
```

### Output (Generated)

```html
<div style="display:flex; justify-content:center; align-items:center; height:200px; background-color:lightblue;">
  <div style="padding:20px; background-color:red; color:white; border-radius:10px; font-size:20px;">
    ChaiTailwind 🚀
  </div>
</div>
```

---

## 🧠 Key Concepts Used

* DOM Traversal
* Pattern Parsing
* Dynamic Styling via JavaScript
* Abstraction using Mapping Objects
* Runtime Style Injection

---

## 📁 Project Structure

```
ChaiTailwind/
│
├── index.html
└── script.js
```

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/Vishal33bisht/chai-tailwind-engine.git
```

2. Open `index.html` in browser
   OR use Live Server in VS Code

---
## 🎯 Conclusion

ChaiTailwind demonstrates how utility-first styling can be implemented using pure JavaScript by dynamically interpreting class patterns and applying styles at runtime — eliminating the need for traditional CSS.

---
