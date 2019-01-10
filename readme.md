# Munder Difflin

The Munder Difflin project centered around developing a standard landing page for a paper company.

<img src='http://www.pitt.edu/~wke4/logos/munderdifflinlogo.jpg' style='width: 100%'>

#### Link to Project on Github Pages: 
--> https://bryanjeanty.github.io/munder-difflin/

## Table of Contents
1. [Installation](#installation)
2. [Technologies Used](#technologies)
3. [Features](#features)

## Installation
You'll need to have a modern code editor installed on your computer for this project, such as:
<br>
1. [VS Code](https://code.visualstudio.com/)
2. [Atom](https://atom.io/)
3. [Sublime Text](https://www.sublimetext.com/)
4. [Brackets](brackets.io/)

Simply follow the links and download whichever editor suits your fancy (but I recommend VS Code 😉).

## Technologies
<ul>
<li style="color: red">HTML</li>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Munder Difflin | Home</title>
    </head>
    <body>
        <header>
            <a id="cart" href="#">0 Items</a>
        </header>
        ...
    </body>
</html>
```
<li style="color: green">CSS</li>

```css
header {
    background-color: #85BDBF;
    height: 25px;
}
```

<li style="color: blue">JavaScript</li>

```javascript
let cart = document.getElementById('cart');
cart.addEventListener('click', () => {
    alert('Your cart is empty!');
}, false);
```
</ul>

## Features
1. Slideshow (for testimonials)
2. On click events (for buttons)