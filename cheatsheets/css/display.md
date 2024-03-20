## CSS `display` Property Cheat Sheet

### Overview

The `display` property specifies the display behavior (the type of rendering box) of an element.

### Common Values

- `none` - The element is completely removed.
- `block` - The element is displayed as a block-level element (like paragraphs and headers).
- `inline` - The element is displayed as an inline element (like spans). Any height and width properties will have no effect.
- `inline-block` - The element is placed as an inline element, but it behaves as a block-level element.
- `flex` - The element behaves like a block element and lays out its content according to the flexbox model.
- `inline-flex` - The element behaves like an inline element and lays out its content according to the flexbox model.
- `grid` - The element behaves like a block element and lays out its content according to the grid model.
- `inline-grid` - The element behaves like an inline element and lays out its content according to the grid model.
- `table`, `table-row`, `table-cell`, etc. - The element behaves like a table element (or a specified part of a table).

### Usage Examples

```css
.element-hidden {
  display: none;
}

.block-element {
  display: block;
}

.inline-element {
  display: inline;
}

.flex-container {
  display: flex;
}

.grid-container {
  display: grid;
}
```

### Considerations

- `display: none;` removes the element from the document flow, meaning the document is rendered as if the element does not exist. Visibility and layout space are affected.
- Changing `display` can change the behavior of an element drastically, from how it's sized to how it interacts with other elements. Experimenting with different `display` values can be a powerful tool in CSS layout techniques.

This cheat sheet provides a quick overview of the `display` property in CSS, including its most commonly used values and their basic behaviors. For more detailed information, refer to the CSS specification or comprehensive web development documentation resources like MDN Web Docs.
