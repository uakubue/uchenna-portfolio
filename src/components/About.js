import React, { useState } from 'react';
import corporateimg from '../assets/corporateimg.jpg';
import Popup from './popup/Popup';


function About() {
    const [buttonPopup, setButtonPopup ] = useState(false);

  return (
    <section id='about' className='bg-secondary text-white py-32 px-16'>
        <div  className=' container mx-auto grid md:grid-cols-2 items-center md:justify-between'>

            <div className='hero__info py-3 px-3'>
                <h1 className='text-2xl text-white  border-b-[5px] w-[180px] border-indigo-400 pb-2 py-4 font-pacifico'>
                    Little about Me
                </h1>

                <p className='font-cormorant text-2xl py-8'>
                    My name is Uchenna Akubue. From Anambra state, Nigeria. <br/>
                    Studied History and International studies in Nnamdi Azikiwe University, Awka.<br />
                    I'm a Front-End developer, that loves building functional and responsive applications. <br/>
                    I understand React-context-Api and some hooks like useEffect, useHistory, useState, useReducer and some others.
                </p>

                <button onClick={() => setButtonPopup(true)} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                 from-cyan-500 to-blue-500 cursor-pointer'><a href='uchennacv.pdf' download >Hire Me</a> 
                </button>
                   
            </div>
                    <Popup className='z-auto  ' trigger={buttonPopup} setTrigger={setButtonPopup}>
                     <h3 className='font-bold text-1xl text-center'>Information:</h3>
                     <p className='text-center'>You just downloaded Uchenna's CV!</p>
                    </Popup>

           


            <div className='hero-image'>
                <img src={corporateimg} alt='my__image' className='lgw-[40%] rounded-md  w-80 ml-auto'/>
            </div>
        </div>
    </section>
    
  )
}

export default About