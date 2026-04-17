import React from 'react'

const Display = () => {
    const[isVisible, setIsVisible] = React.useState(false)
  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Visiblity</button>
        <h1>{isVisible ? "Hey This text is visible" : ""}</h1>
    </div>
  )
}

export default Display