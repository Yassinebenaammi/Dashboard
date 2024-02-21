
const AddTeamComponent =  () => {


  return (
    <div className="bg-bgSoft">
    <div className="flex flex-col gap-2">
    <form action="">
      <div className="w-full flex">
      <input className="border-white border-opacity-40 rounded-md bg-primary w-1/2 m-4 p-6 " type="text" name="lname" placeholder="Nom de l'équipe" />
      <input className="border-none rounded-md bg-primary w-1/2 m-4 p-6"  type="text" name="fname" placeholder="Nom du chef d'équipe" />
      </div>
     <div className="w-full flex">
     <input className="border-none rounded-md bg-primary w-1/2 m-4 p-6"  type="email" name="email" placeholder="Adresse mail (chef d'equipe)" />
      <select  id="groupes" className="border-none rounded-md bg-primary w-1/2 m-4 p-6">
        <option>Groupe</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
      </select>
     </div>
     <div className="m-4">
      <button className="rounded-md w-full py-1 px-2 bg-green-600 ">Submit</button>
     </div>
    </form>
    </div>
  </div>
);
}

export default AddTeamComponent;
