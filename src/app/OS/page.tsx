 "use client";
  import shopp from "./shop";


 const myShop = [
    {
        id : 1,
        name : "CropTop",
        price : 8500,
        Qty : 30 ,
        Size : "Free",

    },
    {
        id : 2,
        name : "Style pant",
        price : 22500,
        Qty : 10,
        Size : "M",

    },
    {
        id : 3,
        name : "Brouse",
        price : 10500,
        Qty : 30,
        Size : "L",

    },
    {
        id : 4,
        name : "Jean Pant",
        price : 20500,
        Qty : 40,
        Size : "L",

    },
    {
        id : 5,
        name : "Tennis skirt",
        price : 8000,
        Qty : 100,
        Size : "M",


    },
 ];

 export default function shop() {



    return(
        <main className="w-screen h-screen flex justify-center items-center">
           <input className="bg-pink-200 shadow-lg border border-purple-300 w-[300px] px-3 py-2 rounded " 
           placeholder="search here"/>
          
    


        </main>
    )
 }