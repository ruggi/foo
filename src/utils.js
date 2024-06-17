import * as React from 'react'

export function FlexRow({ children, style, ...props }) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        ...style,
      }}
      data-uid='667'
    >
      {children}
    </div>
  )
}

export function FlexCol({ children, style, ...props }) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      data-uid='070'
    >
      {children}
    </div>
  )
}

export function TwoColumnGrid({
  children,
  style,
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        ...style,
      }}
      data-uid='b93'
    >
      {children}
    </div>
  )
}

export function ThreeColumnGrid({
  children,
  style,
  ...props
}) {
  return (
    <div
      {...props}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        hieght: '100%',
        ...style,
      }}
      data-uid='74f'
    >
      {children}
    </div>
  )
}
