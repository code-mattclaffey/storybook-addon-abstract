# Storybook Abstract Addon

> A abstract design reference tool

![Storybook Addon For Abstract](https://raw.githubusercontent.com/code-mattclaffey/storybook-addon-abstract/master/abstract-panel.png)

## Installation

```
  yarn add storybook-addon-abstract --dev
```

main.js/config.js

```js
module.exports = {
  addons: ['storybook-addon-abstract/register'],
}
```

## Usage

### MDX format

```jsx
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks'
import { WithAbstract } from 'storybook-addon-abstract'

<Meta title="Example" />

<Preview>
  <Story name="default">
    <WithAbstract abstractId="c53e8159-2e24-4118-b02b-6fe4b3a3afee">
      <h1>Hello World</h1>
    </WithAbstract>
  </Story>
</Preview>
```

### CSF format

```jsx
import { WithAbstract } from 'storybook-addon-abstract'

export const helloWorld = () => (
  <WithAbstract abstractId="c53e8159-2e24-4118-b02b-6fe4b3a3afee">
    <h1>Hello World</h1>
  </WithAbstract>
)
```
