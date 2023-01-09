import React, { useState } from 'react';
import './App.css';

const MyComments = ({ tasks }) => {
const [comment, setComment] = useState()

const timestamp = () =>  {
  let date = new Date();
      let hr = date.getHours();
      let mins = date.getMinutes();
      let period = ['AM', 'PM'];
  
      let res = (hr > 12) ? period[1] : period[0]
      let data = `${hr}: ${mins} ${res}`;
      return data;
  }


 
  return (
    <div>
        <div className='comment '>
            <div className='container comment__wrapper'>
                <div className='commentTop'>
                    <div className='commentImg'></div>
                 <div className='commentHeading'>amyBalogun</div>
            <div className='commentPeriod'>{timestamp()}</div>
         </div>
          <textarea type='text' value={tasks.message} onChange={e => setComment(e.target.value)} className='comment__text' style={{ color: 'grey', border: 'none', outline: 'none'}}></textarea>      
        </div>
            </div>  
    </div>
  )
}
export default MyComments