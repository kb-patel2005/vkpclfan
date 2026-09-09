import React from 'react'

export default function GalleryImages() {
    return (
        <section className='w-full'>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
               
                <div className="col-span-2">
                    <img src="/gallery1" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-1">
                    <img src="/images/exhaust-main.png" alt="Image 2" className="w-full h-full object-cover" />
                </div>

                <div className="col-span-1">
                    <img src="/gallery3.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2">
                    <img src="/gallery4.jpg" alt="Image 4" className="w-full h-full object-cover" />
                </div>
            </div>

        </section>
    )
}
