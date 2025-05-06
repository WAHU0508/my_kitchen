'use client';
import React from 'react';

export default function Header() {

    return (
        <header className='w-full flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className={`
                    hidden border border-[#0000003D] bg-[#FFFFFF] lg:flex lg:flex-row md:flex md:flex-row items-center justify-between px-10 
                    shadow-xl transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-50
                    ${isScrolled ? 'w-full md:h-[50px] lg:h-[70px] mt-0' : 'lg:w-[95%] xl:w-[95%] 2xl:w-[95%] lg:h-[60px] md:w-full rounded-[5px] mt-4 mx-auto'}
                  `}>
                <Image
                    src={logo}
                    width={150}
                    height={45}
                    alt='Alver Power Systems logo'
                    className='w-[150px] h-[48px]'
                />
                <div className='flex flex-row gap-6 h-full text-[15px] text-black items-center justify-center'>
                    <Link
                          href="/"
                          className={`group h-full flex flex-col items-center justify-between font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                            <span className='mt-[17px]'>Home</span>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width={18}
                                height={6}
                                className={`transition-opacity duration-200 ${
                                pathname === '/' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            />
                    </Link>
                    <Link
                          href="/about_us"
                          className={`group h-full flex flex-col items-center justify-between font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/about_us' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                          <span className='mt-[17px]'>About Us</span>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width={18}
                                height={6}
                                className={`transition-opacity duration-200 ${
                                pathname === '/about_us' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            />
                    </Link>
                    <div className="h-full relative group">
                      <Link
                        href="/products_and_services"
                        className={`group h-full flex flex-col items-center justify-between font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                          pathname === '/products_and_services'
                            ? 'text-[#FF0105] border-b-4 border-[#FF0105]'
                            : 'text-black'
                        }`}
                      >
                        <span className='mt-[17px]'>Products & Services</span>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width={18}
                                height={6}
                                className={`transition-opacity duration-200 ${
                                pathname === '/products_and_services' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            />
                      </Link>
                    
                      {/* Dropdown */}
                      <div className="absolute top-full left-0 mt-0 w-[250px] bg-white shadow-lg border border-gray-300 rounded p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                        <ul className="text-sm text-gray-700 space-y-4">
                          <li>
                            <Link
                              href="/products_and_services/solar_solutions"
                              className={`border-b border-black/10 flex hover:text-[#FF0105] items-center justify-center px-2 py-1 ${
                                pathname === '/products_and_services/solar_solutions' ? 'text-red-600' : 'text-black'
                              }`}
                            >
                              Solar Solutions
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products_and_services/switchboard_manufacturing"
                              className={`border-b border-black/10 flex hover:text-[#FF0105] items-center justify-center px-2 py-1 ${
                                pathname === '/products_and_services/switchboard_manufacturing' ? 'text-red-600' : 'text-black'
                              }`}
                            >
                              Switchboard Manufacturing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products_and_services/CNC"
                              className={`border-b border-black/10 flex hover:text-[#FF0105] items-center justify-center px-2 py-1 ${
                                pathname === '/products_and_services/CNC' ? 'text-red-600' : 'text-black'
                              }`}
                            >
                              CNC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products_and_services/electrical_installation"
                              className={`border-b border-black/10 flex hover:text-[#FF0105] items-center justify-center px-2 py-1 ${
                                pathname === '/products_and_services/electrical_installation' ? 'text-red-600' : 'text-black'
                              }`}
                            >
                              Electrical Installation
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>


                    <Link
                          href="/contact_us"
                          className={`group h-full flex flex-col items-center justify-between font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/contact_us' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                         <span className='mt-[17px]'>Contact Us</span>
                            <Image
                                src={pointer}
                                alt='pointer'
                                width={18}
                                height={6}
                                className={`transition-opacity duration-200 ${
                                pathname === '/contact_us' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            />
                    </Link>
                </div>
            </div>

            {/* Header for small screens */}
            <div className='lg:hidden md:hidden flex flex-row w-full items-center gap-2 mt-2 ml-2 mr-[20px]'>
                <button onClick={() => setIsOpen(true)}>
                    <Menu size={31} color='black'/>
                </button>
                <div className='border border-[#0000003D] bg-[#FFFFFF] flex items-center justify-center shadow-xl rounded-[10px] w-full h-[40px]'>
                    <Image
                        src={logo}
                        width={120}
                        height={38}
                        alt='Alver Power Systems logo'
                        className='w-[120px] h-[38px]'
                    />
                </div>
            </div>

            {/* Modal and Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-40 transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Modal with slide-in animation */}
                    <div
                        className={`overflow-x-auto fixed left-0 top-0 h-screen w-[262px] flex flex-col items-center bg-white shadow-xl z-50 transition-transform duration-300 transform ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                        style={{ touchAction: 'none' }}
                    >
                        <div className='flex flex-col items-center'>
                            <Image
                                src={logo}
                                width={120}
                                height={38}
                                alt='Alver Power Systems logo'
                                className='w-[120px] h-[38px] mt-[22px] mb-[20px]'
                            />
                            <ul className="space-y-[20px]">
                                <li><Link
                                        href="/"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Home
                                    </Link>
                                </li>
                                <li><Link
                                        href="/about_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/about_us' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        About Us
                                    </Link>
                                </li>
                                <li className="border-b border-black/10 flex flex-row items-center justify-center w-full">
                                      <Link
                                        href="/products_and_services"
                                        className={`flex items-center justify-start w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/products_and_services' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                      >
                                        Products & Services
                                      </Link>
                                    
                                      {/* Plus/Minus button */}
                                      <button
                                        className="text-[16px] text-black ml-2"
                                        onClick={(e) => {
                                          e.preventDefault(); // prevent Link click
                                          setIsExpanded(!isExpanded);
                                        }}
                                      >
                                        {isExpanded ? '−' : '+'}
                                      </button>
                                    </li>
                                {isExpanded && (
                                  <ul className="pl-4 mt-2 space-y-2 text-[12px]">
                                    <li>
                                      <Link href="/products_and_services/solar_solutions" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Solar Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/switchboard_manufacturing" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Switchboard Manufacturing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/CNC" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        CNC
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/electrical_installation" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Electrical Installation
                                      </Link>
                                    </li>
                                  </ul>
                                )}

                                <li><Link
                                        href="/contact_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/contact_us' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Footer section */}
                        <div className='flex flex-col items-center gap-[40px] mt-[100px] w-full h-full text-black bg-[#F8F8F8] py-2'>
                            {/* Operating Hours Section */}
                            <div className='w-[193px] h-[100px] flex flex-col items-center justify-between'>
                                <Clock size={24} className='text-black'/>
                                <p className='text-[12px] text-center'>Monday - Friday</p>
                                <p className='text-[12px] text-center'>8 AM - 5PM (Saturday 8AM - 1PM)</p>
                            </div>
                            
                            {/* Location section */}
                            <div className='w-[232px] h-[100px] flex flex-col items-center justify-between'>
                                <Image
                                    src={mapPin}
                                    width={24}
                                    height={24}
                                    alt='Map Pin'
                                />
                                <p className='text-[12px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                            </div>
                            
                            {/* Social Media section */}
                            <div className='w-[186px] h-[70px] flex flex-col items-center justify-between'>
                                <p className='text-[12px] text-center'>Visit Us on</p>
                                <div className='flex flex-row w-full items-center justify-between'>
                                    <a
                                      href="https://x.com/AlverPower?t=sFrlL2lI0IN8B6d5m7gDgQ&s=09"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Image
                                          src={twitter}
                                          alt='Twitter Icon'
                                          width={23}
                                          height={23}
                                          className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                      />
                                    </a>
                                    <a
                                      href="https://www.facebook.com/Alver?utm_source=qr&igsh=NzgzcDdzNTFrczV4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Image
                                          src={facebook}
                                          alt='Facebook Icon'
                                          width={23}
                                          height={23}
                                          className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                      />
                                    </a>
                                    <a
                                      href="https://www.instagram.com/alverpower?utm_source=qr&igsh=NzgzcDdzNTFrczV4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Image
                                          src={instagram}
                                          alt='Instagram Icon'
                                          width={23}
                                          height={23}
                                          className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                      />
                                    </a>
                                    <a
                                      href="https://www.linkedin.com/company/alver-power-systems"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                    <Image
                                        src={linkedin}
                                        alt='Linkedin Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                    />
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                        </div>
                    </div>
            )}
        </header>
    );
}
