import React from 'react'
import { bool, string } from 'prop-types'

const AbstractIframe = ({ active, abstractId, allowFullScreen }) => {
  return (
    <iframe
      height="100%"
      width="100%"
      frameBorder="0"
      src={`https://app.abstract.com/embed/${abstractId}`}
      style={{display: active ? 'block' : 'none'}}
      allowFullScreen={allowFullScreen}
    />
  )
}

AbstractIframe.propTypes = {
  active: bool.isRequired,
  allowFullScreen: bool.isRequired,
  abstractId: string.isRequired
}

AbstractIframe.defaultProps = {
  active: false,
  allowFullScreen: true
}

export default AbstractIframe
