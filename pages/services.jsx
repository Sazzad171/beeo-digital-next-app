import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// react icons
import { FaPlus } from 'react-icons/fa';

// image import
import CoreValues1 from '../public/img/core-values-1.png';
import CoreValues2 from '../public/img/core-values-2.png';
import CoreValues3 from '../public/img/core-values-3.png';
import CoreValues4 from '../public/img/core-values-4.png';
import ServiceWebsite from '../public/img/service-website.jpg';
import ServiceDesign from '../public/img/service-design.jpg';
import ServiceMobileApp from '../public/img/service-mobile-app.jpg';
import ServiceHire from '../public/img/services_hire.jpg';
import ServiceStrategy from '../public/img/service-strategy.jpg';
import ServiceWebDev from '../public/img/service-web-dev.jpg';

export default function Services() {

  return (
    <>
      <Meta title={"Our Services | Beeo Digital"} />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-16'>
        <div className="max-w-6xl mx-auto px-2">
          <p className='text-xl text-[#091B22] mb-2 md:mb-4'>Services</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>How we can help you <br /> with unique ideas</h1>
        </div>
      </section>
      {/* page heading area end */}

      {/* core values area start */}
      <section className='pb-8 md:pb-28'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-5/6 px-2">
              
              <div className="flex flex-wrap justify-between -mx-2">
                <div className="w-full md:w-2/5 px-2 mb-6 lg:mb-12 h-full">
                  <Image src={CoreValues1} alt='core values img' width={140} className='mb-4 md:mb-8' />
                  <h5 className='font-medium text-[#091B22] text-2xl mb-2 md:mb-4'>Communication</h5>
                  <p className='text-[#091B22] text-lg'>
                    We believe in open communication with our clients throughout the design process. We take the time to listen to our clients' needs and goals, and we work closely with them to ensure that their vision is brought to life.
                  </p>
                </div>
                <div className="w-full md:w-2/5 px-2 mb-6 lg:mb-12 h-full">
                  <Image src={CoreValues2} alt='core values img' width={140} className='mb-4 md:mb-8' />
                  <h5 className='font-medium text-[#091B22] text-2xl mb-2 md:mb-4'>Creativity</h5>
                  <p className='text-[#091B22] text-lg'>
                    We believe that creativity is at the heart of great design. Our team is passionate about finding innovative and unique design solutions that help our clients stand out from the crowd.
                  </p>
                </div>
                <div className="w-full md:w-2/5 px-2 mb-6 lg:mb-12 h-full">
                  <Image src={CoreValues3} alt='core values img' width={140} className='mb-4 md:mb-8' />
                  <h5 className='font-medium text-[#091B22] text-2xl mb-2 md:mb-4'>Digital Expertise</h5>
                  <p className='text-[#091B22] text-lg'>
                    Our team has extensive experience in digital design, including website design, social media graphics, and digital marketing campaigns. We stay up-to-date with the latest design software and technologies, enabling us to deliver cutting-edge designs that help our clients achieve their goals.
                  </p>
                </div>
                <div className="w-full md:w-2/5 px-2 mb-6 lg:mb-12 h-full">
                  <Image src={CoreValues4} alt='core values img' width={140} className='mb-4 md:mb-8' />
                  <h5 className='font-medium text-[#091B22] text-2xl mb-2 md:mb-4'>Attention to Detail</h5>
                  <p className='text-[#091B22] text-lg'>
                    Our team takes great care in ensuring that every element of a design is thoughtfully considered, from the placement of images to the choice of font. We understand that even the smallest details can have a big impact on the overall look and feel of a design.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* core values area end */}

      {/* history start */}
      <section className='pb-10 md:pb-20'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#6F7177] font-medium mb-4'>What we do</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                At Beeo Digital, we're a full-service digital agency that specializes in delivering exceptional design solutions to our clients. We offer a range of services that help our clients succeed in today's digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* history end */}

      {/* service website start */}
      <section className="pb-10 md:pb-24">
        <div className="max-w-6xl mx-auto px-2">
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22] text-center mb-6 lg:mb-16'>Websites and <br /> platforms</h1>

          <div className="flex flex-wrap items-center justify-between -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <Image src={ServiceWebsite} alt='service img' className='w-full' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="lg:ps-24">
                <p className='text-[#6F7177] text-lg mb-2 md:mb-5'>Websites and platforms</p>
                <p className='text-xl text-[#091B22] mb-4 md:mb-8'>
                  Our team of experts has extensive experience in designing and developing web applications for a range of industries and use cases. We take a user-centered approach to design, ensuring that every aspect of the application is tailored to the needs of the target audience.
                </p>
                <ul>
                  <li className='flex items-center gap-4 mb-2 md:mb-3'>
                    <FaPlus />
                    <p className='text-lg text-[#091B22]'>Website & Web Application Design</p>
                  </li>
                  <li className='flex items-center gap-4 mb-2 md:mb-3'>
                    <FaPlus />
                    <p className='text-lg text-[#091B22]'>Front End Development</p>
                  </li>
                  <li className='flex items-center gap-4 mb-2 md:mb-3'>
                    <FaPlus />
                    <p className='text-lg text-[#091B22]'>Wordpress Website</p>
                  </li>
                </ul>
                <p className='mt-4 md:mt-8'><a href="#" className='border border-[#E6E8E9] rounded-3xl font-medium text-xl text-[#091B22] px-8 py-3'>Read more</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service website end */}


    </>
  )
}
