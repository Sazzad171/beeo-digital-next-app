import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// counterup
import CountUp from 'react-countup';

// head props
import Meta from '@/components/Meta';

// image import
import AboutSlider1 from '../public/img/about-slr-1.jpg';
import AboutSlider2 from '../public/img/about-slr-2.jpg';
import AboutSlider3 from '../public/img/about-slr-3.jpg';
import User from '../public/img/user.png';
import CoreValues1 from '../public/img/core-values-1.png';
import CoreValues2 from '../public/img/core-values-2.png';
import CoreValues3 from '../public/img/core-values-3.png';
import CoreValues4 from '../public/img/core-values-4.png';
import ComLogo1 from '../public/img/com-logo-1.png';
import ComLogo2 from '../public/img/com-logo-2.png';
import ComLogo3 from '../public/img/com-logo-3.png';
import ComLogo4 from '../public/img/com-logo-4.png';


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
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#6F7177] font-medium mb-4'>Our story</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-[#091B22] text-lg md:text-2xl md:leading-[2.5rem] mb-5'>
                Beeo Digital was founded with a vision to help businesses harness the power of digital technology to achieve their goals. Over the past 3 years, we have grown into a team of 10 talented and dedicated professionals who are passionate about creating innovative digital solutions for our clients. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* history end */}

      {/* counter area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 lg:w-1/4 px-2 mb-4 lg:mb-0">
              <h2 className='text-[#091B22] font-volkhov text-4xl lg:text-6xl mb-2 md:mb-4'>
                <CountUp enableScrollSpy={true} end={3} />+
              </h2>
              <p className='text-[#091B22] text-lg'>Years of experience</p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4 lg:mb-0">
              <h2 className='text-[#091B22] font-volkhov text-4xl lg:text-6xl mb-2 md:mb-4'>
                <CountUp enableScrollSpy={true} end={30} />+
              </h2>
              <p className='text-[#091B22] text-lg'>Satisfied clients</p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4 lg:mb-0">
              <h2 className='text-[#091B22] font-volkhov text-4xl lg:text-6xl mb-2 md:mb-4'>
                <CountUp enableScrollSpy={true} end={60} />+
              </h2>
              <p className='text-[#091B22] text-lg'>Projects delivered</p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-4 lg:mb-0">
              <h2 className='text-[#091B22] font-volkhov text-4xl lg:text-6xl mb-2 md:mb-4'>
                <CountUp enableScrollSpy={true} end={6} />+
              </h2>
              <p className='text-[#091B22] text-lg'>Projects delivered</p>
            </div>
          </div>
        </div>
      </section>
      {/* counter area end */}

      {/* about slider start */}
      <section className='pb-8 md:pb-32'>
        <div className="w-full">
          <Swiper
            spaceBetween={24}
            slidesPerView={3.5}
            grabCursor={true}
            autoplay={{
              delay: 2500
            }}
            className={'about-swiper'}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400:{
                slidesPerView:2.5,
              },
              865:{
                slidesPerView:3.5
              },
              1500:{
                slidesPerView:4.5
              }
            }}
          >
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider1} alt='project img' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider2} alt='project img' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider3} alt='project img' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider1} alt='project img' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider2} alt='project img' />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image src={AboutSlider3} alt='project img' />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* about slider end */}

      {/* build grow area start */}
      <section className='pb-8 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-4/5 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-4 md:mb-8">Build grow & manage your digital identity</h2>
              <p className='text-[#091B22] text-lg md:text-2xl md:leading-[2.5rem] mb-5'>
                At Beeo Digital, we believe that a strong digital identity is essential for businesses to succeed in today's digital landscape. Our tagline, "build, grow, and manage your digital identity," reflects our commitment to helping our clients establish and maintain a strong online presence. We offer a range of services that help businesses build their digital identity, including web design, social media marketing, and branding. Our team of experts works closely with clients to create a strategy that aligns with their business goals and engages their target audience. We also provide ongoing support to help businesses grow and manage their digital identity, ensuring that they stay ahead of the competition and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* build grow area end */}

      {/* core values area start */}
      <section className='pb-8 md:pb-28'>
        <div className="max-w-6xl mx-auto px-3">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-5/6 px-2">
              <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-4 md:mb-14">Core values that define our success</h2>
              
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

      {/* we work with area start */}
      <section className='pb-8 md:pb-14'>
        <div className="max-w-6xl mx-auto px-3">
          <h2 className="font-volkhov text-4xl lg:text-6xl lg:leading-[74px] text-[#091B22] mb-4 md:mb-20">We work with people from <br /> all over the world</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo1} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo2} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo3} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo4} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo3} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo4} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo1} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo2} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo2} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo3} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo1} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
            <div className="w-1/2 lg:w-1/4 px-2 mb-6 lg:mb-24">
              <p>
                <Image src={ComLogo4} alt='company logo' className='mx-auto hover:scale-90 hover:cursor-pointer' />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* we work with area end */}

      {/* testimonial start */}
      <section className='pb-10 md:pb-24'>
        <div className="max-w-6xl mx-auto px-3">
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
                  <p className='text-[#091B22] text-lg md:text-2xl md:leading-[2.5rem] mb-5'>
                    I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                    <p className='text-[#091B22]'>Jenny Wilson, Founder - Muzica</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <p className='text-[#091B22] text-lg md:text-2xl md:leading-[2.5rem] mb-5'>
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
