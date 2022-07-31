import KBadge from '@/components/KBadge/KBadge.vue'
import CustomMDXDocumentation from './badge.mdx'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Component/KBadge',
  component: KBadge,
  description: 'Badges, pills, or whatever you wanna call them. Slap it on something.',
  parameters: {
    layout: 'centered',
    docs: {
      inlineStories: true,
      page: CustomMDXDocumentation,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    appearance: {
      name: 'appearance5',
      control: { type: 'select' },
      options: ['success', 'warning', 'danger', 'info', 'default', 'custom'],
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'rectangular'],
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { KBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <KBadge v-bind="args">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
      <div v-else>test</div>
    </KBadge>
  `,
})

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  appearance: 'success',
  default: 'SUCCESS',
}
Success.parameters = {
  docs: {
    description: {
      story:
        'A Badge of `appearance="success"` is a badge styled green.',
    },
    source: {
      code: '<KBadge appearance="success" class="mr-2">SUCCESS</KBadge>',
      language: 'html',
      type: 'auto',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  appearance: 'danger',
  default: 'Badge',
}

export const Rectangle = Template.bind({})
Rectangle.args = {
  shape: 'rectangular',
  default: 'Badge',
}

export const Custom = Template.bind({})
Custom.args = {
  appearamce: 'custom',
  default: 'Badge',
  color: 'var(--white)',
  backgroundColor: 'var(--purple-300)',
}
