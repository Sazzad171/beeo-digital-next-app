import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// head props
import Meta from '@/components/Meta';

// image import
import User from '../public/img/user.png';

export default function Home() {

  return (
    <>
      <Meta title={"About Us | Beeo Digital"} />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-20'>
        <div className="max-w-6xl mx-auto px-2">
          <p className='text-xl text-[#091B22] mb-2 md:mb-4'>About</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>A Creative Agency that loves to help Business</h1>
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



      {/* testimonial start */}
      <section className='pb-10 md:pb-24'>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#6F7177] font-medium mb-4'>Feedback from our clients</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <Swiper
                spaceBetween={20}
                speed={2000}
                pagination={true}
                slidesPerView={1}
                autoplay={{
                  delay: 2500
                }}
                modules={[Autoplay, Pagination]}
                style={{
                  '--swiper-pagination-color': '#000',
                  '--swiper-pagination-bottom': '-6px'
                }}
              >
                <SwiperSlide>
                  <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                    I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                    <p className='text-[#091B22]'>Jenny Wilson, Founder - Muzica</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                    I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                    <p className='text-[#091B22]'>Jenny Wilson, Founder - Muzica</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className='text-[#091B22] text-xl md:text-2xl md:leading-[2.5rem] mb-5'>
                    I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                    <p className='text-[#091B22]'>Jenny Wilson, Founder - Muzica</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial end */}

    </>
  )
}
