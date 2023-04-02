import Image from 'next/image'
import { Poppins } from 'next/font/google'
import logo from '../public/knowitlogo.png'


export default function Home() {

  return (
    <main className='bg-slate-600 min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-12 h-full'>
        <Image
          src={logo}
          alt='Know It Logo'
          width={400}
          height={400}
          className='mb-10'
        />
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>Search for any topic</h1>
        <input className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md text-center outline-none' type='text' placeholder='Search' />
      </div>
    </main>
  )
}
