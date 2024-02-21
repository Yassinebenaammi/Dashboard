import Linechart from '@/app/ui/dashboard/LineChart/LineChart';
import Image from 'next/image';
import React from 'react';

type RootStackParamList = {
  id: number;
  teamLeader: string;
  numberOfMembers: number;
  place: string;
};

const student = [
  {
    id: 1,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
  {
    id: 2,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
  {
    id: 3,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
  {
    id: 4,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
  {
    id: 5,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
  {
    id: 6,
    name: "Yassine BENAAMMI",
    groupe: "E"
  },
]

const Page = () => {
  return (
    <div>
      <div className='bg-bgSoft px-20 py-9'>
      <div className='grid grid-cols-3 gap-4 content-center'>
        {student.map((std, index) => (
          <div key={index} className='flex items-center justify-center text-center'>
            <Image className='rounded-full' src={"/user.jpg"} alt='Image' width={50} height={50} />
            <div className='ml-3 text-sm'>
              <h1>{std.name}</h1>
            </div>
          </div>
        ))}
      </div>  
    </div>
      <div className='mt-3'>
          <Linechart/>
      </div>
    </div>
  );
};

export default Page;
