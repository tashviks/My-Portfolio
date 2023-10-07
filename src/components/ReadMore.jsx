import React from 'react';
import './ReadMore.css';
const ReadMore = (props) => {
  return (props.trigger)?(
    <div className='popup'>
        <div className="popup-inner">
            <div className="top-con">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}><i className='fas fa-times'></i></button>
            </div>
            {props.children}
        </div>
    </div>
  ) : "";
}
export default ReadMore
