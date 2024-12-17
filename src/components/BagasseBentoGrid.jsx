import React, { useState } from 'react'
import transform from "../assets/transform.svg"
const BagasseBentoGrid = () => {
  const [photo, setPhoto] = useState(false);
  return (
    <div className="bg-gray-50 py-24 sm:py-32" id='bento'>
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-center text-base/7 font-semibold text-[#1F5218]">Deploy faster</h2>
    <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Eco Tableware for a Cleaner Planet</p>
    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Nature at its abudance</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Nature is necessary for our health and wellbeing, and some say that people who connect with nature experience more life satisfaction.</p>
          </div>
          <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img className="size-full object-contain object-top" src={"https://mir-s3-cdn-cf.behance.net/project_modules/hd/5a689a45620741.5836c63d2c7f3.gif"} alt="" />
              <div className='absolute bottom-0'>
              <img className="size-full object-contain object-top" src={"https://i.pinimg.com/originals/75/5e/88/755e88467e9492ee6f9ffa3a120afba2.gif"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-1 hero-img3s">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] hero-img3"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          
          {/* <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <img className="w-[60%] max-lg:max-w-xs " src="" alt="carbon_footprint"/>
          </div> */}
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-1 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Attitude of insensitivity</p>
            <p className="mt-1 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">We are demonstrating a lack of empathy for the well-being of others and the planet.</p>
          </div>
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Non-degradable tableware has a significant and lasting impact on the environment. These materials take hundreds to thousands of years to break down, contributing to long-term pollution.</p>
          </div>
          <div className="flex items-center justify-center">
            {/* <img className="object-cover" src={transform} alt="transform_pic" /> */}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Eco'ester</p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Tableware that Cares - Transition from Synthetic to Sustainable, Without Compromising Your Savory Delights!</p>
          </div>
          <div className="relative min-h-[30rem] w-full grow">
            <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div className={`border-b ${!photo && "border-r border-b-white/20 border-r-white/10 bg-white/5 "} px-4 py-2 text-white hover:cursor-pointer`} onClick={() => setPhoto(false)}>From</div>
                  <div className={`border-b ${photo && "border-r border-b-white/20 border-r-white/10 bg-white/5 "} px-4 py-2 text-white hover:cursor-pointer`} onClick={() => setPhoto(true)}>To</div>
                </div>
              </div>
              <div className="w-100 h-full">
             <img className="size-full object-cover" src={!photo ? "https://kj1bcdn.b-cdn.net/media/62265/vegetable-waste.jpg" : "https://www.comfypackage.com/cdn/shop/files/10_inch_plate_3_compartment_AdobeExpress-2_1024x.gif?v=1724960849"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  </div>
</div>

  )
}

export default BagasseBentoGrid