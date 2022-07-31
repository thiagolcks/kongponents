import KButton from '@/components/KButton/KButton.vue'
import { iconNames } from '@/components/KIcon/KIcon.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Component/KButton',
  component: KButton,
  parameters: {
    layout: 'centered',
  },
  // set defaults
  args: {
    default: 'my button',
    size: 'medium',
    disabled: false,
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    appearance: {
      name: 'appearance5',
      control: { type: 'select' },
      options: ['creation', 'primary', 'danger', 'secondary', 'outline', 'btn-link'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: iconNames,
    },
    default: {
      description: 'The default Vue slot',
      control: {
        type: 'text',
      },
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
  components: { KButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <KButton v-bind="args">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </KButton>
  `,
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  appearance: 'primary',
  label: 'Button',
  default: 'this is a test',
}

export const Secondary = Template.bind({})
Secondary.args = {
  appearance: 'secondary',
  label: 'Button',
}

export const ButtonSizes = (args) => ({
  components: { KButton },
  setup() {
    return { args }
  },
  template: `
    <div>
      <KButton appearance="secondary" size="small" class="mr-2">Small</KButton>
      <KButton appearance="secondary" size="medium">Medium</KButton>
      <KButton appearance="secondary" size="large">Large</KButton>
    </div>
  `,
})

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
