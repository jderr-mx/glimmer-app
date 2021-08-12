import Component, { hbs } from '@glimmerx/component';

const InlineComponent = hbs`<div>This is a local inline component using <code>hbs</code> in a .js file</div>`;

export default class Hbs extends Component {
  static template = hbs`
    <div id="hbs">
      <div>This component is rendered using <code>hbs</code> in a .js file</div>
      <InlineComponent/>
    </div>
  `;
}
