# LWC Storybook

## What is Storybook?
According to the docuemntation, [Storybook](https://storybook.js.org/), Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.  

The two deployed Storybook sites are available at the following URLs:
[https://lwc-essentials.github.io/storybook/](https://lwc-essentials.github.io/storybook/)


![./docs/screenshot.png](./assets/Storybook-screenshot.png)

Github repo: [https://github.com/LWC-Essentials/storybook](https://github.com/LWC-Essentials/storybook)


## About
This project offers a sample LWC application, with a library, that shows how to integrate with Storybook. It covers differet aspects of Storybook:  

- Components showcase  
  Shows the components in action in a dedicated, simple UI (stories).  
- Components documentation  
  Provide the full components documentation, which can be generated out of the component source code and/or manually written.  
- Composition  
  The application Storybook aggregates the components provided by the dependencies (libraries).  
- Static deployment  
  The resulting Storybook instance is deployed to a static server, typically on Github pages, so it becomes easily available.  
- Testing  
- Others  
  There are much more capabilities, like accessibility reporting, ...
  

## Demo project layout
This project is a mono repo, powered by learna, which currently contains two packages:  

- A reusable library of components, lwc-library  
- An application, lwc-app, consuming the library  

The demo is based on Storybook version 6.0+ version which implements the composition mechanism, and thus allows the main app to render the stories coming from the library.


## Getting started

The sample application is very basic, and not that exiting, but you can execute it with the following commands:  

```sh
yarn
yarn build 
yarn start
```

More interesting in the Storybook. You can execute the library one, only showing the stories part of the library:  

```sh
cd packages/lwc-library/
yarn storybook
```

Or you can execute it from the application, which will include both the library and the aplication stories:  

```sh
cd packages/lwc-app/
yarn storybook
```

Note: in order for the composition to work, the library's Storybook must be deployed as a static site. If you create your own library, make sure to deploy it using the following commands:  

```sh
cd packages/lwc-app/
yarn storybook:deploy-static
```

### Project commands
A series of commands is defined for each project within `package.json`. The 2 main commands to know are:  

- `storybook`
  Generate all the meta-data files, compile the LWC components and run the development server.  
  This is the command to use at least when running Storybook for the first time. Going forward, and dependening on what changes were made to the project, more optimized commands can be used.  
- `storybook:deploy`  
  Build the project, build the static site, and deploy it to Github pages.


Here are the other ones:  

- `storybook:build`
    Generate all the meta-data files, compile the LWC components.  
- `storybook:meta`
  Generate the component meta-data files `custom-elements.json`
- `storybook:buildlwc`
    Compiles the LWC components and generates `.storybook/build/main-storybook.js`.  
- `storybook:start`
  Start the component the Storybook server, assuming that the necessary build steps were completed.
- `build-storybook`
  Build the the static site, including the generation of `stories.json`.
- `deploy-storybook`
  Deploy the previously generated static site to Github pages.
  

## Projects Setup

### Application bundler
Storybook is using Webpack as the application bundler. Unfortunately, LWC is generally using Rollup and there is no supported Webpack plugin. As a result, we'll use Rollup to build the components and Webpack to run the application. This has several consequences:  

- There are 2 build steps, one for the components and one for Storybook itself  
  The `.storybook/` folder contains a rollup configuration that is used to compile the LWC components. The result is a single JS files, generated to `.storybook/build`, that is loaded by Webpack.  
- The components displayed as part of a story must be custom elements.  
  Custom elements limit the values to be passed to the components, as HTML only allow string literals as attributes. To pass more complex values, the developer must create wrappers.  


### Storybook folders
Both the library (lwc-library) and the application (lwc-app) feature 2 new directories:  

- `.storybook`  
  Contains the Storybook configuration files (main.js, preview.js...) as well as the LWC files needed for Storybook, like the rollup configuration.  
- `.stories`  
  Contain all the stories, for all the components. After several discussions, we decided to isolate the stories in their own folder rather than co-locating them with the components. It makes it easier for a developer to find the stories when working on them.  
  Note that this folder also contains an `index.js` file that loads and register all the components as custom elements.


### Composition
The main application is exposing the stories defined in the library through the [composition](https://medium.com/storybookjs/storybook-composition-af0da9084fba) mechanism. To enable the composition, the library must be deployed as a static site with a properly generated `stories.json` file. Then, the application can either explicitely include it (see: `main.js - refs`) or imnplicitly if the library it includes features an entry in its `package.json` (automatic loading). This sample project uses the later.


## Implementing Storybook

### Creating a story for a component
As there is no particular support for LWC in Storybook, this project uses the generic Web Component integration. As such, all the components that are exposed within the stories must be registered as custom elements. This is done in `/stories/index.js`.  
Stories use the [CSF](https://storybook.js.org/docs/formats/component-story-format/) format, using the `html` tag from LitHtml when including the markup. Omitting the tag could change the rendering, particularly in the documentation.

Here is an example:  

``` js
import { html } from 'lit-html';
export const default_ = () => html`
    <hello-greetings></hello-greetings>
`;
```


### Documenting Web Components
Documentation which is a great strengh of Storybook, can be at least partially generated. The WebComponent organization comes with a meta-data format to desbribe web components: [custom-elements.json](https://github.com/webcomponents/custom-elements-json).Warn: this format is not yet a standard and can evolve in the near future. It currently contains enough information to describe a components, its attributes and properties, events, CSS variables...  

Writting or maintaining such a file manually is cumbersome, so we better generate it from the component source files. This tasks is achieved by a third party library: [web-component-analyzer](https://github.com/runem/web-component-analyzer#readme). As Javascript doesn't describe all the meta-data that we need, the source code must be enriched with [JSDoc](https://jsdoc.app/) information. In particular, it supports some web components specific tags describes [here](https://www.npmjs.com/package/web-component-analyzer#%E2%9E%A4-how-to-document-your-components-using-jsdoc). 

In order for web components to be recognized by web-component-analyzer, it currently must feature an element tag in its header. Moreover, the attributes, properties, ... should be property taggesd as well:  

```js
/**
 * LWC Component taggeg with JSDoc comments.
 * @element my-component
 */
export default class MyComponent extends LightningElement {
    /**
     * name is an attribute
     * @attr
     */
    @api name = ''
    /**
     * message is a property
     * @ property
     */
    message = ''
    
    ...
}
```


### Story types
This sample application shows different story types.  

#### Component story
A component story is defined using the [CSF](https://storybook.js.org/docs/formats/component-story-format/) format in a `xxx.stories.js` file. Simply add the file to the `/stories` folder in the project root, or one of its subdirectory. Storybook is configured to load all of them.

Make sure that the HTML markup uses the Lit Element `html` tag.  

Here is an example: [https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-library/stories/hello-greetings.stories.js](https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-library/stories/hello-greetings.stories.js).  

#### Documentation story
Storybook also uses [MDX](https://storybook.js.org/docs/formats/mdx-syntax/) files to provide a customizable documentation for the components. An MDX file contains a mix of markdown and React JSX. The documentation stories are stored in `xxx.stories.mdx` files that are also automatically loaded. Similarly to the component stories, it uses the Lit Element `html` tag for the component markup.  

Here is an example: [https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-library/stories/doc-greetings.stories.mdx](https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-library/stories/doc-greetings.stories.mdx).  

### Developer experience
One of the value of Storybook is the component development experience, where a code change is reflected directly in the Storybook UI. For this, Storybook relies on Webpack watchers but this is not sufficient as the components are built using Rollup. Rollup is thus started with its own watchers, so it rebuilt when a component is changed. Then Webpack watches the changes to the Rollup built file and rebuilds itself.  

As both Webpack and Rollup have watchers, the 2 processes must run in parallel. To make this reliable, we use [npm-run-all](https://www.npmjs.com/package/npm-run-all) instead of the simple `&` operator when launching processes.  


### Static content
There are two ways for adding static content:  

- Create an MDX story and add your markdown
- Create a component story and inject HTML

Here is an example for the second solution: [https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-app/stories/welcome.stories.js](https://github.com/LWC-Essentials/storybook/blob/master/packages/lwc-app/stories/welcome.stories.js).  


### Deploying the static sites
The sites are deployed by default to Gihub pages, using using [gh-pages](https://www.npmjs.com/package/gh-pages). An easy solution solution would use [storybook-deployer](https://github.com/storybookjs/storybook-deployer), but is is less flexible in particular when deploying multiple Storybook sites from a mono repo.  

Deploying the static sites involves the following commands from the project root:

```sh
yarn build-static
yarn deploy-static
```

## LWC Specific

### Complex properties
LWC components can consume complex property values, like objects. Unfortunately, the custom element specification does not allow such values to ba passed through HTML markup.  

There are multiple solutions: 

- Use LitElement template syntax  
  The `html` syntax allows properties to be passed as any value when the its name starts with a dot `.`. Here is an example, where the time is passed as an object:  
  
  ```
  export const staticTime = () => html`
    <hello-time .time=${{hours:1,minutes:3,seconds:4}}></hello-time>
  `;
  ```

- Create a technical Web Component that wraps the desired one, and pass it complex parameters via the template  
  The library demo defines these components is the `wc` namespace located in `stories`. Note that the syntax above should be preferred in most cases, as it is simplier. 


### Provided add-ons
The sample app configures a set of add-ons

- [@storybook/addon-docs](https://www.npmjs.com/package/@storybook/addon-docs)  
   Docs transforms your Storybook stories into world-class component documentation.
- [@storybook/addon-knobs](https://www.npmjs.com/package/@storybook/addon-knobs)  
  Knobs allow you to edit props dynamically using the Storybook UI.  
- [@storybook/addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y)  
  Check the accessibility of a component. It shows any potential issue in a panel.  
- [@storybook/addon-storysource](https://www.npmjs.com/package/@storybook/addon-storysource)  
  Storysource show stories source in the addon panel
- [@storybook/addon-actions](https://www.npmjs.com/package/@storybook/addon-actions)  
  Display data received by event handlers.  
- [@storybook/addon-controls](https://www.npmjs.com/package/@storybook/addon-controls)  
  Controls gives you UI to interact with a component's inputs dynamically, without needing to code.    
- [@storybook/addon-events](https://www.npmjs.com/package/@storybook/addon-events)  
  Events allows you to add events for your stories.    
- [@storybook/addon-jest](https://www.npmjs.com/package/@storybook/addon-jest)  
  Brings Jest results in storybook.
- [@storybook/addon-viewport](https://www.npmjs.com/package/@storybook/addon-viewport)  
  Viewport allows your stories to be displayed in different sizes and layouts in Storybook.
- [@storybook/addon-backgrounds](https://www.npmjs.com/package/@storybook/addon-backgrounds)  
  Let a user change the background color within the preview window.  
- [@storybook/addon-storyshots](https://www.npmjs.com/package/@storybook/addon-storyshots)  
  StoryShots adds automatic Jest Snapshot Testing for Storybook.
- [@storybook/addon-links](https://www.npmjs.com/package/@storybook/addon-links)  
  Links can be used to create links that navigate between stories in Storybook.

The WebComponent organization is also coming with some add-ons, like [storybook-addon-web-components-knobs](https://www.npmjs.com/package/storybook-addon-web-components-knobs), but they have not been integrated with this sample project yet.



## TODOs
Yes there are TODOs...  

- Decrease the build time  
  One solution is to provide a prebuilt-version of Storybook, see: [https://github.com/open-wc/storybook-prebuilt](https://github.com/open-wc/storybook-prebuilt)
  
- Use the LWC compiler to extract meta-data  
  The Stencil compiler provides such a feature, although it missed some of the meta-data. The LWC has an RFC for a canonical meta-data format: [https://github.com/salesforce/lwc-rfcs/pull/33/files?short_path=2648c38#diff-2648c38fced96da2e0c183fd293d54eb](https://github.com/salesforce/lwc-rfcs/pull/33/files?short_path=2648c38#diff-2648c38fced96da2e0c183fd293d54eb).  
  
- Extend web-component-analyzer to better support LWC  
  [https://github.com/runem/web-component-analyzer/issues/150 ](https://github.com/runem/web-component-analyzer/issues/150)
  - Scan the lwc.config.json to enumerate the components
  - Deduce the element name from the directory of a component
  - Handle @api and other decorators  
  - ...
