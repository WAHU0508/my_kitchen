// MissionSection.tsx or .jsx
'use client'
import React from 'react'
import Image from 'next/image'
import schneider_logo from '@//assets/schneider_logo.png'
import siemens_logo from '@//assets/siemens_logo.png'
import bodor_logo from '@//assets/bodor_logo.png'
import cs_logo from '@//assets/c&sLogo.png'
import ABB_logo from '@//assets/ABB_Logo.png'
import CNC_logo from '@//assets/CNC_Logo.png'
import jinko_logo from '@//assets/jinko_logo.png'
import himel_logo from '@//assets/himel_Logo.png'
import chint_logo from '@//assets/chint_Logo.png'

const logos = [
  schneider_logo,
  siemens_logo,
  bodor_logo,
  cs_logo,
  ABB_logo,
  CNC_logo,
  jinko_logo,
  himel_logo,
  chint_logo,
];

function PartnersSection() {
  return (
    <div className='w-full bg-black py-4 overflow-hidden'>
      <div className='relative w-full h-[100px]'>
        <div className='absolute animate-scroll whitespace-nowrap flex gap-[50px] items-center'>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className='min-w-[100px] h-[100px] flex items-center justify-center'>
              <Image
                src={logo}
                alt={`Partner Logo ${index}`}
                className='h-[80px] object-contain hover:grayscale-0 transition duration-300'
                style={{ filter: 'grayscale(50%)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;

// function PartnersSection() {

//   return (
//     <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:py-[50px]'>
//       <div className='w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-white h-auto flex flex-row'>
//         <div className='mt-[50px] border-l-2 border-white h-[100px]'></div>
//         <div className='w-full flex items-center justify-center flex-col md:flex-row lg:flex-row lg:gap-[200px]'>
//           <div className='flex flex-col ml-[30px] md:ml-[30px] md:w-[600px] lg:ml-[50px] lg:w-[600px]'>
//             <p className='text-[12px] md:text-[14px] lg:text-[14px]'>COLLABORATION</p>
//             <p className='text-[12px] md:text-[14px] lg:text-[14px] mt-[30px]'>Our Partners </p>
//             <p className='text-[14px] md:text-[18px] lg:text-[18px] mt-[30px] text-justify'>
//               Alver Power Systems collaborates with industry leaders and technology partners to drive innovation and deliver superior solutions to our clients. 
//               Our strong partnerships enable us to expand our capabilities and offer cutting-edge products and services.
//             </p>
//           </div>

//           <div className='ml-[20px] w-full h-auto grid grid-cols-3 lg:space-x-4 items-center justify-center'>
//             <div>
//                 <Image
//                     src={schneider_logo}
//                     alt='Schneider Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={siemens_logo}
//                     alt='Siemens Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={bodor_logo}
//                     alt='Bodor Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={cs_logo}
//                     alt='Bodor Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={ABB_logo}
//                     alt='ABB Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={CNC_logo}
//                     alt='CNC Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={jinko_logo}
//                     alt='Jinko Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={himel_logo}
//                     alt='Himel Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//             <div>
//                 <Image
//                     src={chint_logo}
//                     alt='Chint Logo'
//                     className='h-[100px]'
//                 />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default PartnersSection
