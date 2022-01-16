import React from 'react';
import {RoughNotation} from 'react-rough-notation';

const RainbowHighlight = ({color, children}) => {
    // Change animation based on length of text we're animating (speed =
    // distance / time)
    const animationDuration = Math.floor(30 * children.length)
    return (
        <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iteration={1}
            animationDuration={animationDuration}
            color={color}
        >
            {children}
        </RoughNotation>
    )
}

export default RainbowHighlight