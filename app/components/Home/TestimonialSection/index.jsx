import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { v4 as uuid } from 'uuid';
import TestimonialCard from './TestimonialCard';
import reviewers from './utils/reviewers';

const TestimonialSection = () => {
  return (
    <div className='flex flex-col items-center w-full h-full gap-20 py-16 bg-silver-betis'>
      <span className='text-xl font-bold text-green-betis lg:text-5xl'>
        What Do They Say?
      </span>
      <div className='justify-center hidden w-full gap-8 md:flex'>
        {reviewers.map(({ name, role, review, imageUrl }, index) => {
          const className =
            index % 2 === 0 ? 'text-green-betis' : 'text-white bg-green-betis';

          return (
            <TestimonialCard
              key={uuid()}
              name={name}
              role={role}
              imageUrl={imageUrl}
              review={review}
              className={className}
            />
          );
        })}
      </div>
      <Splide
        className='flex items-center justify-center w-full gap-8 py-6 md:hidden'
        options={{ start: 1 }}
      >
        {reviewers.map(({ name, role, review, imageUrl }, index) => {
          const className =
            index % 2 === 0 ? 'text-green-betis' : 'text-white bg-green-betis';

          return (
            <SplideSlide key={uuid()}>
              <TestimonialCard
                name={name}
                role={role}
                imageUrl={imageUrl}
                review={review}
                className={className}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default TestimonialSection;
