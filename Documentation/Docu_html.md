# HTML Fundamentals Guide

## Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title in Browser</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

## Text Elements

### Headings
```html
<h1>Main Heading</h1>  <!-- Highest priority -->
<h2>Sub Heading</h2>
<h3>Sub-sub Heading</h3>
<!-- ... up to h6 -->
```

### Text Formatting
```html
<p>Paragraph of text</p>
<span>Inline text for specific styling</span>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule for section division -->
```

## Links
```html
<!-- Basic link -->
<a href="https://example.com">Link Text</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">Opens in New Tab</a>
```

## Images
```html
<img src="path/to/image.jpg" alt="Description">
<!-- Best practice: Set dimensions in CSS, not HTML -->
```

## Forms

### Basic Form Structure
```html
<form action="/submit" method="POST">
    <!-- Form elements go here -->
</form>
```

### Form Elements
```html
<!-- Text input with label -->
<label for="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Enter your name">

<!-- Common input types -->
<input type="submit" value="Submit">
<input type="email" placeholder="Enter email">
<input type="password" placeholder="Password">
<input type="checkbox">
<input type="file">
<input type="color">
<input type="range">

<!-- Text area -->
<textarea rows="4" cols="50"></textarea>

<!-- Buttons -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Regular Button</button>
```

## Lists

### Unordered List
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Ordered List
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## Tables
```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Footer 1</td>
            <td>Footer 2</td>
        </tr>
    </tfoot>
</table>
```

## Container Elements
```html
<div>Generic container</div>
<section>Thematic grouping of content</section>
<article>Independent, self-contained content</article>
```

## IDs vs Classes

### When to Use ID
- Unique elements that appear once per page
- Anchor links (`<a href="#section1">`)
- Form label associations
- JavaScript targeting of specific elements
- Usage: `<div id="unique-element">`

### When to Use Class
- Multiple elements sharing same styles
- Reusable components
- Multiple styles on same element
- Usage: `<div class="card primary-color">`

## Best Practices
1. Use semantic HTML elements when possible
2. Always include `alt` attributes for images
3. Associate labels with form inputs using `for` attribute
4. Use IDs sparingly and ensure uniqueness
5. Keep markup clean and well-indented
6. Use comments to explain complex structures
7. Set dimensions in CSS rather than HTML attributes
8. Use appropriate heading hierarchy (h1 -> h6)

## Performance Tips
- Use `getElementById()` for faster DOM selection
- Set `overflow-x: hidden` to fix anchor link scrolling issues
- Properly nest elements to maintain clear document structure
- Use appropriate elements for their intended purpose