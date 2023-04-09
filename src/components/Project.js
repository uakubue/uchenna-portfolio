import React from 'react';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import amazonclone from '../assets/amazonclone.png';
import spotifyclone from '../assets/spotifyclone.png';
import responsiveportfolio from '../assets/responsiveportfolio.png';
import lendsqr from '../assets/lendsqr.png';


function Project() {
  return (
    <section id='projects' className='bg-primary py-20 px-16'>
        <div  className='hero__info py-3 px-3'>
                <h1 className='text-2xl text-white  border-b-[5px] w-[180px] border-indigo-400 pb-2 py-4 font-pacifico'>
                    My projects
                </h1>

                <p className='text-white font-cormorant font-medium py-2 px-3'>Here are some of the projects I've been working on so far.
                    Spanning from the ones I did in my early stage in web development.
                    Also, with some responsive ones and the ones I used some APIs.
                </p>
        </div>

        <div className='container  grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a  href='#'><img className='py-4 px-4 rounded-md duration-150 hover:scale-105' src={portfolio1} alt='first-portfolio' /></a>
          </div>

          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href='#'><img className='py-4 px-4 rounded-md duration-200 hover:scale-105' src={portfolio2} alt='second-portfolio' /></a>
          </div>  
          
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href='https://spotify-complete-clone.vercel.app/'><img className='py-4 px-4 rounded-md duration-200 hover:scale-105' src={spotifyclone} alt='spotify-clone' /></a>
          </div>
          
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href='https://lendsqr-clone-login.vercel.app/'><img className='py-4 px-4 rounded-md duration-200 hover:scale-105' src={lendsqr} alt='lend-sqr login'/></a>
          </div>
          
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href='#'><img className='py-4 px-4 rounded-md duration-200 hover:scale-105' src={responsiveportfolio} alt='responsive portfolio'/></a>
          </div>
            
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href='#'><img className='py-4 px-4 rounded-md duration-200 hover:scale-105' src={amazonclone} alt='amazon-clone-app' /></a>
          </div>

        </div>
    </section>
  )
}

export default Project