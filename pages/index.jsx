import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

// import images
import TextBottomImg from '../public/img/banner-text-line.png';
import RPImg1 from '../public/img/rp-1.jpg';
import RPImg2 from '../public/img/rp-2.jpg';

export default function Home() {
  return (
    <>
      <Meta />

      {/* banner start */}
      <section className='bg-[#F3F7F5] pt-[160px]'>
        <div className='max-w-4xl mx-auto mb-20'>
          <h1 className='text-7xl font-volkhov text-center text-navy-dark mb-4'>
            Where <br /> your {' '}
            <span className="relative z-10">
              imaginations
              <Image src={TextBottomImg} alt='line img' className='absolute left-0 bottom-4 -z-10' />
            </span> 
            <br /> meet reality
          </h1>
          <p className='text-center text-navy-light mb-8'>Unleashing the Power of Imagination: Crafting Bold and Innovative Designs for Your Visionary Brand.</p>
          <p className="text-center">
            <Link href='/' className='bg-[#5C83FB] py-4 px-9 text-white font-medium text-xl rounded-full inline-block
              hover:bg-slate-900'>Get Started</Link>
          </p>
        </div>

        <div className="max-w-6xl ms-auto px-2 md:px-0">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
              <h4 className='text-yellow font-volkhov text-4xl'>Recent Projects</h4>
            </div>
            <div className="w-full md:w-3/4 px-2 mb-4 md:mb-0">
              
              <Swiper
                  spaceBetween={32}
                  slidesPerView={2.5}
                  autoplay={{
                    delay: 2500
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    400:{
                      slidesPerView:1.5,
                    },
                    865:{
                      slidesPerView:2.5
                    }
                  }}
                >
                  <SwiperSlide>
                    <a href="#">
                      <Image src={RPImg1} alt='project img' />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#">
                      <Image src={RPImg2} alt='project img' />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#">
                      <Image src={RPImg1} alt='project img' />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#">
                      <Image src={RPImg2} alt='project img' />
                    </a>
                  </SwiperSlide>
                </Swiper>

            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  )
}
