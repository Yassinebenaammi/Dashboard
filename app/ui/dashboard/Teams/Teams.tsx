import { fetchTeams } from '@/lib/data';
import Link from 'next/link';
import React from 'react';


const TeamsComponents = async () => {
  
  const teamData = await fetchTeams();

  return (

    <div className='bg-bgSoft p-3'>
      <div className='flex justify-between'>
      <h1 className='text-white opacity-50 mb-4 '>Details des équipes</h1>
      <Link href="/dashboard/teams/add">
          <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm my-2 px-3 py-1 text-center mb-7'>Ajouter</button>
      </Link>      
      </div>
      <table className=" w-full text-center">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Chef d'equipe</th>
            <th>Groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((team:any) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.leader}</td>
              <td>{team.groupe}</td>
              <td className="mx-2 text-sm">
              <Link href={`/dashboard/teams/${team.id}`}>
                <button className=' data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-2 px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"'>View</button>
              </Link>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>  
  );
}

export default TeamsComponents;
