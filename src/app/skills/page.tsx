
"use client"
import Image from "next/image";
import { useState } from "react";



const skill_data = [
    {
        image: "/images/Designer.svg",
        title: "Design",
    },

    {
        image : "/images/Data.svg",
        title : "Data",
    },

    {
        image : "/images/Team.svg",
        title :  "Team" ,
    },

    {
        image : "/images/Teamwork.svg",
        title : "Teamwork",
    },

    {
        image : "/images/Online payment.svg",
        title : "Online Payment",
    },

    {
        image : "images/Online presention.svg",
        title : "Online Presentation",
    },

     
  
]

//react component 
export default function Home() {
    const [action,set_action] = useState({
        image : "/images/Designer.svg",
        title : "Design"
    });
  
    return (
        <main className="w-screen h-screen flex px-[10%] justify-between items-center">
            <div className="w-[50%] h-screen flex flex-col items-center">
                <h2 className="w-full font-bold text-2xl uppercase text-center mt-10"> skills</h2>
                <div className="w-[100%] box-border mt-10">
                    <div className="grid grid-cols-3 gap-5 w-full "> 

                        {/* {} => javascript function use */}
                        {/* {skill_data.map(item => (item.title))} */}
                         {
                            skill_data.map(item => (
                                <div
                                    className="w-full overflow-hidden cursor-pointer "
                                    key={item.title}
                                    onClick={(event: any) => set_action(item)}
                                >
                                    <Image className="rounded border border-slate-200 border-2 px-6 py-5 shadow-xl" src={item.image} alt="ts" width={600} height={600} />
                                    <h3 className="font-bold w-full text-lg text-center">{item.title}</h3>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
             
               <div className="border border-slate-200 border-2 px-6 py-5 shadow-xl">
               <div className="w-[50%] flex  flex-col items-center justify-center ">
                <div className="w-[9rem]  overflow-hidden " >
                    <Image src={action.image} alt="ts" width={600} height={600} />

                </div>
                <h3 className="font-bold w-full text-lg text-center"> {action.title}</h3>

            </div>
               </div>

        </main>

    
    )
}                        