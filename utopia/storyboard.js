import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import uuid from 'react-uuid'

export var storyboard = (
  <Storyboard>
    <div
      style={{
        backgroundColor: '#aaaaaa33',
        position: 'absolute',
        left: 489,
        top: 143,
        width: 'max-content',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        padding: '96px 62px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          wordBreak: 'break-word',
          width: 'max-content',
          height: 'max-content',
        }}
      >
        {uuid()}
      </span>
    </div>
  </Storyboard>
)
