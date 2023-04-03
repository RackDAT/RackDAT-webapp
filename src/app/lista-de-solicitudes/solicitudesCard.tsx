import React from 'react';

const Card = () => {
  return (
    <div className='w-11/12 bg-gray-200 h-48 rounded-lg grid grid-row-5 overflow-hidden'>
      <div className="h-full row-span-1 border-b border-gray-400 flex flex-row justify-between px-5">
        <div className='flex flex-row items-center justify-center space-x-3.5'>
          <p className='text-lg font-semibold'>Items</p>
          <p className='text-gray-500'>8 de diciembre de 2021</p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-3'>
          <div className='h-3.5 w-3.5 bg-green-600 rounded-full' />
          <p className='text-gray-600 text-lg font-medium'>Aprobado</p>
        </div>
      </div>
      <div className="h-full row-span-4">
      </div>
    </div>
  );
};

export default Card;