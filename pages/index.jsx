import React from 'react';

import HeroSection from '../app/components/Home/HeroSection';
import TestimonialSection from '../app/components/Home/TestimonialSection';
import SponsorshipSection from '../app/components/Home/SponsorshipSection';

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
    </main>
  );
};

export default Home;
