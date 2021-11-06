import React from 'react';

import Image from 'next/image';
import HeroSection from '../app/components/Home/HeroSection';
import TestimonialSection from '../app/components/Home/TestimonialSection';

const Home = () => {
  return (
    <main>
      <section className='flex flex-col items-center justify-center w-full h-screen bg-betis'>
        <HeroSection />
      </section>
      <section className='w-full'>
        <TestimonialSection />
      </section>
      <section className='w-full lg:h-screen'>
        <SponsorshipSection />
      </section>
      <footer className='bg-silver-betis'>
        <div className='flex flex-col items-center w-full py-12 text-center gap-9'>
          <div className='flex flex-col items-center gap-6'>
            <span className='font-semibold '>FOLLOW US ON SOCIAL MEDIA</span>
            <div className='flex gap-6'>
              <a href='https://www.instagram.com/'>
                <Image
                  alt='instagram'
                  src='/assets/Instagram.svg'
                  width={25}
                  height={25}
                />
              </a>
              <a href='https://www.youtube.com/'>
                <Image
                  alt='instagram'
                  src='/assets/Youtube_black.svg'
                  width={36}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <span className='font-semibold '>EMAIL US AT</span>
            <span className='text-fading-betis'>betisfasilkom@gmail.com</span>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <span className='font-semibold '>OUR LOCATION</span>
            <span className='text-fading-betis'>
              Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok,
              Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
            </span>
          </div>
        </div>
        <div className='grid w-full grid-cols-2'>
          <div className='flex'>
            <Image
              alt='footer decoration'
              src='/assets/leaves.svg'
              width={36}
              height={36}
            />
          </div>
          <div className='flex justify-end'>
            <Image
              alt='footer decoration'
              src='/assets/leaves-flipped.svg'
              width={36}
              height={36}
            />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
