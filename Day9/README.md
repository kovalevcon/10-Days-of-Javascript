# 10 Days of Javascript - Day9

To view solutions, open the file `/Day9/index.html` in your browser.

## Day 9: Binary Calculator

**Task**:

We want to create nine buttons enclosed in a `div`, laid out so they form a grid `3 x 3`. Each button has a distinct 
label from to `1` to `9`, and the labels on the outer buttons must rotate in the clockwise direction each time we 
click the middle button.

Complete the code in the editor so that it satisfies the following criteria:

* Initial State. The initial layout looks like this:

```
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
```

* Element IDs. Each element in the document must have an id, specified below:

    * The button container div's `id` must be `btns`.
    * The initial innerHTML labels must have the following button ids:
        ```yaml
        | innerText
        |    1      | btn1 |
        |    2      | btn2 |
        |    3      | btn3 |
        |    4      | btn4 |
        |    5      | btn5 |
        |    6      | btn6 |
        |    7      | btn7 |
        |    8      | btn8 |
        |    9      | btn9 |
        ```
 * Styling. The document's elements must have the following styles:
    * The width of btns is `75%`, relative to the document body's width.
    * Each button (i.e., `btn1` through `btn9`) satisfies the following:
        * The width is `30%`, relative to its container width.
        * The height is `48px`.
        * The font-size is `24px`.
 * Behavior. Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4,
   btn6, btn7, btn8, btn9) must rotate in the clockwise direction. Do not update the button id's.

The `.js` and `.css` files are in different directories, so use the link tag to provide the CSS file path and 
the script tag to provide the JS file path:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
```

**Solution**:

In `index.html` and `js/binaryCalculator.js`.

Return to [navigation list](/README.md "navigation list")