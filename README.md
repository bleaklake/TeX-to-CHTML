# tex-to-chtml

This MathJax wrapper converts TeX to Compact Hypertext Markup Language (CHTML). This package doesn't use any webworkers, webviews ; so It can be used for your NodeJS, React and React Native projects.

**This project is still in its early development stages.**

For any bugs, typos, errors, feel free to open an issue on the associated Github repository.

## Installation

```cli
npm install tex-to-chtml --save
```

## Examples

### JS (with the `options` parameter)

```js
const TeXToCHTML = require("tex-to-chtml");

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const options = {
    width: 1280,
    ex: 8,
    em: 16,
    fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"
};

const CHTMLEquation = TeXToCHTML(myTeXEquation, options); // returns <mjx-math display="true" style="margin-left: 0; margin-right: 0" class=" MJX-TEX"><mjx-mfrac><mjx-frac type="d"> ...
```

### TS (without the `options` parameter)

```ts
import TeXToCHTML from "tex-to-chtml";

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const CHTMLEquation = TeXToCHTML(myTeXEquation); // returns <mjx-math display="true" style="margin-left: 0; margin-right: 0" class=" MJX-TEX"><mjx-mfrac><mjx-frac type="d"> ...
```

## Documentation

`TeXToCHTML(equation, options)` : **string** _The returned Compact Hypertext Markup Language equation_

> `equation` : **string** _The TeX equation_
>
> `options` ?: **object** _The options of the retuned CHTML_
>
> > `width` ?: **number** _The width of container in pixels_
> >
> > `ex` ?: **number** _The ex-size in pixels_
> >
> > `em` ?: **number** _The em-size in pixels_
> >
> > `fontURL` ?: **string** _The URL to use for web fonts_

### Notation

?: = optional parameter

## Notes

### Useful links

This wrapper is inspired by this project : https://github.com/mathjax/MathJax-demos-node/tree/master/direct.

### Typescript

You **DON'T** have to install any types `@types/tex-to-chtml`.
