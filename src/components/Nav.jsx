import React, { useState } from 'react'

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true 
    }

  return (
    <nav className='bg-blue-500 p-4'>
        <div className="flex items-center justify-between">
            <div className='text-white text-2xl font-bold'>ReactTailwind</div>

            {/* Toggle Menu Button */}
            <div className="md:hidden">
                <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                    <svg 
                        fill='none' 
                        stroke='currentColor' 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2"
                        viewBox="0 0 24 24" 
                        className='w-6 h-6'
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <ul className='hidden md:flex space-x-4'>
                <li><a href="#" className='text-white'>Home</a></li>
                <li><a href="#" className='text-white'>About</a></li>
                <li><a href="#" className='text-white'>Services</a></li>
                <li><a href="#" className='text-white'>Contact</a></li>
            </ul>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
            <ul className='flex-col md:hidden'>
                <li className='py-2'><a href="#" className='text-white'>Home</a></li>
                <li className='py-2'><a href="#" className='text-white'>About</a></li>
                <li className='py-2'><a href="#" className='text-white'>Services</a></li>
                <li className='py-2'><a href="#" className='text-white'>Contact</a></li>
            </ul>
        ) : null}
        
    </nav>
  )
}

export default Nav



