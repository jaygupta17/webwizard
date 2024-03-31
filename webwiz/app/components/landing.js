import React from 'react';
import Image from 'next/image';

const landing = () => {
    return (
        <>
        {/* <Image src={backgroundImage} width={16000} height={6}/> */}
        <div className='w-full h-[80vh] text-white place-content-center text-center'>
            <div className='text-[110px] font-bold sans-serif' style={{ color: '#F9FB6B' }}>Web Wizard</div>
            <div className='text-xl text-white w-1/2 mx-auto'>Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Prelig ode, monogt serar. Hoholedes  </div>
            <div className='flex items-center justify-center'>
              <button className='px-4 py-3 rounded-lg mt-5 bg-[#E7A4ED] text-[#3B1C63] hover:bg-purple-300'>Get Started</button>
      </div>
        </div>
        </>
    )
}

export default landing
