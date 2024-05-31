import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero -translate-y-[200px]">
        <div className="roller-image-container w-[80%] h-[500px] relative mx-auto ">
          <Image src="/upside-down-roller.png" fill={true} alt="hero" />
        </div>
        <h1 className="pt-[40px] text-white font-bold text-5xl text-center">Paint Savvy</h1>
          <div className="pt-[40px] text-white font-bold text-3xl text-center">
            <h2>DIY Painting Tips to</h2>
            <h2 className='text-orange-400'>Save You Money</h2>
        </div>
    </div>
  )
}

export default Hero