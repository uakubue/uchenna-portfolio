import React from 'react';
import './Popup.css';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup__inner'>
            <button onClick={() => props.setTrigger(false)} className='close__btn'><IoIosCloseCircleOutline /></button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup