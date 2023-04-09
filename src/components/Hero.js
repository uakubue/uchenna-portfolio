import React from 'react';
import heroimg from '../assets/heroimg.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function Hero() {
  return (
    <section className='bg-primary text-white py-32 px-16'>
        <div className=' container mx-auto grid md:grid-cols-2 items-center md:justify-between'>

            <div className='hero__info py-3 px-3'>
                <h1 className='text-2xl lg:text-6xl py-4 font-pacifico'>
                    Hi,<br/>
                    I'm <span className='bold text-accent'>U</span>chenna <br/>
                    Web-Developer
                </h1>

                <p className='font-cormorant py-8'>
                    I am proficient in Reactjs, Javascript and Tailwind Css...
                </p>

                <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                 from-cyan-500 to-blue-500 cursor-pointer'><a href='#projects'>See Projects</a><span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={30}/></span> </button>
            </div>


            <div className='hero-image'>
                <img src={heroimg} alt='my__image' className='lgw-[40%] rounded-md  w-96 ml-auto'/>
            </div>
        </div>
    </section>
    
  )
}

export default Hero