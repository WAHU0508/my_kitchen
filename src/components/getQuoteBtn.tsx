import React, { useState } from 'react'
// import Image from 'next/image'
import { FiUpload } from 'react-icons/fi';
// import arrow from '@//svgs/arrow.svg'

function GetQuoteButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '', attachment: null, });
    const [status, setStatus] = useState<string>('');
    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setStatus('');
    };
    interface FormData {
        name: string;
        email: string;
        phone: string;
        message: string;
        attachment?: File | null;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFormData({ ...formData, attachment: e.target.files[0] });
        }
      };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('phone', formData.phone);
        payload.append('message', formData.message);
        if (formData.attachment) {
        payload.append('attachment', formData.attachment);
        }

        try {
        const res = await fetch('/api/getquote', {
            method: 'POST',
            body: payload,
        });

        const data = await res.json();
        console.log(payload);

        if (data.success) {
            setStatus('Message sent!');
            // ✅ Clear form after success
            setFormData({ name: '', email: '', phone: '', message: '', attachment: null });
        } else {
            setStatus('Failed to send message.');
        }

        setTimeout(() => setStatus(''), 5000);
        } catch {
        console.log('Error Here');
        setStatus('Something went wrong.');
        }
    };


  return (
    <div>
        <div className="relative w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px]">
            {/* Rectangle 9 - blurred background box */}
            {/*<div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
            {/* Rectangle 8 - foreground box */}
            {/* <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                onClick={openModal}
            >
                Get a Quote
                <Image
                    src={externalLink}
                    alt='Get Quote'
                    width={16}
                    height={16}
                    className='w-[10px] h-[10px] lg:w-[16px] lg:h-[16px] md:w-[16px] md:h-[16px]'
                />
            </button> */}
            <button className='flex items-center justify-center'>
                <p className='' onClick={openModal}>Get Quote</p>
{/*                 <div className='px-4 py-1 flex items-center justify-center'>
                    <Image
                        src={arrow}
                        alt='arrow'
                        width={16}
                        height={16}
                    />
                </div> */}
            </button>
        </div>
        {/*Get Quote Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                    {/* Modal Header with close button */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-black text-xl font-bold">Get A Quote</h2>
                        <button
                            className="text-xl text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times; {/* "X" to close */}
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="mt-4">
                        <form onSubmit={handleSubmit} className="space-y-1 max-w-md mx-auto text-[black]">
                            <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Name <span className='text-[#FF0105]'>*</span></p>
                            <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                            <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Email <span className='text-[#FF0105]'>*</span></p>
                            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                            <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Tel No. <span className='text-[#FF0105]'>*</span></p>
                            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                            <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Quote <span className='text-[#FF0105]'>*</span></p>
                            <textarea name="message" placeholder="Quote / Message" onChange={handleChange} required className="w-full p-2 border rounded border-[#D9D9D9] text-black"></textarea>
                            <div className='flex flex-col gap-1'>
                                <label className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md w-fit">
                                    <FiUpload className="text-lg" />
                                    <span>Upload File</span>
                                    <input
                                        type="file"
                                        name="attachment"
                                        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                                {formData.attachment && (
                                        <p className="mt-2 text-sm text-gray-700">
                                            Selected file: <strong>{formData.attachment.name}</strong>
                                        </p>
                                    )}
                            </div>
                            <button type="submit" className="bg-[#F4A261] text-black px-4 py-1 rounded">Send</button>
                            {status && (
                                <p className={`mt-2 text-center text-xl 
                                        ${status === 'Sending...' ? 'text-black' : ''} 
                                        ${status === 'Message sent!' ? 'text-green-500' : ''} 
                                        ${status === 'Failed to send message.' ? 'text-red-500' : ''}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Modal Footer */}
                    {/*<div className="mt-4 flex justify-end">
                        <button
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        </div>*/}
                </div>
            </div>
        )}
    </div>
  )
}

export default GetQuoteButton
