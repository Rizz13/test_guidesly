"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic'
import { BookNowBtn, Loader } from '@/styles';
const BookingWindow = dynamic(() => import('@/components/bookingWindow'), 
{ loading: () => <Loader><span className='load' /> </Loader>, ssr: false })


export default function Home() {

  const [windowOpen, setWindowOpen] = useState<boolean>(false)

  return (
    <main>
      {windowOpen && <BookingWindow closeWindow={()=>setWindowOpen(false)} />}
      <BookNowBtn type="primary" onClick={()=>setWindowOpen(true)}>BOOK NOW</BookNowBtn>
    </main>
  )
}