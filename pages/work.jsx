import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// counterup
import CountUp from 'react-countup';

// icons
import { CgArrowLongRight } from 'react-icons/cg';

// import images
import TextBottomImg from '../public/img/banner-text-line.png';
import RPImg1 from '../public/img/rp-1.jpg';
import RPImg2 from '../public/img/rp-2.jpg';
import Service1 from '../public/img/branding.png';
import Service2 from '../public/img/design.png';
import Service3 from '../public/img/development.png';
import FP1 from '../public/img/fp-1.jpg';
import FP2 from '../public/img/fp-2.jpg';
import FP3 from '../public/img/fp-3.jpg';
import FP4 from '../public/img/fp-4.jpg';
import WCIocn1 from '../public/img/why-choose-icon-1.png';
import WCIocn2 from '../public/img/why-choose-icon-2.png';
import WCIocn3 from '../public/img/why-choose-icon-3.png';
import User from '../public/img/user.png';

export default function Home() {
  return (
    <>
      <Meta />

      {/* featured projects start */}
      <section className='mt-20 pb-10 md:pb-24'>
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
            <div className="w-full md:w-2/3 ps-2 pe-2 lg:pe-7 mb-4 lg:mb-10">
              <a href="#">
                <Image src={FP3} alt='featured projects' className='mb-5' />
                <p className='text-lg'>
                  <b>Creativa</b> - Phasellus eu lectus venenatis convallis sapien sit amet
                </p>
              </a>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 lg:mb-10">
              <a href="#">
                <Image src={FP4} alt='featured projects' className='mb-5' />
                <p className='text-lg'>
                  <b>Crisp</b> - Tellus, in consequat enim hasellus eu lectus venenatis
                </p>
              </a>
            </div>
          </div>
          <p className="text-center">
            <a href="#" className='py-2 px-8 font-medium text-lg text-[#091B22] rounded-full inline-block border border-[#E6E8E9] hover:bg-black hover:text-white'>View all projects</a>
          </p>
        </div>
      </section>
      {/* featured projects end */}\

    </>
  )
}
