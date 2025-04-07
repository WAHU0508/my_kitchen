import React, { useState } from 'react'

export default function Modal() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
           <div className="bg-white p-6 rounded-lg text-black shadow-lg w-full max-w-md relative">
             {/* Modal Header with close button */}
             <div className="flex justify-between items-center">
               <h2 className="text-xl font-bold">Get A Quote</h2>
               <button
                 className="text-xl text-gray-600 hover:text-gray-800"
                 onClick={closeModal}
               >
                 &times; {/* "X" to close */}
               </button>
             </div>
 
             {/* Modal Content */}
             <div className="mt-4">
               <p>Development in Progress</p>
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
  )
}
