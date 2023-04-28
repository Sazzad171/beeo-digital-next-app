import React from 'react';

import Link from 'next/link';
// next img
import Image from 'next/image';

// images import
import Logo from '../../assets/img/logo.png';

// icon
import { BiMenuAltRight } from 'react-icons/bi';

export const Header = () => {
  return (
    <header className='bg-white shadow-sm fixed top-0 left-0 right-0 z-[1000]'>
      <div className="flex justify-between items-center">
        <div>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='ps-6 pe-4 py-2' />
          </Link>
        </div>
        <div>
          <button className='bg-[#5C83FB] p-4'>
            <BiMenuAltRight className='text-white w-8 h-8' />
          </button>
        </div>
      </div>
    </header>
  )
}
