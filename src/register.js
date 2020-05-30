import React from 'react'
import addons from '@storybook/addons'
import { ADDON_ID, PANEL_ID } from './shared'
import AbstractPanel from './components/AbstractPanel'

addons.register(ADDON_ID, (api) => {
  addons.addPanel(PANEL_ID, {
    title: 'Abstract',
    render: ({ active, key }) => {
      return <AbstractPanel key={key} channel={addons.getChannel()} api={api} active={active} />
    },
  })
})
