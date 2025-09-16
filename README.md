 <!-- date- 16/09/2025 -->

# 📘 Today’s Learning Summary

### 1. Tailwind Local Download

* Install with npm:

  ```bash
  npm install -D tailwindcss
  npx tailwindcss init
  ```
* Link your compiled CSS (`output.css`) into HTML.

---

### 2. Fonts Local Download

* Formats: `.ttf`, `.woff`, `.woff2`.
* Example:

  ```css
  @font-face {
    font-family: 'Poppins';
    src: url('fonts/Poppins-Regular.woff2') format('woff2'),
         url('fonts/Poppins-Regular.ttf') format('truetype');
  }
  body { font-family: 'Poppins', sans-serif; }
  ```

---

### 3. What is Sans-Serif?

* **Serif** → Decorative strokes (Times New Roman).
* **Sans-serif** → No strokes, clean (Roboto, Arial).
* Good for UI & digital screens.

---

### 4. Text Gradient

```css
.text-gradient {
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

### 5. More About Sans-Serif

* Fonts: Roboto, Poppins, Helvetica, Arial.
* Clean, modern, easy to read.
* Best for **headings & digital design**.

---

### 6. CSS Variables

```css
:root {
  --main-color: #ff6a00;
  --font-size-lg: 1.25rem;
}
button {
  background: var(--main-color);
  font-size: var(--font-size-lg);
}
```

---

### 7. Responsive Design

* **Media Queries (CSS)**

  ```css
  @media (max-width: 768px) {
    body { font-size: 14px; }
  }
  ```
* **Tailwind**

  ```html
  <p class="text-base md:text-lg lg:text-xl">Responsive Text</p>
  ```

---

### 8. Pseudo Classes & Elements

* **Classes**:

  ```css
  a:link { color: blue; }       /* Unvisited */
  a:visited { color: purple; }  /* Visited */
  a:hover { color: red; }       /* On hover */
  a:active { color: green; }    /* On click */
  input:focus { border: 2px solid blue; }
  ```
* **Elements**:

  ```css
  p::before { content: "👉 "; }
  p::after { content: " ✅"; }
  ```

---

### 9. SVG vs PNG vs JPEG

* **SVG**: Vector, infinite quality, good for logos/icons.
* **PNG**: Raster, supports transparency, good for UI/web.
* **JPEG**: Raster, compressed, best for photos.

---

### 10. rem, em, %

* `px` → Fixed pixels.
* `em` → Relative to parent font-size.
* `rem` → Relative to root `<html>` font-size.
* `%` → Relative to parent container.

---

### 11. CSS Selectors

```css
/* Child */
ul > li { color: red; }

/* Adjacent sibling */
h1 + p { font-style: italic; }

/* General sibling */
h1 ~ p { color: purple; }
```

---

### 12. HTML Project Folder Structure

```
project-folder/
│
├── index.html
├── about.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │   └── output.css
│   ├── js/
│   │   └── script.js
│   ├── fonts/
│   │   └── Roboto.ttf
│   │   └── Poppins.woff
│   └── images/
│       └── logo.png
```

---

✨ This file has **all 12 points in one place**.

Do you want me to prepare this as a **`.txt` or `.md` file** so you can keep it as notes on your computer?
