import React from 'react'
import Button from './Button'

const sum = (a, b) => {
    alert(a + b)
}

const App = () => {
    const name = 'Samuel'
   
    return (
        <div>
            <h4>Testanto meu WebPack</h4>
            <p>Com Babel presets + React</p>
            <Button onClick={() => sum(2, 2)} name={name} />
        </div>
    )
}

export default App