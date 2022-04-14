import React from 'react'
import { colors } from '../lib/colors'

const Button = ({color, margin, children, ...props}) => {
  return (
    <button {...props}>
        {children}
        <style jsx>{`
            button {
                margin: ${margin || "inherit"};
                background: none;
                color: white;
                border: none;
                padding: 15px;
                font: inherit;
                cursor: pointer;
                outline: inherit;
                background-color: ${colors?.[color] || "#7C4DFF"};
                border-radius: 15px;
                transition: transform 100ms;
            }
            button:hover {
                cursor: pointer;
                transform: scale(1.1);

            }

        `}</style>
    </button>
  )
}

export default Button