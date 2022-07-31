import React from 'react' // need this import so HTML below doesn't error
import { app } from '@storybook/vue3'
import '../src/styles/styles.scss'
import Kongponents from '../src'
import { Layout } from "./Layouts";
// Import component-specific files
import * as icons from '../src/components/KIcon/icons' // KIcon icons
import ToastManager from '../src/components/KToaster/ToastManager'

// Register all Kongponents
app.use(Kongponents)
app.config.globalProperties.$icons = Object.keys(icons)
app.config.globalProperties.$toaster = new ToastManager()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    page: () => <Layout />,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",/*
  previewTabs: {
    "storybook/docs/panel": {
      title: "Docs",
      index: -1
    },
    'canvas': {
      title: 'Preview',
    },
  }, */
  /* TODO: TOC
  options: {
    storySort: {
      order: [
        "Introduction",
        ["Welcome", "Release Notes"],
        "Design Tokens",
        "Style",
        "Components",
        "Utilities",
        ["Formatters", "Hooks"],
      ],
    },
  }, */
}
