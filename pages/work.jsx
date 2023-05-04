import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

// head props
import Meta from '@/components/Meta';

// get static data
import Projects from '../data/ProjectsList';

export default function Home() {

  // local state
  const [projects, setProjects] = useState(Projects);

  // filter projects
  const filterProject = (projCat) => {
    if ( projCat === "" ) {
      setProjects(Projects);
    } else {
      const updateItems = Projects.filter((item) => {
        return item.category === projCat
      });
      setProjects(updateItems);
    }
  }

  return (
    <>
      <Meta title={"Work | Beeo Digital"} />

      {/* page heading area start */}
      <section className='pt-20 md:pt-[140px] pb-10 md:pb-20'>
        <div className="max-w-6xl mx-auto px-2">
          <p className='text-xl text-[#091B22] mb-2 md:mb-4'>Work</p>
          <h1 className='font-volkhov text-5xl lg:text-7xl lg:leading-[90px] text-[#091B22]'>Our projects to show you <br /> what's up</h1>
        </div>
      </section>
      {/* page heading area end */}

      {/* project list start */}
      <section className=''>
        <div className="max-w-6xl mx-auto px-2">
          {/* filter links */}
          <ul className='filter-projects flex gap-4 mb-4 md:mb-7'>
            <li>
              <button onClick={() => filterProject("")} className='font-medium text-lg text-[#6F7177] pb-1'>All Projects</button>
            </li>
            <li>
              <button onClick={() => filterProject("Website")} className='font-medium text-lg text-[#6F7177] pb-1'>Websites</button>
            </li>
            <li>
              <button onClick={() => filterProject("Application")} className='font-medium text-lg text-[#6F7177]'>Applications</button>
            </li>
            <li>
              <button onClick={() => filterProject("Branding")} className='font-medium text-lg text-[#6F7177] pb-1'>Branding</button>
            </li>
            <li>
              <button onClick={() => filterProject("UI/UX")} className='font-medium text-lg text-[#6F7177] pb-1'>UI/UX</button>
            </li>
          </ul>

          <div className="flex flex-wrap -mx-2">

            {
              projects.map((item, i) => {
                return i % 2 === 0 ? (
                  <div className="w-full md:w-2/3 ps-2 pe-2 lg:pe-7 mb-4 lg:mb-10" key={item.id}>
                    <Link href="#">
                      <Image src={item.image} alt='projects' className='mb-5 hover:shadow-lg hover:shadow-gray-500' />
                      <p className='text-lg'>
                        <b>Treva</b> - Feel your experience with Treva
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full md:w-1/3 px-2 mb-4 lg:mb-10" key={item.id}>
                    <Link href="#">
                      <Image src={item.image} alt='projects' className='mb-5 hover:shadow-lg hover:shadow-gray-500' />
                      <p className='text-lg'>
                        <b>Radiona</b> - Etiam pulvinar tortor id blandit for the space
                      </p>
                    </Link>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
      {/* project list end */}

    </>
  )
}