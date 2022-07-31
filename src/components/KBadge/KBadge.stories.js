import KBadge from '@/components/KBadge/KBadge.vue'
import CustomMDXDocumentation from './badge.mdx'
import './_stories.scss'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Component/KBadge',
  component: KBadge,
  parameters: {
    layout: 'centered',
    docs: {
      page: CustomMDXDocumentation,
    },
  },
  // set defaults and order of ArgsTable props
  args: {
    appearance: 'default',
    shape: 'rounded',
    default: 'my badge',
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    appearance: {
      name: 'appearance',
      control: { type: 'select' },
      options: ['success', 'warning', 'danger', 'info', 'default', 'custom'],
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'rectangular'],
    },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    default: {
      description: 'innerHTML inside badge',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      },
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
    </KBadge>
  `,
})

export const Primary = Template.bind({})
Primary.storyName = 'KBadge Demo'
Primary.args = {
  default: 'Look Mah!',
}
Primary.parameters = {
  docs: {
    description: {
      story:
        'A Badge is a pill or whatever',
    },
    source: {
      code: '<KBadge>Look Mah!</KBadge>',
      language: 'html',
      type: 'auto',
    },
  },
}

export const Appearance = (args) => ({
  components: { KBadge },
  setup() {
    return { args }
  },
  template: `
    <div>
      <KBadge appearance="success" class="mr-2">SUCCESS</KBadge>
      <KBadge appearance="warning" class="mr-2">WARNING</KBadge>
      <KBadge appearance="danger" class="mr-2">DANGER</KBadge>
      <KBadge appearance="info" class="mr-2">INFO</KBadge>
      <KBadge>DEFAULT</KBadge>
    </div>
  `,
})
Appearance.storyName = 'appearance'

export const Shape = (args) => ({
  components: { KBadge },
  setup() {
    return { args }
  },
  template: `
    <div>
      <KBadge appearance="warning" class="mr-2">Round</KBadge>
      <KBadge appearance="warning" shape="rectangular">Rectangular</KBadge>
    </div>
  `,
})
Shape.storyName = 'shape'

export const Colors = (args) => ({
  components: { KBadge },
  setup() {
    return { args }
  },
  template: `
    <div>
      <KBadge color="var(--yellow-500)" background-color="var(--yellow-200)" class="mr-2">Custom</KBadge>
      <KBadge color="var(--red-100)" background-color="var(--red-400)" class="mr-2">Badge</KBadge>
      <KBadge color="var(--blue-200)" background-color="var(--blue-500)" class="mr-2">Hello</KBadge>
      <KBadge color="#dfe6e9" background-color="#636e72" class="mr-2">Something</KBadge>
      <KBadge color="var(--red-500)" background-color="var(--red-300)">Long Badge 236bfb09-fe79-4cc9-99be-9361d6b1db64 aa07575b-bcd3-4bb2-bfd7-998224e3d31e 364b78fc-dba3-4b94-9134-388515496de5</KBadge>
    </div>
  `,
})
Colors.storyName = 'color, background-color'

export const DefaultSlot = (args) => ({
  components: { KBadge },
  setup() {
    return { args }
  },
  template: `
    <div>
      <KBadge appearance="success">SUCCESS</KBadge>
    </div>
  `,
})
Shape.storyName = 'Slots/default'

export const Theming = (args) => ({
  components: { KBadge },
  setup() {
    return { args }
  },
  template: `
    <div class="KBadge-wrapper">
      <KBadge appearance="danger">DANGER - RADIOACTIVE MATERIAL</KBadge>
    </div>
  `,
})
