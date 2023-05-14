import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { IoIosMailOpen } from 'react-icons/io';

function Contact() {
  return (
    <section id='contact'  className='bg-secondary text-white py-40 px-16'>
        <div className='hero__info py-3 px-3 md:w-[60%] mx-auto'>

                <h1 className='text-2xl text-center text-white  border-b-[5px] w-[200px] border-indigo-400 pb-2 py-4 font-pacifico'>
                  Contact Me
                </h1>

                <p className='font-cormorant py-8 text-2xl'>
                I'm open for any Open source projects, collaborations and both payed and unpayed gig, just a call or mail away...
                </p>
                
                <p className='py-2'>
                  <span className='font-bold'>  Email:</span>    uakubue@gmail.com
                </p>
                <p className='py-2'>
                  <span className='font-bold'>  Phone:</span>    +234-813-189-0974 <br/>   +234-811-515-3779
                </p>

                <div className='flex flex-cols-4 py-2 px-2'>
                  <div className='py-2 px-2 text-3xl rounded-lg bg-white text-blue-800'>
                    <a href='https://www.linkedin.com/in/uchenna-akubue-490921120/'><IoLogoLinkedin /></a>
                  </div>

                  <div className='py-2 px-2 text-3xl text-black-700'>
                    <a href='https://github.com/uakubue'><IoLogoGithub /></a>
                  </div>

                  <div className='py-2 px-2 text-3xl text-blue-400'>
                    <a href='https://twitter.com/holmesakubue'><IoLogoTwitter /></a>
                  </div>

                  <div className='py-2 px-2 text-3xl text-red'>
                    <a href='mailto:uakubue@gmail.com'><IoIosMailOpen /></a>
                  </div>
                </div>

            
        </div>
    </section>
  )
}

export default Contact
