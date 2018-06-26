# koutla swiss

[![NPM version](https://badge.fury.io/js/koutla-swiss.svg)](http://badge.fury.io/js/koutla-swiss) [![Build Status](http://img.shields.io/travis/leny/koutla-swiss.svg)](https://travis-ci.org/leny/koutla-swiss) ![Dependency Status](https://david-dm.org/leny/koutla-swiss.svg) ![Downloads counter](http://img.shields.io/npm/dm/koutla-swiss.svg)

> A rewrite of [Kouto Swiss](https://kouto-swiss.io) in pure javascript

* * *

**koutla swiss** is a rewrite of **kouto swiss** (a CSS framework for Stylus) in pure javascript, to be used within _css-in-js_ tools like **glamor**

* * *

> **NOTE:** This project is a pure draft right now.

* * *

## Installation

```bash
$ npm install --save-dev koutla-swiss
```

## Usage

**koutla-swiss** is a serie of useful, functional utilities to make _CSS-in-JS_ (with librairies like [glamor](https://github.com/threepointone/glamor)).

All the documented functions are accessibles from the root of the lib, like `import {px, padding} from "koutla-swiss";`.

### Units

#### `rem`, `em`, `ex`, `cap`, `ic`, `lh`, `rlh`, `vw`, `vh`, `vi`, `vb`, `vmin`, `vmax`, `px`

> **Signature:** `unit(value :number = 0) :string`

Simply accept a number as parameter and return a string with the suffixed unit. If the given parameter is `0`, only a _unitless_ zero is returned.

```javascript

rem(1.2); // -> "1.2rem"
px(23); // -> "23px"
vh(0); // -> 0

```

#### `percent`

> **Signature:** `percent(value :number = 0, isDecimal :boolean = false) :string`

Accept a number and return a string with percent unit. If the second parameter is `true`, treat the value as a decimal value between `0` and `1` to compute value.

```javascript
percent(15); // -> "15%"
percent(100); // -> "100%"
percent(0.5, true); // -> "50%"

```

### Media Queries

#### `mq()`

> **Signature:** `mq(query :string, props: object) :object`

Returns the media query as property of an object, with declared css properties as value.

```javascript
mq("min-width: 960px", {color: "red"}); // -> {"@media(min-width: 960px)": {color: "red"}}
```

### Colors

#### `rgb()`

> **Signature:** `rgb(value :string) :string` or `rgb(red :number, green :number, blue :number) :string`

Returns an rgb valid value from : 

- a [CSS color name](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value),
- a hexadecimal color string
- three numbers (in `0 -> 255` range) for red, green and blue value

```javascript
rgb("blue"); // -> "rgb(0,0,255)"
rgb("Olive"); // -> "rgb(128,128,0)"
rgb("#1e90ff"); // -> "rgb(30,144,255)"
rgb(128, 128, 0); // -> "rgb(128,128,0)"
```

#### `rgba()`

> **Signature:** `rgba(value :string, alpha :number) :string` or `rgba(red :number, green :number, blue :number, alpha :number) :string`

Returns an rgba valid value from : 

- a [CSS color name](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value),
- a hexadecimal color string
- three numbers (in `0 -> 255` range) for red, green and blue value
- an alpha number (in `0 -> 1` range) for alpha value

```javascript
rgb("blue", 0); // -> "rgba(0,0,255,0)"
rgb("Olive", 0.33); // -> "rgba(128,128,0,0.33)"
rgb("#1e90ff", 1); // -> "rgba(30,144,255,1)"
rgb(128, 128, 0, 1); // -> "rgba(128,128,0,1)"
```

### Size

#### `size()`, `minSize()`, `maxSize()`

> **Signature:** `size(value :any) :object` or `size(width :any, height :any) :object`

Returns an object with `width` and `height` (or `minWidth`/`minHeight`, `maxWidth`/`maxHeight`).  
If only one parameter is given, it will be used for the two properties.

```javascript
size("100%", "5rem"); // -> {width: "100%", height: "5rem"}
size("100%"); // -> {width: "100%", height: "100%"}
size(); // -> {width: "0", height: "0"}
```

## Todo

- Mixin for `transform`

## Release History

* **2018-01-13:** version `0.1.0`
* **2018-01-12:** starting project

## License

Copyright (c) 2018 [leny.me](http://leny.me)
Licensed under the MIT license.
