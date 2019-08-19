# Angular Web Component Template
This repo is meant to be a template for all uPortal angular web components.

# Local Development

Install dependencies with `npm install`

Run local server with `npm run serve:element`

# Building

Build the element into a single JavaScript file with `npm run build-element`. A single file
will be generated in `element/element.js`. This build path can be changed in build-elements.js

# Building a web component

`src/index.html` used to render the component locally.

`src/app/app.module.ts` is the main (and only) module for the web component. This is also where
you will import all Angular Material modules and define your web component selector.

`src/app/element` contains all of the logic, HTML, and CSS for the web component.
The name of this component can be updated but has to be updated in the component itself, module, etc.