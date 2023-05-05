import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Blog() {
  return (
    <>
      <Meta />

      <h2 className='text-center text-2xl mt-20'>Blog</h2>

    </>
  )
}
