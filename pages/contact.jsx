import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// icons
import { FaRegEnvelope, FaPhoneAlt, FaSkype, FaDribbble, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// img import
import Person from '../public/img/contact-person.png';

export default function Home() {
  return (
    <>
      <Meta title="Contact | Beeo Digital" />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-32'>
        <div className="max-w-6xl mx-auto px-3">
          <p className='text-xl text-[#091B22] mb-3 md:mb-4'>Contact</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>
            <Image src={Person} alt='person img' className='inline w-14 h-14 rounded-full -mt-[14px] me-8' />
            I can't wait to <br /> hear your ideas
          </h1>
        </div>
      </section>
      {/* page heading area end */}

      {/* contact form area start */}
      <section className='pb-4 md:pb-10'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-3/5 px-2 mb-4 md:mb-0">
              <form action="" className='md:pe-10'>
                <div className='mb-6'>
                  <label htmlFor="name" className='block text-[#091B22] text-xl mb-3'>
                    <span className='text-[#A5A7AE] text-base me-4'>01</span> What’s your name?
                  </label>
                  <input type="text" className='block text-lg ps-4 md:ps-8 pb-4 md:pb-6 pe-4 placeholder:text-[#A5A7AE] w-full border-b border-[#E6E8E9]' 
                    id='name' placeholder='John Doe *' />
                </div>
                <div className='mb-6'>
                  <label htmlFor="mail" className='block text-[#091B22] text-xl mb-3'>
                    <span className='text-[#A5A7AE] text-base me-4'>02</span> What’s your email address?
                  </label>
                  <input type="text" className='block text-lg ps-4 md:ps-8 pb-4 md:pb-6 pe-4 placeholder:text-[#A5A7AE] w-full border-b border-[#E6E8E9]' id='mail' placeholder='john@doe.com *' />
                </div>
                <div className='mb-6'>
                  <label htmlFor="organization" className='block text-[#091B22] text-xl mb-3'>
                    <span className='text-[#A5A7AE] text-base me-4'>03</span> What's the name of your organization?
                  </label>
                  <input type="text" className='block text-lg ps-4 md:ps-8 pb-4 md:pb-6 pe-4 placeholder:text-[#A5A7AE] w-full border-b border-[#E6E8E9]' id='organization' placeholder='John & Doe ®' />
                </div>
                <div className='mb-6'>
                  <label htmlFor="service" className='block text-[#091B22] text-xl mb-3'>
                    <span className='text-[#A5A7AE] text-base me-4'>04</span> What services are you looking for?
                  </label>
                  <input type="text" className='block text-lg ps-4 md:ps-8 pb-4 md:pb-6 pe-4 placeholder:text-[#A5A7AE] w-full border-b border-[#E6E8E9]' id='service' placeholder='Website design, Mobile app design...' />
                </div>
                <div className='mb-6'>
                  <label htmlFor="message" className='block text-[#091B22] text-xl mb-3'>
                    <span className='text-[#A5A7AE] text-base me-4'>05</span> Your message
                  </label>
                  <textarea name="" className='block text-lg ps-4 md:ps-8 pb-4 md:pb-6 pe-4 placeholder:text-[#A5A7AE] w-full border-b border-[#E6E8E9]' id="message" rows="3" placeholder='Hello Jessi, can you help me with ... *'></textarea>
                </div>
                <p className='text-right mt-6 md:mt-14'>
                  <button className='font-medium text-white text-center w-24 h-24 bg-[#F11036] rounded-full'>Send it!</button>
                </p>
              </form>
            </div>
            <div className="w-full md:w-1/5 px-2">
              <div className='mb-4 md:mb-8'>
                <h6 className='font-semibold text-[#6F7177] mb-4'>Contact us</h6>
                <ul>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaRegEnvelope />
                      hello@beeodigital.co
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaPhoneAlt />
                      +88015677444333
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaSkype />
                      beeodigital
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className='font-semibold text-[#6F7177] mb-4'>Socials</h6>
                <ul>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaDribbble />
                      Dribbble
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaLinkedinIn />
                      LinkedIn
                    </a>
                  </li>
                  <li className='mb-3'>
                    <a href="#" className='flex items-center gap-3 hover:text-blue'>
                      <FaInstagram />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form area end */}
    </>
  )
}
