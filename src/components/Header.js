import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

  return (
    <div className='flex justify-between sticky top-0 px-5 py-4 bg-gray-800 text-white'>
        <header>
         <a href='/#' className='logo px-3 py-2 text-orange-300 font-signature text-4xl '>Uchenna</a>
        </header>

        {/*  Desktop Nav */}
        <nav className='hidden md:block'>
            <ul className='flex'>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <li><a href='/#projects'>Projects</a></li>
                <li><a href='/#contact'>Contact</a></li>
                <li><a href='/#experience'>Experience</a></li>
                
            </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className={
            !toggle 
            ? 'mobile-nav left-[-100%]'
            : 'mobile-nav left-0'}>
            <ul className='flex flex-col '>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <li><a href='/#projects'>Projects</a></li>
                <li><a href='/#contact'>Contact</a></li>
                <li><a href='/#experience'>Experience</a></li>
                
            </ul>
        </nav>

        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden">
            {!toggle ? <AiOutlineMenu size={28} /> : <AiOutlineClose size={28} />}
        </button>

    </div>
    

    
  )
}

export default Header