import React from 'react'

const Button = (props) => {
    const {name: MyName, onClick } = props
    
    return (
        <button onClick={onClick}>{MyName}</button>
    )
}

export default Button
