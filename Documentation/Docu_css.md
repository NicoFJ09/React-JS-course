# CSS Selectors and Properties Guide

## Basic Selectors
- `*` - Universal selector
- Element selectors (h1, h2, etc.) - Lowest specificity
- Class selectors - Create class and add attribute in JS
- ID selectors - Specific to one object (higher priority than classes, pseudo-classes, and attributes)
- Attribute selectors - Select elements using `[]` syntax
- Descendant selectors - Select elements within other elements (e.g., p within h2)

## Specificity and Priority
1. Inline styles (in HTML) override CSS
2. `!important` declaration overrides everything
3. ID selectors
4. Class selectors, pseudo-classes, attributes
5. Element selectors

## Pseudo-classes
- `:hover` - Changes on mouse over
- `:active` - Changes while clicking
- `:focus` - Changes when element is selected
- `:link` - Styles unvisited links
- `:visited` - Styles visited links
- `:first-child` - Selects first child element
- `:nth-child(n)` - Selects specific child elements
- `:lang("en")` - Selects elements in specific language

## BEM Methodology
- Block__Element--Modifier pattern
- Maintains cohesive structure
- Example: `class__pseudoclass-specific-element`

## Box Model
- **Padding**: Inner space within element
- **Margin**: Whitespace around element (outside)
- **Border**: Takes up space
- **Outline**: Doesn't take up space

## Typography Properties
- `font-size`: Text size
- `font-family`: Typography type
- `line-height`: Line spacing (increases equally top and bottom)
- `font-weight`: Bold or light
- `font-stretch`: Expands text
- `font-variant`: Changes text styles

## Box Properties
- `background-color`: Box background
- `box-shadow`: Intensifies presence
- `text-shadow`: Adds shadow to text
- `transform`: Can rotate on x-axis

## Position Properties
- `static`: Not affected by other elements
- `relative`: Positions relative to normal document flow
- `absolute`: Positions relative to nearest positioned parent
- `fixed`: Positions relative to viewport
- `sticky`: Moves with scroll until specific point

## Display Properties
- `block`: Takes full width
- `inline`: Takes only needed width
- `inline-block`: Combination of both
- `overflow`:
  - `visible`: Default
  - `auto`: Prevents overflow
  - `scroll`: Forces scrollbar

## Pseudo-elements
- `::first-line`: Edits first line of paragraph
- `::first-letter`: Styles first letter
- `::placeholder`: Adapts placeholder text
- `::selection`: Changes style of selected text
- `::after`: Adds content after element
- `::before`: Adds content before element

## Object Fit
- `cover`: Adjusts to container
- `contain`: Maintains original size
- `object-position`: Positions image relative to borders

## Flexbox
### Container Properties
- `display: flex`: Creates flex container
- `flex-direction`: Changes main axis direction
- `flex-wrap`: Wraps elements to new line
- `justify-content`: Aligns along main axis
- `align-items`: Aligns along cross axis
- `align-content`: Aligns multiple rows/columns

### Item Properties
- `align-self`: Adjusts individual items
- `flex-grow`: Distributes extra space
- `flex-shrink`: Controls size reduction
- `flex-basis`: Sets base size
- `order`: Controls item order

## Grid
- `display: grid`: Creates grid container
- `grid-template-rows/columns`: Defines grid structure
- `grid-gap`: Spaces between items
- `grid-column/row`: Controls item span
- Can use `fr` units for flexible sizing
- Can use `repeat()` for pattern repetition
- Supports implicit and explicit grid

## Miscellaneous
- Normalize.css: Maintains consistency across browsers
- Different HTML tags have predetermined box sizes
- Cursor can be changed for different areas
- Transitions can animate property changes