import React, {useState} from 'react';
import './App.css';

const Comments = ({ onAdd }) => {
const [message, setMessage] = useState('');

//Submit form;
const onSubmit = (e) => {
    e.preventDefault();
    if(!message){
        alert('Please insert Task')
        return;
    }
  
    onAdd({message})
    setMessage('')
}
  return (
    <div>
            <div className='comment1 '>
                 <form className='comment__wrapper1 container' onSubmit={onSubmit}>
                         <div className='commentImage'></div>
                    <textarea type='text' className='comment__text1' value={message} placeholder="Add comment" onChange={e => setMessage(e.target.value)} />
                    <button className='commentBtn' type='submit' >SEND</button>
                </form>  
             </div>
    </div>
  )
}

export default Comments