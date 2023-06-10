import React from 'react';
import Image from 'next/image';

// img import
import Logo from '../../public/img/logo.png';

// icons
import { FaBehance, FaDribbble, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-4'>
      <div className="max-w-6xl mx-auto px-3">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-2/5 px-2 mb-4 lg:mb-0">
            <Image src={Logo} alt='logo' className='mb-4 w-20' />
            <p className='mb-3 lg:mb-8'>
              We bring a unique international perspective to branding, graphic design, website development, and user experience design projects.
            </p>
            <p className='text-[#0F172A]'>
              &copy; Copyright 2023, All Rights Reserved by Beeo Digital
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-4 lg:mb-0">
            <h6 className='font-semibold text-lg text-[#0F172A] mb-2 lg:mb-5'>Quick links</h6>
            <ul>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Home</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>About</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Services</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Testimonial</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Pricing</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 px-2 mb-4 lg:mb-0">
            <h6 className='font-semibold text-lg text-[#0F172A] mb-2 lg:mb-5'>Help</h6>
            <ul>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Privacy Policy</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Terms & Conditions</a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <h6 className='font-semibold text-lg text-[#0F172A] mb-2 lg:mb-5'>Social Platforms</h6>
            <p className='mb-3 lg:mb-6'>
              Join our social platforms so that you can up-to-date about our awesome products.
            </p>
            <ul className='flex flex-wrap items-center gap-3'>
              <li>
                <p className='mb-3'>Follow us on:</p>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>
                  <FaBehance />
                </a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>
                  <FaDribbble />
                </a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='mb-2'>
                <a href="#" className='hover:text-blue'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;