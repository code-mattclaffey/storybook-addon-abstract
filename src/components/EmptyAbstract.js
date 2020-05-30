import React from 'react'
import { bool } from 'prop-types'

const EmptyAbstractIframe = ({ active }) => (
  <div
    style={{
      margin: '1rem',
      fontFamily: 'Arial',
      fontSize: '1rem',
      color: '#444',
      width: '100%',
      overflow: 'auto',
      display: active ? 'block' : 'none',
    }}
  >
    <strong>Oh Hey! 👋 Add a Abstract design to your story:</strong>
    <pre>
      {`
      import React from 'react'
      import { storiesOf } from '@storybook/react'
      import { WithAbstract } from 'storybook-addon-abstract'

      export withAbtractWrapper = () => (
        <WithAbstract
          abstractId={'c53e8159-2e24-4118-b02b-6fe4b3a3afee'}
        >
          <button>Hello</button>
        </WithAbstract>
      )
      `}
    </pre>
  </div>
)

EmptyAbstractIframe.propTypes = {
  active: bool.isRequired,
}

EmptyAbstractIframe.defaultProps = {
  active: false,
}

export default EmptyAbstractIframe
