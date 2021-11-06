import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LocationAddress = () => {
  return (
    <div className='flex gap-6 lg:w-1/3 '>
      <div className='hidden lg:flex'>
        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} size={'2x'} />
      </div>
      <div className='flex flex-col items-center gap-6 lg:items-start'>
        <span className='font-semibold lg:font-bold'>OUR LOCATION</span>
        <span className='text-center lg:text-left text-fading-betis lg:text-lg'>
          Fakultas Ilmu Komputer Universitas Indonesia Kampus UI Depok, Pondok
          Cina, Kec. Beji, Kota Depok, Jawa Barat 16424
        </span>
      </div>
    </div>
  );
};

export default LocationAddress;
