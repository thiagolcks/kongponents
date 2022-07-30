import { Layout } from "./Layouts";
import { Anchor, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  /* docs: {
    page: () => <Layout />,
  }, */
  /* docs: {
    container: props => (
      <div>
        <DocsContainer context={props.context}>
          <Anchor storyId={props.context.id} />
          {props.children}
        </DocsContainer>
      </div>
    ),
  }, */
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /* options: {
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
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      title: "Docs",
    },
    'canvas': {
      title: 'Preview',
    },
  },
}
