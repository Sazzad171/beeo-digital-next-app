import React, { useState } from 'react';

import Link from 'next/link';
// next img
import Image from 'next/image';

// images import
import Logo from '../../public/img/logo.png';
import LogoWhite from '../../public/img/logo-white.png';
import LogoIcon from '../../public/img/logo-icon.png';

// icon
import { BiMenuAltRight } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { FaBehance, FaDribbble, FaLinkedinIn, FaInstagram, FaGlobeAfrica, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {

  // local state
  const [showNavbar, setShowNavbar] = useState(false);

  // hide navbar when page change
  const handlePageChange = () => {
    setShowNavbar(false);
    scrollTo(0, 0);
  }

  return (
    <>
      <header className='bg-white shadow-sm fixed top-0 left-0 right-0 z-[1000]'>
        <div className="flex justify-between items-center">
          <div>
            <Link href='/'>
              <Image src={Logo} alt='logo' className='ps-6 pe-4 py-2' />
            </Link>
          </div>
          <div>
            <button className='bg-[#5C83FB] p-4' onClick={() => setShowNavbar(true)}>
              <BiMenuAltRight className='text-white w-8 h-8' />
            </button>
          </div>
        </div>
      </header>

      {/* navbar */}
      {
        showNavbar &&
        <div className='navbar-popup fixed top-0 bottom-0 left-0 right-0 z-[1001] overflow-y-auto overscroll-contain'>
          {/* top */}
          <div className='bg-blue-nav border-b-2 border-[#4A64B4]'>
            <div className="flex justify-between items-center">
              <div>
                <Link href='/'>
                  <Image src={LogoWhite} alt='logo' className='ps-6 pe-4 py-2' />
                </Link>
              </div>
              <div>
                <button className='bg-[#4A64B4] p-4' onClick={() => setShowNavbar(false)}>
                  <IoClose className='text-white w-8 h-8' />
                </button>
              </div>
            </div>
          </div>

          {/* main area */}
          <div className='flex justify-end'>
            <div className="w-full xl:w-2/3">
              <div className="bg-blue-nav min-h-[calc(100vh-66px)] p-4 lg:px-16 lg:py-14">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/4 lg:w-1/5 px-2">
                    <Image src={LogoIcon} alt='logo' className='mb-4 lg:mb-10' />
                    <div className="nav-vr-line h-24 border-l border-[#FFFFFF80] ms-4 mb-4 lg:mb-10"></div>
                    <ul>
                      <li>
                        <a href="#"><FaBehance className='text-white ms-2 mb-7 hover:text-[#FBBC05]' size={22} /></a>
                      </li>
                      <li>
                        <a href="#"><FaDribbble className='text-white ms-2 mb-7 hover:text-[#FBBC05]' size={22} /></a>
                      </li>
                      <li>
                        <a href="#"><FaInstagram className='text-white ms-2 mb-7 hover:text-[#FBBC05]' size={22} /></a>
                      </li>
                      <li>
                        <a href="#"><FaLinkedinIn className='text-white ms-2 mb-7 hover:text-[#FBBC05]' size={22} /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-3/4 lg:w-2/5 px-2">
                    <ul className='mt-4 lg:mt-14'>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>home</Link>
                      </li>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/about" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>about</Link>
                      </li>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/work" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>work</Link>
                      </li>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/case-study" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>case study</Link>
                      </li>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/blog" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>blog</Link>
                      </li>
                      <li className='mb-4 md:mb-8'>
                        <Link href="/team" className='text-white text-2xl md:text-4xl font-bold uppercase hover:text-[#FBBC05]' onClick={handlePageChange}>team</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-2/5 px-2 mt-6 lg:mt-0">
                    <ul>
                      <li className='flex items-center gap-4 mb-6'>
                        <FaGlobeAfrica className='text-[#FBBC05]' size={20} />
                        <a href="#" className='text-white font-medium'>www.beeodigital.co</a>
                      </li>
                      <li className='flex items-center gap-4 mb-6'>
                        <FaEnvelope className='text-[#FBBC05]' size={20} />
                        <a href="#" className='text-white font-medium'>hello@beeodigital.co</a>
                      </li>
                      <li className='flex items-center gap-4 mb-6'>
                        <FaPhone className='text-[#FBBC05]' size={20} />
                        <a href="#" className='text-white font-medium'>+8801679485677</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Header;