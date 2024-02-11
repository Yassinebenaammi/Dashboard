import React from 'react';
import { cardItems } from '@/app/constants/constants';

const Card = () => {
  return (
    <div className="flex gap-3 w-full justify-center">
      {cardItems.map((card, index) => (
        <div key={index} className='text-center p-3 w-full rounded-md bg-bgSoft hover:bg-secondary mb-4'>
          <div className='flex items-center justify-center'>
            <div className='h-12 w-12 flex items-center text-3xl justify-center rounded-full shadow-md  shadow-blue-400'>
              {card.icon}
            </div>
          </div>
          <div>
            <div className='font-bold text-6xl mt-3'>
              {card.nombre}
            </div>
            <div className='text-lg text-textSoft mt-3'>
              {card.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
