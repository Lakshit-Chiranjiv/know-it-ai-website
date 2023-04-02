import Image from 'next/image'
import { Poppins } from 'next/font/google'
import logo from '../public/knowitlogo.png'


export default function Home() {

  return (
    <main className='bg-slate-600 h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <Image
          src={logo}
          alt='Know It Logo'
        />
      </div>
    </main>
  )
}
