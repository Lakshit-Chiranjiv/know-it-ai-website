'use client'
import Image from 'next/image'
import logo from '../public/knowitlogo.png'
import OpenAI from 'openai-api'

import { useState } from 'react'


export default function Home() {

  const openai = new OpenAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY)
  const [search, setSearch] = useState('')
  const [summary, setSummary] = useState('')

  const generateSummary = async (topic) => {
    const result = await openai.complete({
      engine: 'text-davinci-003',
      prompt: `Generate a 2 paragraph summary for ${topic}. Have atleast 120 words. \n\n`,
      maxTokens: 100,
      temperature: 0.7,
    });
    const res = result.data.choices[0].text;
    setSummary(res)
  };
  

  return (
    <main className='bg-slate-600 min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-12 min-h-full'>
        <Image
          src={logo}
          alt='Know It Logo'
          width={400}
          height={400}
        />
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-white font-bold'>Search for any topic</h1>
        <input className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md text-center outline-none' type='text' placeholder='Search' onChange={(event) => {
          setSearch(event.target.value)
        }}/>
        <button className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md bg-slate-500 text-white font-bold active:scale-95' onClick={() => {
          generateSummary(search)
        }}>Know</button>

        {summary && 
          <div className='w-3/4 md:w-1/2 lg:w-1/3 p-4 mb-12 rounded-md bg-slate-500 text-white/90 font-semibold'>
            <p>{summary}</p>
          </div>
        }
      </div>
    </main>
  )
}