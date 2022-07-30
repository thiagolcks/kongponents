import KButton from '@/components/KButton/KButton.vue'
const VALID_ICON_NAMES = [] // TODO: import valid kicon names list

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Component/KButton',
  component: KButton,
  parameters: {
    layout: 'centered',
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
      defaultValue: 'medium',
    },
    disabled: { control: 'boolean', defaultValue: false },
    isOpen: { control: 'boolean' },
    icon: { options: ['', ...VALID_ICON_NAMES] },
    default: {
      description: 'The default Vue slot',
      defaultValue: 'my button',
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
      <div v-if="${'default' in args}" v-slot>${args.default}</div>
      <div v-else>test</div>
    </KButton>
  `,
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  appearance: 'primary',
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  appearance: 'secondary',
  label: 'Button',
}

/* export const ButtonSizes = () => (
  <div>
    <KButton appearance="secondary" size="small">Small</KButton>
    <KButton appearance="secondary" size="medium">Medium</KButton>
    <KButton appearance="secondary" size="large">Large</KButton>
  </div>
)
 */
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
