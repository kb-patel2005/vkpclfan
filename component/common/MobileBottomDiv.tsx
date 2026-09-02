import React from 'react'

export default function MobileBottomDiv() {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-[#F8F9FA] py-3 px-5 flex justify-between items-center border-t border-[#EDEEEF] lg:hidden'>
        <div className='flex items-center w-full gap-2'>
            <button className='w-[50%] bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3]'>call me</button>
            <button className='w-[50%] bg-[#28a745] text-white py-2 px-4 rounded-md hover:bg-[#1e7e34]'>what's app</button>
        </div>
    </div>
  )
}
