import React from 'react'
import { RoughNotation } from 'react-rough-notation'

type Props = {
  color: string
  children?: React.ReactNode
}

export default function RainbowHighlight({ color, children }: Props) {
  // Change animation based on length of text we're animating (speed =
  // distance / time)
  let length = 0

  if (typeof children === 'string') {
    length = children.length
  } else if (React.isValidElement(children)) {
    length = React.Children.count(children)
  }

  const animationDuration = Math.floor(30 * length)
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  )
}
