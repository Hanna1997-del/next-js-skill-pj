"use client";
import Image from 'next/image';
import { useState } from 'react';
import { clsx } from "clsx";

const transition = "transition-all  ease-in-out";
const list_style = "hover:text-green-800";

export default function tour() {
    const[menu,setMenu] = useState(false);

    const[book,setBook] = useState(false);


    return(
        <main className=" relative w-full h-screen">
              
            
            <div className="absolute inset-0 bg-[url('/images/thailand.webp')] bg-cover flex items-center w-full">
                {/* menu section start */}
            <div className=' absolute top-0 right-0 bg-white flex justify-end w-full cursor-pointer'>
                
                <img src="images/icons-menu.png" alt="menu" onClick={(event:any) =>setMenu(true)}/>
                <div className={clsx(
                    'w-[10%] h-[100vh] bg-white absolute top-0',
                    menu ? "visible" : "invisible"
                )}>
                   
                  <div className='flex justify-end '>
                  <img src="images/close.png" alt="close" onClick={(event:any)=> setMenu(false)} />
                  </div>
                    <ul className='flex flex-col items-center gap-5 cursor-pointer mt-5 font-bold text-lg '>
                        <li className={list_style}>Home</li>
                         <li className={list_style}>About</li>
                          <li className={list_style} >Flight</li>
                           <li className={list_style}>Tour</li>
                            <li className={list_style}>Contact us</li>
                    </ul>
                </div>
              </div>
              {/* menu section end */}
                   {/* Thailand discover start */}


                <div className='w-[50%] flex justify-center flex-col mt-10 '>
                    <h1 className='font-bold text-[6rem] ml-8 text-white'>Thailand Islands</h1>
                    <p className='text-md text-white text-[25px] ml-8'>Discover tropical beaches, magnificient palaces and anicient ruins in the Land of Smiles.</p>
                    <button className={clsx(
                        'px-2 py-2 bg-green-700 hover:bg-green-950 rounded text-white w-[20%] ml-8 mt-5',
                       
                    )}
                    onClick={(event:any) =>setBook(true)}>Book Here</button>

                    
                </div>

                {/* Thailand discover end */}


                 {/* Book Tour Section start */}
            
              <div className={clsx(
                'w-[20%] h-[60vh] ml-[10rem] flex  flex-col items-center bg-white mt-10 rounded ',
                transition,
                book ? "visible" : "invisible"
              )}>

                   <div className='flex justify-end '>
                  <img src="images/close.png" alt="close" onClick={(event:any)=>setBook(false)} />
                  </div>
                      <h3 className='font-bold text-xl mt-5'>Book This Tour</h3>
                     <h4 className='mt-8'>Select Your Date</h4>
                      <input type="datetime" className='border rounded border-black mt-2'
                      placeholder='22/7/2023' />
                      <h3 className='mt-5'>Travellers</h3>
                      <input className='border rounded border-black mt-2'
                      placeholder='1 ADULT' />
                      <h3 className='mt-5'>Price</h3>
                      <h2 className='font-bold text-xl mt-5'>$1290.00</h2>
                     <div className='w-full flex flex-col mt-[2.5rem]'>
                     <h2 className='font-bold text-xl  bg-green-500 '>BOOK NOW</h2>
                     </div>
                    </div>
             

                  {/* Book Tour Section End */}
            </div>
        </main>
    )
}