import React from 'react';
import '../App.css';
import javascript from '../assets/javascript.jpg';
import tailwin from '../assets/tailwin.jpg';
import react from '../assets/react.png';
import vscod from '../assets/vscod.jpg';
import github from '../assets/github.png';
import materialui from '../assets/materialui.png';

function Experience() {
  return (
    <section id='experience' className='bg-secondary text-white py-24 px-16'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
              <div className=''>
                <h1 className='text-2xl text-white  border-b-[5px] w-[180px] border-indigo-400 pb-2 py-4 font-pacifico'>
                    My Experience
                </h1> 

                <p className='py-5 font-cormorant text-2xl'>These are some of the tools I've used so far and very conversant with them.</p>

              </div>

              <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img src={javascript} alt='javascript image' />
                  <p>Javascript</p>
                </div>

                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img src={react} alt='react-image' className='exp-items'/>
                  <p>Reactjs</p>
                </div>

                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img src={vscod} alt='visual-studio code' />
                  <p>Vs Code</p>
                </div>

                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img  src={github} alt='git-github image'/>
                  <p>Github</p>
                </div>

                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img src={tailwin} alt='tailwind image'/>
                  <p>Tailwind Css</p>
                </div>

                <div className='shadow-md hover:scale-105 duration-500 py-2 justify-center rounded-lg'>
                  <img src={materialui} alt='materialui image' />
                  <p>Materialui</p>
                </div>
              </div>

        </div>
    </section>
  )
}

export default Experience