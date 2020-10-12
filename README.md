# AWWWWWARDS inspired website made by Wrong Akram

<p>I wanted to give this tutorial a try from the moment i saw this way
of applying media queries, as until now i have been using a very generic manner
of handling it.</p>

```javascript
$breakpoints: (
  "phone": 425px,
  "tablet": 768px,
  "desktop": 1366px,
  "LGdesktop": 1920px,
) !default;
```

<p>So even if understand many of the things you can find in the file breakpoint.scss and App.scss
, I know that this tutorial is going to be a challenge.</p>

### REMEMBER TO ASK about:

```javascript
$media-expressions: (
  "screen": "screen",
  "print": "print",  //?????
  "handheld": "handheld",
  "retina2x": (  //?????
    "(-webkit-min-device-pixel-ratio: 2)",
    "(min-resolution: 192dpi)"
  ),
  "retina3x": (  //?????
    "(-webkit-min-device-pixel-ratio: 3)",
    "(min-resolution: 350dpi)"
  )
) !default;
```
