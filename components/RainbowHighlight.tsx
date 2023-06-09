import { RoughNotation } from 'react-rough-notation'

type Props = {
  color: string
  // children that is a react node of a string
  children: React.ReactNode
}

const RainbowHighlight = ({ color, children }: Props) => {
  // Change animation based on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length)
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

RainbowHighlight.defaultProps = {
  color: '#a855f7',
}

export default RainbowHighlight
