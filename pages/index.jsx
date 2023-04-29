import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

// counterup
import CountUp from 'react-countup';

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

        <div className="max-w-6xl 2xl:max-w-[86rem] ms-auto px-2 md:px-0">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
              <h4 className='text-yellow font-volkhov text-4xl'>Recent Projects</h4>
            </div>
            <div className="w-full md:w-3/4 px-2 mb-4 md:mb-0">
              
              <Swiper
                  spaceBetween={20}
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

      {/* counter area start */}
      <section className='pt-40 pb-36 px-2'>
        <div className="max-w-6xl mx-auto">
          <h5 className="text-center text-[#DF6951] uppercase text-lg font-semibold mb-2">What sets us apart</h5>
          <h2 className="text-center font-volkhov text-4xl text-navy-light leading-[50px]">
            We bring a unique international perspective to <br />
            <span className='text-blue'>branding</span>, {' '}
            <span className='text-blue'>graphic</span> design, {' '}
            <span className='text-blue'>website development</span>, <br />
            and <span className='text-blue'>user experience </span>
            design projects.
          </h2>

          <div className="flex flex-wrap justify-center -mx-2 mt-20">
            <div className="w-full md:w-1/6 px-2">
              <h2 className='counter-number before:bg-[#B3A4FF] text-navy-dark font-volkhov text-5xl relative mb-2'>
                0<CountUp enableScrollSpy={true} end={3} />+
              </h2>
              <p className='text-navy-light font-medium'>years</p>
            </div>
            <div className="w-full md:w-1/6 px-2">
              <h2 className='counter-number before:bg-[#FFBE16] text-navy-dark font-volkhov text-5xl relative mb-2'>
              <CountUp enableScrollSpy={true} end={60} />+
              </h2>
              <p className='text-navy-light font-medium'>Projects</p>
            </div>
            <div className="w-full md:w-1/6 px-2">
              <h2 className='counter-number before:bg-[#9CD161] text-navy-dark font-volkhov text-5xl relative mb-2'>
                <CountUp enableScrollSpy={true} end={30} />+
              </h2>
              <p className='text-navy-light font-medium'>Clients</p>
            </div>
          </div>
        </div>
      </section>
      {/* counter area end */}

      {/* services start */}
      <section className='bg-[#131313] py-24'>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-2 mb-20">
            <div className="w-full md:w-1/2 px-4">
              <p className='services-title text-yellow text-lg ps-8 relative mb-4'>Services</p>
              <h3 className='font-volkhov font-normal text-white text-5xl leading-[60px]'>A Design Dedicated Digital Agency</h3>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <p className='text-white text-lg'>At our digital agency, we focus on delivering tailored solutions that are both effective and visually stunning. Our team of experts is dedicated to staying ahead of the curve with the latest trends and technologies, ensuring that your brand is always at the forefront of the digital world.</p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2">
              <div className="service-img relative z-10">
                <Image src={Service1} alt='service img' className='mb-10' />
              </div>
              <h4 className="text-white font-volkhov font-normal text-3xl mb-5">Branding </h4>
              <ul>
                <li className='text-white font-lg mb-2'>Brand Design</li>
                <li className='text-white font-lg mb-2'>Marketing Design</li>
                <li className='text-white font-lg mb-2'>Brand Guidelines</li>
                <li className='text-white font-lg mb-2'>Social Media Design</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="service-img relative z-10">
                <Image src={Service2} alt='service img' className='mb-10' />
              </div>
              <h4 className="text-white font-volkhov font-normal text-3xl mb-5">Design </h4>
              <ul>
                <li className='text-white font-lg mb-2'>Development</li>
                <li className='text-white font-lg mb-2'>Web Application Design</li>
                <li className='text-white font-lg mb-2'>Mobile Application Design</li>
                <li className='text-white font-lg mb-2'>UI/UX Design</li>
                <li className='text-white font-lg mb-2'>Design System</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="service-img relative z-10">
                <Image src={Service3} alt='service img' className='mb-10' />
              </div>
              <h4 className="text-white font-volkhov font-normal text-3xl mb-5">Development </h4>
              <ul>
                <li className='text-white font-lg mb-2'>Front End Development</li>
                <li className='text-white font-lg mb-2'>Web APP Development</li>
                <li className='text-white font-lg mb-2'>Website Design</li>
                <li className='text-white font-lg mb-2'>Wordpress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* services end */}

      {/* featured projects start */}
      <section className='py-24'>
        <div className="max-w-6xl mx-auto">
          <h2 className='font-volkhov font-normal text-6xl text-[#091B22] mb-16'>Featured projects</h2>
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
      {/* featured projects end */}

      {/* why choose start */}
      <section className='pb-24'>
        <div className="max-w-6xl mx-auto px-2">
          <div className='mb-4 lg:mb-10'>
            <h6 className="text-center text-blue font-medium text-lg mb-3">Our Solutions</h6>
            <h3 className="text-center font-volkhov font-bold text-[#0F172A] text-4xl">Why Choose Us</h3>
          </div>
          <div className='px-12 py-10 border border-[#E5EAF1] rounded-xl'>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 px-2">
                <div className='md:border-e border-[#E5EAF1] md:pe-4'>
                  <Image src={WCIocn1} alt='icon' className='mb-10' />
                  <h5 className='font-volkhov font-bold text-[#0F172A] text-2xl mb-2'>Great Experience</h5>
                  <p className='text-[#657790] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2">
                <div className='md:border-e border-[#E5EAF1] md:px-4'>
                  <Image src={WCIocn2} alt='icon' className='mb-10' />
                  <h5 className='font-volkhov font-bold text-[#0F172A] text-2xl mb-2'>Best Solutions</h5>
                  <p className='text-[#657790] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2">
                <div className='md:ps-4'>
                  <Image src={WCIocn3} alt='icon' className='mb-10' />
                  <h5 className='font-volkhov font-bold text-[#0F172A] text-2xl mb-2'>Efective Strategy</h5>
                  <p className='text-[#657790] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose end */}

      {/* testimonial start */}
      <section className='pb-24'>
        <div className="max-w-6xl mx-auto px-2">
          <div className='mb-4 lg:mb-14'>
            <h6 className="text-center text-blue font-medium text-lg mb-3">Testimonials</h6>
            <h3 className="text-center font-volkhov font-bold text-[#0F172A] text-4xl">Our happy clients say about us</h3>
          </div>
        </div>

        <div>

        </div>
        <div>

        </div>

        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-2">
              <p className='text-[#091B22] font-medium'>Feedback from our clients</p>
            </div>
            <div className="w-full md:w-3/5 px-2">
              <p className='text-[#091B22] text-2xl mb-5'>
                I had the pleasure of working with Beeo Digital on a web application project, and I can confidently say that their team exceeded my expectations. They were professional, attentive to detail, and delivered a design that perfectly captured the essence of my brand. The team's creativity and expertise shone through in every aspect of the project, from the initial concept to the final product. I'm thrilled with the end result, and I wouldn't hesitate to recommend Beeo Digital to anyone in need of exceptional UI design services.
              </p>
              <div className="flex items-center gap-4">
                <Image src={User} alt='user img' className='w-12 h-12 rounded-full' />
                <p className='text-[#091B22]'>Jenny Wilson, Founder - Muzica</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial end */}

    </>
  )
}
