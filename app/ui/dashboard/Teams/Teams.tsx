import React from 'react';

const TeamsComponents = () => {
  
  const teamData = [
    {
      id: 1,
      teamName: 'Sbo3a',
      teamLeader: '1961',
      projectName: 'Smya d projet',
      numberOfMembers: 8,
    },
    {
      id: 1,
      teamName: 'Sbo3a',
      teamLeader: '1961',
      projectName: 'Smya d projet',
      numberOfMembers: 8,
    },
    {
      id: 1,
      teamName: 'Sbo3a',
      teamLeader: '1961',
      projectName: 'Smya d projet',
      numberOfMembers: 8,
    },
    {
      id: 1,
      teamName: 'Sbo3a',
      teamLeader: '1961',
      projectName: 'Smya d projet',
      numberOfMembers: 8,
    },
    {
      id: 1,
      teamName: 'Sbo3a',
      teamLeader: '1961',
      projectName: 'Smya d projet',
      numberOfMembers: 8,
    },
    // 
  ];
  return (

    <div className='bg-bgSoft p-3'>
      <h1 className='text-white opacity-50 mb-4'>Details des équipes</h1>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom d'équipe</th>
            <th>Chef d'équipe</th>
            <th>Nom du projet</th>
            <th>Nombre de membres</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((team) => (
            <tr className='m-3'  key={team.id}>
              <td>{team.id}</td>
              <td>{team.teamName}</td>
              <td>{team.teamLeader}</td>
              <td>{team.projectName}</td>
              <td>{team.numberOfMembers}</td>
              <td className="mx-2 text-sm">
                <button className='bg-green-700 mx-1 py-1 px-2 hover:bg-green-800 rounded-lg'>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
  );
}

export default TeamsComponents;
