import Image from 'next/image';
import Link from 'next/link';

// slider
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const responsive = {
  0: {
    items: 2
  },
  768: {
    items: 2
  },
  1024: {
    items: 2
  }
}

// import images
import TextBottomImg from './assets/img/banner-text-line.png';

export default function Home() {
  return (
    <>
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
              {/* owl carousel */}
              <OwlCarousel responsive={responsive}>
                <div>
                  <h1>dsflsadfjl</h1>
                </div>
                <div>
                  <h1>xcvbxczb</h1>
                </div>
                <div>
                  <h1>terter</h1>
                </div>
              </OwlCarousel>

            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  )
}
