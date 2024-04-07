"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./components/Scene'), {
  loading: () => <p>Loading...</p>,
  // avoid loading the component server side.
  ssr: false
})

const Tv = () => {
  return (
    <main className='relative h-screen'>
      <Scene/>
    </main>
  )
}

export default Tv