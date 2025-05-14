import React, { useState } from 'react';

function OurJourney() {
  const journeyData = [
    { year: '2017', title: 'COMPANY ESTABLISHED AS A SOLE PROPRIETOR', description: 'Alver Power Systems was founded with a vision to revolutionize the power and energy industry with advanced manufacturing and engineering capabilities.' },
    { year: '2022', title: 'COMPANY WAS REGISTERED', description: 'The company was registered in 2022 in accordance with the Kenya Company Act rules.' },
    { year: '2023', title: 'EPRA CERTIFIED', description: 'The company was certified as an electrical contractor, solar PV Contractor/Vendor, solar PV Manufacturer/Importer' },
    { year: '2024', title: 'LARGE-SCALE PROJECTS ACHIEVEMENT', description: 'We successfully executed major projects, solidifying our expertise in electrical installation and contributing to the development of crucial infrastructure.' },
    { year: '2024', title: 'LASER CUTTING MACHINING EXPANSION', description: 'Our investment in advanced laser cutting machining technology propelled us to enhance precision and efficiency in our manufacturing processes.' },
    { year: '2025', title: 'FUTURE ENDEAVORS', description: 'As we look ahead, we are focused on continuous innovation and expansion to address emerging challenges and opportunities in the power and energy sector.' },
    { year: '2026', title: 'VISION FOR SUSTAINABLE GROWTH', description: 'We aim to lead the way in sustainable energy solutions, driving progress and prosperity for our clients and the communities we serve.' },
    { year: '2028', title: 'GLOBAL IMPACT', description: 'Our commitment to excellence and sustainability positions us to make a meaningful global impact through our diverse portfolio of services and solutions.' }
  ];

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // toggles layout on each click

  const goBack = () => {
    setIndex(prev => (prev === 0 ? journeyData.length - 2 : prev - 2));
    setFlipped(prev => !prev);
  };

  const goForward = () => {
    setIndex(prev => (prev + 2 >= journeyData.length ? 0 : prev + 2));
    setFlipped(prev => !prev);
  };

  const first = journeyData[index];
  const second = journeyData[index + 1];

  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col'>

      {/* First Entry */}
      <div className={`w-full flex items-center justify-center ${flipped ? 'md:items-end md:justify-end' : 'md:items-start md:justify-start'}`}>
            <div className={`
                border border-black p-4 w-[90%] md:p-4 flex flex-col md:w-[45%] lg:w-[40%] rounded-[20px]
                transition-all duration-500 ease-in-out transform
                ${flipped ? 'translate-x-4 opacity-90' : '-translate-x-4 opacity-90'}
            `}>
                <p className='text-[#C45308] text-[20px] md:text-[24px] p-4 max-w-max border-b border-black'>{first.year}</p>
                <p className='mt-[20px] text-black text-[10px] md:text-[14px]'>{first.title}</p>
                <p className='mt-[20px] text-black text-[12px] md:text-[16px]'>{first.description}</p>
            </div>
      </div>

      {/* Arrows */}
      <div className='w-full flex flex-row items-center gap-2 mt-6'>
        <button onClick={goBack} className='text-black text-[30px] md:text-[48px]'>&lt;</button>
        <div className='w-full border-b border-black flex flex-row items-center justify-between px-[30px] md:px-[50px]'>
          <div className='w-[50px] border border-black'></div>
          <div className='w-[50px] border border-black'></div>
        </div>
        <button onClick={goForward} className='text-black text-[30px] md:text-[48px]'>&gt;</button>
      </div>

      {/* Second Entry */}
      {second && (
        <div className={`w-full flex items-center justify-center ${flipped ? 'md:items-start md:justify-start' : 'md:items-end md:justify-end'}`}>
            <div className={`
                border border-black p-4 w-[90%] md:p-4 flex flex-col md:w-[45%] lg:w-[40%] rounded-[20px]
                transition-all duration-500 ease-in-out transform
                ${flipped ? 'translate-x-4 opacity-90' : '-translate-x-4 opacity-90'}
            `}>
                <p className='text-[#C45308] text-[20px] md:text-[24px] p-4 max-w-max border-b border-black'>{second.year}</p>
                <p className='mt-[20px] text-black text-[10px] md:text-[14px]'>{second.title}</p>
                <p className='mt-[20px] text-black text-[12px] md:text-[16px]'>{second.description}</p>
            </div>
      </div>
      )}
    </div>
  );
}

export default OurJourney;
