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
import VisualAs2 from '../../public/img/work-details-1/visual-as-2.jpg';
import VisualAs3 from '../../public/img/work-details-1/visual-as-3.jpg';
import VisualAs4 from '../../public/img/work-details-1/visual-as-4.jpg';
import VisualAs5 from '../../public/img/work-details-1/visual-as-5.jpg';
import Wireframe1 from '../../public/img/work-details-1/wireframe-1.jpg';
import Wireframe2 from '../../public/img/work-details-1/wireframe-2.jpg';

const WorkDetails = () => {
  return (
    <>
      <Meta title={"Work Details | Beeo Digital"} />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-20'>
        <div className="max-w-6xl mx-auto px-3">
          <p className='text-xl text-[#091B22] mb-2 md:mb-4'>Treva</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>Feel your experience <br /> with Treva</h1>
        </div>
      </section>
      {/* page heading area end */}

      {/* challenge start */}
      <section className='pb-10 md:pb-24 md:pt-4'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#6F7177] font-medium mb-4'>The challenge</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                We were entrusted with Praesent tristique dictum sodales. Praesent posuere magna ligula, et mollis metus condimentum nec. Mauris in mi rutrum, luctus nibh sit amet, semper sapien. Vivamus rhoncus commodo neque, dictum placerat lorem ornare quis. Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu rhoncus neque. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* challenge end */}

      {/* main img start */}
      <section className='pb-10 md:pb-24'>
        <Image src={ProjDetails} alt='project main img' className='w-full' />
      </section>
      {/* main img end */}

      {/* brand id area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2 mb-4 md:mb-16">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-3 md:mb-8">Brand identity</h2>
              <p className='text-[#091B22] text-xl md:text-xl md:leading-[2rem]'>
                Nunc non mi vulputate, vehicula nisi vel, gravida dolor. Mauris eu rhoncus neque. Nullam tempor tempor magna a ultricies. Sed leo eros, volutpat gravida ante at, vestibulum porttitor ante. In consectetur, purus a ultricies tempus, nisi dui commodo turpi.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <Image src={BrandId1} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Image src={BrandId2} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full px-2">
              <Image src={BrandId3} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Image src={BrandId4} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Image src={BrandId5} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
          </div>
        </div>
      </section>
      {/* brand id area end */}

      {/* wireframe area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2 mb-4 md:mb-16">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-3 md:mb-8">Wireframe</h2>
              <p className='text-[#091B22] text-xl md:text-xl md:leading-[2rem]'>
                In fermentum euismod interdum. Suspendisse potenti. Sed et sapien non lacus auctor laoreet bibendum ac risus. Aliquam gravida urna quis purus congue tincidunt. Mauris tincidunt ut ante et sagittis. Aliquam ac scelerisque ex. Curabitur feugiat pretium enim et feugiat. 
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2">
              <Image src={Wireframe1} alt='wireframe img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full px-2">
              <Image src={Wireframe2} alt='wireframe img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
          </div>
        </div>
      </section>
      {/* wireframe area end */}

      {/* visual aes area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2 mb-4 md:mb-16">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-3 md:mb-8">Visual aesthetics</h2>
              <p className='text-[#091B22] text-xl md:text-xl md:leading-[2rem]'>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nunc ante, vestibulum in tortor quis, aliquam semper lorem. Etiam pulvinar magna nunc, ac porta enim sollicitudin tempus.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2">
              <Image src={VisualAs1} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Image src={VisualAs2} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Image src={VisualAs3} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full px-2">
              <Image src={VisualAs4} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
            <div className="w-full px-2">
              <Image src={VisualAs5} alt='brand id img' className='w-full mb-4 hover:shadow-xl hover:-translate-y-2' />
            </div>
          </div>
        </div>
      </section>
      {/* visual aes area end */}

      {/* the result area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-3 md:mb-10">The results</h2>
              <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.2rem] mb-3 md:mb-10'>
                In fermentum euismod interdum. Suspendisse potenti. Sed et sapien non lacus auctor laoreet bibendum ac risus. Aliquam gravida urna quis purus congue tincidunt. Mauris tincidunt ut ante et sagittis. Aliquam ac scelerisque ex. Curabitur feugiat pretium enim et feugiat. Maecenas posuere auctor auctor.
              </p>
              <p className='mb-3 md:mb-12'>
                <a href="#" target='_blank' className='font-medium text-[#091B22] text-lg border-b border-[#E6E8E9] hover:border-gray-900 pb-2'>Visit Treva</a>
              </p>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-2/5 px-2">
                  <h2 className='text-[#091B22] font-medium text-3xl md:text-5xl mb-2'>$22.8m</h2>
                  <p className='text-[#091B22] text-lg'>Total raised in funding so far</p>
                </div>
                <div className="w-full md:w-2/5 px-2">
                  <h2 className='text-[#091B22] font-medium text-3xl md:text-5xl mb-2'>~1m</h2>
                  <p className='text-[#091B22] text-lg'>Daily users enjoing Treva products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* the result area end */}

      {/* testimonial start */}
      <section className='bg-[#091B22] py-10 md:py-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#FFFFFF99] font-medium mb-4'>Feedback from our clients</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-white text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                "I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services."
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
        <div className="max-w-6xl mx-auto px-3">
          <h2 className='font-volkhov font-normal text-3xl md:text-6xl text-[#091B22] mb-4 md:mb-14'>What next</h2>
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