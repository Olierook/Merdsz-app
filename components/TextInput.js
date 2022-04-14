import React from 'react'
import { colors } from '../lib/colors'

const TextInput = ({color, name, ...props}) => {
  return (
    <label id={name}>
        <span>{name}</span>
        <input {...props} type="text" name={name}/>
        <style jsx>{`
            input {
                background-color: "white";
                color: "black"
                border: none;
                outline: inherit;
                width: 150px;
            }  
            label {
                display: inline-grid;
                width: 100%;
                justify-content: center;
                padding: 5px;
            }
            span {
                width: 120px;
                margin-right: 5px;
            }
        `} </style>
    </label>
  
  )
}

export default TextInput