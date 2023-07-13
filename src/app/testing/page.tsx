"use client"

import { useState } from "react"


export default function Home() {
    const [color, setColor] = useState("black");

      const changeColor = () => {
        const newColor = color == "black" ? "blue" : "black";
        setColor(newColor);
      }
      return (
        <main className="flex items-center justify-center w-screen h-screen max-w-[unset]">
         <div className='flex flex-col items-center gap-5'>
            <h2 className='font-bold text-xl' style={{color:color}}>Hnin Thet Hmue</h2>
            <button className='bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 text-white uppercase font-bold text-sm' onClick={changeColor}>Change Color</button>
         </div>

        </main>
      )

    // const [color, setColor ] = useState("black");

    // const changeColor = () => {
    //     const newColor = color == "black" ? "blue" : "black" ;
    //     setColor(newColor);
    // }
    

    // return(
    //     <main className="flex justify-center items-center w-screen h-screen max-w-[unset]">
    //         <div className="flex flex-col items-center gap-5">
    //             <h2 className='font-bold text-xl' style={{color:color}}>Hnin Thet Hmue</h2>
    //             <button className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 text-white uppercase text-sm">Click Here</button>
    //         </div>
    //     </main>
    // )
}