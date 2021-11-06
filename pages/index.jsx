import React from 'react';

import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <section className='flex flex-col w-full h-screen gap-4 bg-betis'>
        <div className='flex flex-col items-center w-full h-full gap-8'>
          <div className='flex flex-col items-center'>
            <span className='text-xl font-bold leading-9 text-center text-red-betis'>
              Find Your Dream, <br /> Explore The Future.
            </span>
            <h1 className='font-bold text-5xl-betis text-brown-betis'>
              BETIS 2022
            </h1>
          </div>
          <button className='px-10 py-3 text-lg font-bold text-white rounded-sm bg-brown-betis'>
            LOG IN
          </button>
          <div className='relative flex justify-center w-full h-full'>
            <Image
              alt='hero image'
              src='/assets/child_in_log.svg'
              width={300}
              height={450}
              className='z-10'
            />
            <div className='absolute bottom-0 w-full h-20 bg-ground-betis'></div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='flex flex-col items-center w-full h-full gap-20 py-16 bg-silver-betis'>
          <span className='text-xl font-bold text-green-betis'>
            What Do They Say?
          </span>
          <div className='flex flex-col gap-4 p-8 text-white rounded w-80 h-80 bg-green-betis'>
            <div className='grid items-center grid-cols-3 gap-5'>
              <div className='col-span-1 '>
                <Image
                  alt='profile picture'
                  src='/assets/profile_picture.svg'
                  width={82}
                  height={82}
                />
              </div>
              <div className='flex flex-col col-span-2 bg-red'>
                <span className='font-semibold'>Yulita</span>
                <span>Peserta BETIS 2019</span>
              </div>
            </div>
            <div className='w-full text-justify'>
              <span className='text-sm'>
                Aku seneng banget bisa belajar di BETIS 2021. Selain dapat ilmu,
                kakak-kakak yang ngajar asik banget aku jadi paham materinya.
                Terus mentor aku juga baik banget! :D
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='flex flex-col gap-8 py-12 px-11'>
          <div className='flex flex-col items-center gap-2 text-xl font-bold text-green-betis'>
            <span>Special Thanks</span>
            <span>to Our Sponsor!</span>
          </div>
          <div className='flex items-center justify-center w-full h-56 bg-black-betis '>
            <Image
              alt='play'
              src='/assets/Youtube.svg'
              width={35}
              height={23}
            />
          </div>
        </div>
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
