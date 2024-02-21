import Link from 'next/link';
import React from 'react';
import Pagination from '../pagination/Pagination';
import {fetchStudents} from "@/lib/data"
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import Image from 'next/image';
import { User } from 'lucide-react';

const StudentsComponent = async  () => {

  
  const student = await fetchStudents();


  return (
    <div>
    <div className='bg-bgSoft mt-5 p-3 mb-3'>
      <div className='flex justify-between items-center'>
        <h3 className='text-sm opacity-45'>Liste des étudiants </h3>
        <Link href="/dashboard/students/add">
          <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm my-2 px-3 py-1 text-center mb-7'>Ajouter</button>
        </Link>
      </div>

      <table className="w-full text-start text-sm mb-6">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Adresse Mail</td>
            <td>Encadrant</td>
            <td>Groupe</td>
          </tr>
        </thead>
        <tbody>
          {Object.values(student).map((std:any) => (
            <tr key={std.name}>
              <td className='flex'>
                
              <div className='flex items-center'>
                <div className="rounded-full overflow-hidden mr-5 ">
                  {/* <Image src={
                    // std.img || 
                    "/user.jpg"} alt='std' width={30} height={30}  /> */}
                </div>
                {std.name}
              </div>

              </td>              
              <td>{std.email}</td>
              <td>{std.encadrant}</td>
              <td>{std.groupe}</td>
              <td className="mx-2 text-end">
                <Link href={`/dashboard/students/${student.id}`}>
                  <button className='mx-2 text-white bg-green-600 hover:bg-green-500 font-medium rounded-lg text-sm my-2 px-3 py-1 text-center' type="button"><BiEdit/></button>
                </Link>
                <button className='text-white bg-red-700 hover:bg-red-600 font-medium rounded-lg text-sm my-2 px-3 py-1 text-center' type="button"><BsTrash/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>   
    </div>  
  
  <Pagination/>   
  </div>
  );

}

export default StudentsComponent;
