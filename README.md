# Glimmer-app

Quick setup for a standalone glimmer app using the [@glimmerx](https://github.com/glimmerjs/glimmer-experimental) apis
It is based on the @glimmerx application blueprint

Clone the repo and run install the dependency tool of your choice, I used yarn

`yarn` to install the dependencies
`yarn start` to start the webpack-dev-server
point your browser to https://localhost:8080

`index.js` renders the root component inside of `#app` in index.html
`App.js` is the root component it renders some sample compoments that demonstrate the 2 different inline template apis available.
Both components have examples of using local inline components

`@glimmerx/component` uses `ember-template-imports` as a dependency for rendering the component templates

Check out the ember-template-imports [README](https://github.com/ember-template-imports/ember-template-imports) for more detailed
examples of the component template apis  

`Hbs.js` imports `hbs` to render the template as an template literal
```javascript
import Component, { hbs } from '@glimmerx/component';

const InlineComponent = hbs`<div>This is a local inline component using <code>hbs</code> in a .js file</div>`;

export default class Hbs extends Component {
  static template = hbs`
    <div>This component is rendered using <code>hbs</code> in a .js file</div>
    <InlineComponent/>
  `;
}```

`Gjs.gjs` uses the `<template>` tag to render the template inline 
```javascript
import Component from '@glimmerx/component';

const CodeTag = <template><code>&lt;{{yield}}&gt;</code></template>
const InlineComponentTemplate = <template>
    <div>This is a local inline component using <CodeTag>template</CodeTag> tag in a .gjs file</div>
</template>

export default class Gjs extends Component {
  <template>
    <div>This component is rendered using <CodeTag>template</CodeTag> tag in a .gjs file</div>
    <InlineComponentTemplate/>
  </template>
}
```

