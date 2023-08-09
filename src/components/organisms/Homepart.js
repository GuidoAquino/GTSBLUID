import React from "react";
import Nav from "../atoms/Nav";


const Homepart = () => {
  return (
    <>
<section className='h-[100vh]'>
    <Nav/>
    <div className='h-full w-full absolute flex items-center justify-center flex-col my-auto text-center z-10'>
    <h1 className='text-[80px] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black'>Gold Sands Tours</h1>

      <h2 className='text-[40px] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black'>La aventura de viajar</h2>
    </div>
    <img className="w-full h-full object-cover" src="https://hips.hearstapps.com/hmg-prod/images/pink-beach-komodo-island-royalty-free-image-993367800-1561711107.jpg" alt="" />   




    </section>
    </>
  )
}

export default Homepart