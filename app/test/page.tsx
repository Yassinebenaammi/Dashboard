import React from 'react';

const page = () => {

    const handleForm = async (formData:any) => {
        "use server"

        const username = formData.get("username")
        console.log(username)
    }
  return (
    <div className='bg-bgSoft h-screen flex justify-center items-center '>
      <form action={handleForm}>
        <input type="text" name="username" placeholder='name' className='px-3 text-black' />
        <button className='m-4'>Click</button>
      </form>
    </div>
  );
}

export default page;
