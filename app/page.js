'use client'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import logo from '../public/knowitlogo.png'
import OpenAI from 'openai-api'

import { useState } from 'react'


export default function Home() {

  const openai = new OpenAI(process.env.OPENAI_API_KEY)
  const [search, setSearch] = useState('')
  const [summary, setSummary] = useState('')

  const generateSummary = async (topic) => {
    const result = await openai.complete({
      engine: 'davinci',
      prompt: `Generate a summary for ${topic}.`,
      maxTokens: 50,
    });
    const summary = result.data.choices[0].text;
    setSummary(summary)
  };
  

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
        <input className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md text-center outline-none' type='text' placeholder='Search' onChange={(event) => {
          setSearch(event.target.value)
        }}/>
        <button className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md bg-slate-500 text-white font-bold active:scale-95' onClick={() => {
          generateSummary(search)
        }}>Know</button>

        {summary && 
          <div className='w-3/4 md:w-1/2 lg:w-1/3 h-10 rounded-md bg-slate-500 text-white/90 font-semibold'>
            <p>{summary}</p>
          </div>
        }
      </div>
    </main>
  )
}