import React from 'react';

import Image from 'next/image';

// head props
import Meta from '@/components/Meta';

// img import
import ProjDetails from '../../public/img/work-details-1/proj-details.jpg';
import User from '../../public/img/user.png';
import FP1 from '../../public/img/fp-1.jpg';
import FP2 from '../../public/img/fp-2.jpg';
import BrandId1 from '../../public/img/work-details-1/brand-id-1.jpg';
import BrandId2 from '../../public/img/work-details-1/brand-id-2.jpg';
import BrandId3 from '../../public/img/work-details-1/brand-id-3.jpg';
import BrandId4 from '../../public/img/work-details-1/brand-id-4.jpg';
import BrandId5 from '../../public/img/work-details-1/brand-id-5.jpg';
import VisualAs1 from '../../public/img/work-details-1/visual-as-1.jpg';
import VisualAs2 from '../../public/img/work-details-1/brand-id-2.jpg';
import VisualAs3 from '../../public/img/work-details-1/brand-id-3.jpg';
import VisualAs4 from '../../public/img/work-details-1/brand-id-4.jpg';
import VisualAs5 from '../../public/img/work-details-1/brand-id-5.jpg';
import Wireframe1 from '../../public/img/work-details-1/wireframe-1.jpg';
import Wireframe2 from '../../public/img/work-details-1/wireframe-2.jpg';

const WorkDetails = () => {
  return (
    <>
      <Meta title={"Work Details | Beeo Digital"} />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-20'>
        <div className="max-w-6xl mx-auto px-2">
          <p className='text-xl text-[#091B22] mb-2 md:mb-4'>Work</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>Our projects to show you <br /> what's up</h1>
        </div>
      </section>
      {/* page heading area end */}

      {/* history start */}
      <section className='pb-10 md:pb-24 md:pt-4'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#6F7177] font-medium mb-4'>Our story</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                Beeo Digital was founded with a vision to help businesses harness the power of digital technology to achieve their goals. Over the past 3 years, we have grown into a team of 10 talented and dedicated professionals who are passionate about creating innovative digital solutions for our clients. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* history end */}

      {/* main img start */}
      <section>
        <Image src={ProjDetails} alt='project main img' className='w-full' />
      </section>
      {/* main img end */}

      {/* brand id area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-4 md:mb-8">Build grow & manage your digital identity</h2>
              <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                At Beeo Digital, we believe that a strong digital identity is essential for businesses to succeed in today's digital landscape. Our tagline, "build, grow, and manage your digital identity," reflects our commitment to helping our clients establish and maintain a strong online presence. We offer a range of services that help businesses build their digital identity, including web design, social media marketing, and branding. Our team of experts works closely with clients to create a strategy that aligns with their business goals and engages their target audience. We also provide ongoing support to help businesses grow and manage their digital identity, ensuring that they stay ahead of the competition and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* brand id area end */}

      {/* testimonial start */}
      <section className='bg-[#091B22] pb-10 md:pb-24'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#FFFFFF99] font-medium mb-4'>Feedback from our clients</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-white text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
              </p>
              <div className="flex items-center gap-4">
                <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                <p className='text-white'>Jenny Wilson, Founder - Muzica</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial end */}

      {/* what next start */}
      <section className='py-10 md:py-24'>
        <div className="max-w-6xl mx-auto px-2">
          <h2 className='font-volkhov font-normal text-3xl md:text-6xl text-[#091B22] mb-4 md:mb-16'>Featured projects</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/3 ps-2 pe-2 lg:pe-7 mb-4 lg:mb-10">
              <a href="#">
                <Image src={FP1} alt='featured projects' className='mb-5' />
                <p className='text-lg'>
                  <b>Treva</b> - Feel your experience with Treva
                </p>
              </a>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 lg:mb-10">
              <a href="#">
                <Image src={FP2} alt='featured projects' className='mb-5' />
                <p className='text-lg'>
                  <b>Radiona</b> - Etiam pulvinar tortor id blandit for the space
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* what next end */}

    </>
  )
}

export default WorkDetails