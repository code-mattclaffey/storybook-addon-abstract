
module.exports = {
  stories: [
    '../README.stories.mdx',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-actions'
  ],
}
