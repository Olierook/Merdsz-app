import React from 'react'

const ButtonGrid = ({children}) => {
  return (
    <div>
        {children}
        <style jsx> 
        {`
            div {
                padding-top: 80px;
                height: calc(100vh - 100px);
                display: grid;
                grid-template-rows: repeat(7, 1fr);
                grid-template-columns: repeat(3, 1fr);

            }
        `}
        </style>
    </div>
  )
}

export default ButtonGrid