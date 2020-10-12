<div style="margin: 0 auto; width:70%; text-align:center;">

<h1 style="width:80%; text-decoration:underline; text-align:center;">AWWWWWARDS inspired website</h1>
<h5 style="width:80%; text-decoration:underline; text-align:center;">made by Wrong Akram</h5>

<br>
<br>
<br>
<br>

<p style="width:80%; border:#000 solid 2px; box-shadow:10px 10px 0 0 #000; padding:20px; text-align:left;">I wanted to give this tutorial a try from the moment i saw this way
of applying media queries, as until now i have been using a very generic manner
of handling it.</p>

<br>
<br>
<br>

```javascript
// ----------
// This is connected to the breakpoints.scss
// ----------
//
//
$breakpoints: (
  "phone": 425px, //     *************
  "tablet": 768px,
  "desktop": 1366px,
  "LGdesktop": 1920px,
) !default;

/*
You are not forced to use the breakpoints above, you can also
add CUSTOM like so:

 @include media("<=300px") {
      width: etc
    }


*/



// ----------
// header.scss
// ----------
header {
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
  @include media("<=phone") { //  *************
    height: 96px;
  }
  background-color: rgb(250, 217, 203);
  .logo {
    a {
        //the font-family are inside the App.scss body: html {
      // using rem , which are relative to the html font-sizes which is equivalent to 16px
      //https://www.ninjaunits.com/converters/pixels/rem-pixels/

      font-size: 1.2rem;
      letter-spacing: 0.05rem;
      text-decoration: none;
      font-weight: 700;
    }
  }
```

<br>
<br>
<br>
<br>

<p style="width:80%; border:#000 solid 2px; box-shadow:10px 10px 0 0 #000; padding:20px; text-align:left;">So even if understand many of the things you can find in the file breakpoint.scss and App.scss
, I know that this tutorial is going to be a challenge.</p>

<br>

##### :baby: REMEMBER TO ASK about:

```javascript
// ----------
// Remember to ask your teachers about the following (note for myself)
// ----------
//
//
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

 </div>
