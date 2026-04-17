import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Define the type for Modal props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div id="modal-id" className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-2xl w-[90vw] relative max-h-[90vh] border border-purple-500/20 shadow-2xl shadow-purple-500/20 flex flex-col">
        {/* Fixed Header */}
        <div className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 px-8 py-6 border-b border-purple-500/30 backdrop-blur-md rounded-t-2xl flex items-center justify-between">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white pr-12">
              {title}
            </h2>
          )}
          <button
            className="text-gray-400 hover:text-white text-4xl font-bold transition-all hover:rotate-90 duration-300 ml-auto"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto scrollbar-hide p-8 flex-1">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

const CustomModal =({children, Button, title}:{children:ReactNode , Button:ReactNode, title?:string})=>{
    const [isOpen, setisOpen] = useState(false)
    return(
        <>
        <div onClick={()=>setisOpen(true)}>{Button}</div>
        <Modal isOpen={isOpen} onClose={()=> setisOpen(false)} title={title}>
            {children}
        </Modal>
        </>
    )
}

export default CustomModal