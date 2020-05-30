import React from 'react'
import addons from '@storybook/addons'
import { bool, string } from 'prop-types'
import { EVENT_ID } from './shared'

export const WithAbstract = ({
  children,
  allowFullScreen,
  abstractId
}) => {
  addons.getChannel().emit(EVENT_ID, {
    allowFullScreen,
    abstractId,
  })
  return children
}

export default ({
  allowFullScreen,
  abstractId
}) => getStory => {
  addons.getChannel().emit(EVENT_ID, {
    abstractId,
    allowFullScreen
  })
  return getStory()
}

WithAbstract.propTypes = {
  abstractId: string.isRequired,
  allowFullScreen: bool,
}

WithAbstract.defaultProps = {
  allowFullScreen: true,
}

function checkA11y(storyFn, context) {
  const channel = addons.getChannel();
  return manager.wrapStory(channel, storyFn, context);
}
