# LWC Library of components

## Value of Storybook


## Documenting Web Components

### JSDoc

In order to generate the component documentation, the source code must include the documentation in the form of JSDocs constructs. In particular, it should use the Web Component extensions.  
See: [https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc](https://github.com/runem/web-component-analyzer#-how-to-document-your-components-using-jsdoc).

### custom-elements-json

The [Web Components](https://www.webcomponents.org/) organization is coming with a metadata format to describe Web Component: [custom-elements-json](https://github.com/webcomponents/custom-elements-json). If this format is not yet accepted as a standard, and may drastically evolve, it is currently a good documentation source.

### Generating `custom-elements-json`

Manually writting the custom-elements-json files can be cumbersome. Hopefully, there are tools to generate them from the component source code, particularly if it contains the JSDoc annotations.  

One of these tools is [web-component-analyzer](https://github.com/runem/web-component-analyzer). 

## LWC/Storybook integration

The LWC library is built using Rollup while Storybook relies on 

### Watching changes

