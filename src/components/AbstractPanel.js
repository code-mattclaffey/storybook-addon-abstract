import React, { useState, useEffect } from 'react'
import { bool, object } from 'prop-types'
import { EVENT_ID } from '../shared'
import EmptyAbstractIframe from './EmptyAbstract'
import AbstractIframe from './AbstractIframe'

const AbstractPanel = ({ channel, api, active }) => {
  const initialState = {
    abstractId: null,
    allowFullScreen: true,
  }
  const [state, setState] = useState({ ...initialState })

  useEffect(() => {
    const onAddAbstract = ({ abstractId = initialState.abstractId, allowFullScreen = initialState.allowFullScreen }) => {
      console.log(abstractId)
      setState({
        abstractId,
        allowFullScreen,
      })
    }

    if (active) {
      channel.on(EVENT_ID, onAddAbstract)

      return
    }

    api.onStory(() => {
      onAddAbstract({ ...initialState })
    })

    channel.removeListener(EVENT_ID, onAddAbstract)
  }, [active, channel, api, initialState])

  const { allowFullScreen, abstractId } = state

  return abstractId ? (
    <AbstractIframe active={active} allowFullScreen={allowFullScreen} abstractId={abstractId} />
  ) : (
    <EmptyAbstractIframe active={active} />
  )
}

AbstractPanel.propTypes = {
  active: bool.isRequired,
  api: object.isRequired,
  channel: object.isRequired,
}

export default AbstractPanel
