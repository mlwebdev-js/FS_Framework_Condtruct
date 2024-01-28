
# Method Chaining in JavaScript

## Introduction
This guide explains how to enable method chaining in JavaScript, particularly focusing on DOM element manipulation through a custom wrapper class.

## Element Wrapper Class
The `ElementWrapper` class encapsulates an HTML element and provides methods to manipulate it. The key feature is that each method returns the instance (`this`), allowing the methods to be chained together.

```javascript
class ElementWrapper {
  constructor(element) {
    this.element = element;
  }

  setAttributes(attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
    return this; // Enables chaining
  }

  setText(text) {
    this.element.textContent = text;
    return this; // Enables chaining
  }

  // Add more methods as needed
}
```

## Usage
Create an instance of `ElementWrapper` with an HTML element and use method chaining to set attributes and text content.

```javascript
const wrapper = new ElementWrapper(document.createElement('div'));
wrapper.setAttributes({ id: 'unique-id', class: 'my-class' }).setText('Hello World!');
```

## Conclusion
Method chaining enhances code readability and maintainability, allowing a sequence of operations to be expressed cleanly and concisely.
