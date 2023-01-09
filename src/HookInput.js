import React, { useState } from 'react'
import HookButton from './HookButton'

const HookInput = () => {
    const [user, setUser] = useState('')
  return (
    <div>
        <input type='text'  value={user} onChange={e => setUser(e.target.value)} />
        <HookButton add={user} />
    </div>
  )
}

export default HookInput