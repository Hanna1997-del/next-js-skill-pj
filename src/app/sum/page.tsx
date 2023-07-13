"use client"
import { useState } from "react"

 



export default function sum(){
    const [num1,setnum1] = useState(0);
    const [num2,setnum2] = useState(0);
   


    return(
        <main className="w-screen h-screen flex justify-around">
            
            <div className="mt-[10rem] flex flex-col gap-5">
            <h1>Sum Here</h1>
                <input className="bg-purple-100 shadow-lg border w-[200px] border-purple-400 px-3 py-2 rounded"
                placeholder="num1"
                onChange={(event:any) => setnum1(event.target.value)} />
                 <input className="bg-purple-100 shadow-lg border w-[200px] border-purple-400 px-3 py-2 rounded"
                placeholder="num2" 
                onChange={(event:any) => setnum2(event.target.value)}/>
                <h3><strong>Total:</strong>{+num1 + + num2}</h3>
            </div>

        </main>
    )
}