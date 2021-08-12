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
