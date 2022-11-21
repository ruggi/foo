import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import { View } from 'utopia-api'

export var storyboard = (
  <Storyboard data-uid='0cd'>
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
    <View
      style={{
        backgroundColor: '#f09',
        position: 'absolute',
        left: 117,
        top: 202,
        width: 195,
        height: 381,
      }}
      data-uid='efd'
    >
      <View
        style={{
          backgroundColor: '#0091FFAA',
          position: 'absolute',
          left: 30,
          top: 67,
          width: 99,
          height: 429,
        }}
        data-uid='eac'
      >
        <View
          style={{
            backgroundColor: '#0091FFAA',
            position: 'absolute',
            left: -164,
            top: 169,
            width: 48,
            height: 530,
          }}
          data-uid='551'
        />
      </View>
    </View>
  </Storyboard>
)
