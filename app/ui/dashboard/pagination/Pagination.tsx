import React from 'react';

const Pagination = () => {
  return (
    <div className='flex justify-between '>
      <button className='bg-white text-black text-sm px-3 py-1 rounded-md'>Précédent</button>
      <button className='bg-white text-black text-sm px-3 py-1 rounded-md'>Suivant</button>
    </div>
  );
}

export default Pagination;
