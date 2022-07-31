import KIcon, { iconNames } from '@/components/KIcon/KIcon.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Component/KIcon',
  component: KIcon,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: '24',
    icon: 'dashboard',
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: { control: 'number' },
    backgroundColor: { control: 'color' },
    icon: {
      control: { type: 'select' },
      options: iconNames,
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { KIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <KIcon v-bind="args" />
  `,
})

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Success.args = {
  icon: 'clipboard',
}

/* export const Icons = () => {
  return (
    <div className="nds-typography">
      <div className="icon-demo">
          <KIcon
            v-for="icon in iconNames"
            size="24"
            :icon="icon" />
            <span>{{ icon }}</span>
      </div>
    </div>
  )
} */
