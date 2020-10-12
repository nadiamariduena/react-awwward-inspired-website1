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

#### NEW STUFF I learned 1 ) \_

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

#### NEW STUFF I learned 2) \_

##### SVG issue and solution

<br>

```javascript
// ----------
// banner.js
// ----------
<a href="/">
  More about us <img src={svg} alt="" />
</a>

/*
                                The ISSUE **

    The problem with the following:

     <a href="/">More about us <img src={svg} alt=""/>

                 is that you dont have styling capabilities in terms
                 of hover effects or anything that you want to change
                 in svg styles


                 THE SOLUTION **

// to do the following you have to have the image in the assets folder

     import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

//THEN add the component inside the a tag like so:
*/
            <a href="/">
              More about us
              <RightArrow />
            </a>
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
