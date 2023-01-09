import React, { useState, useContext } from 'react'
import HookMouse from './HookMouse'
import { UserContext, UserName } from './App'

const HookButton = ({ add }) => {
    // const [display, setDisplay] = useState(true)
    const user = useContext(UserContext)
    const person = useContext(UserName)

  return (
    <div>
        {/* <button onClick={() => setDisplay(!display)}>Display</button>
        { display && <HookMouse />} */}
      <div>{person}</div>
      <div>{user}</div>
    </div>
  )
}

export default HookButton