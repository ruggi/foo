import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 700,
        height: 759,
        position: 'absolute',
        left: 212,
        top: 128,
      }}
      data-label='Playground'
      data-uid='3fc'
    >
      <Playground style={{}} data-uid='d9d' />
    </Scene>
    <Scene
      style={{
        width: 744,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
      }}
      data-label='My App'
      data-uid='2c5'
    >
      <App style={{}} data-uid='a28' />
    </Scene>
    <img
      data-aspect-ratio-locked
      src='./assets/Screenshot 2022-11-24 at 2.38.25 PM.png'
      style={{
        position: 'absolute',
        width: 196,
        height: 234,
        top: 11,
        left: -52,
      }}
      data-uid='152'
    />
  </Storyboard>
)
