"use client"


export default function home() {

    const sectionStyle = 'w-full min-h-screen bg-blue-500 text-white flex flex-col items-center justify-center '
    const linkIconStyles = "text-5xl hover:text-blue-500 cursor-pointer"
    return (<main className='w-full min-h-screen'>
        <section className='w-full min-h-screen flex justify-center items-center'>
            <div className='w-max h-max flex gap-5 items-center'>
                <div className='w-[5rem] h-[5rem] bg-slate-600 rounded-full '></div>
                <div className='flex flex-col gap-2 '>
                    <h3 className='font-bold text-lg text-black'>Hnin Thet Khine</h3>
                    <h5 className='font-bold text-sm'>React Developer</h5>
                </div>
            </div>
        </section>
        <section className={sectionStyle}>
            <h3 className='font-bold text-2xl mb-5'>About Us</h3>
            <p className='w-[50%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sit sapiente commodi quo quia voluptatum perspiciatis quaerat! Quod possimus cumque harum iusto quasi, fuga est doloremque itaque totam ratione repellendus sint ad quae hic iure illum praesentium ab sed voluptatem quisquam. Quod voluptate autem facilis aperiam at, eveniet deleniti possimus.</p>
        </section>
        <section className='w-full min-h-screen flex justify-center items-center flex-col gap-5'>
            <h3 className='font-bold text-2xl'>Find.....</h3>
            <ul className='w-max h-max flex gap-5 '>
                <li className={ linkIconStyles}> </li>
                <li className={ linkIconStyles}></li>
                <li className={ linkIconStyles}> </li>
               
               

            </ul>
       
        </section>
    </main>)
}