import React, { useEffect, useState} from 'react';


const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const movement = (e) =>{
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(() =>{
            console.log('useEffect is online')
            window.addEventListener('mousemove', movement)

            return () =>{
                window.removeEventListener('mousemove', movement)
            }
    },[])
  return (
    <div>
        <button>Create</button>
        <button>Delete</button>
        <div>Mousemovement: {x} {y}</div>
    </div>
  )
}

export default HookMouse