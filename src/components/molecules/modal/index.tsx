import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Define the type for Modal props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Accept any valid React nodes as children
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
    <div id="modal-id" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>,
    document.body // Attach the modal to the body
  );
};

const CustomModal =({children, Button}:{children:ReactNode , Button:ReactNode})=>{
    const [isOpen, setisOpen] = useState(false)
    return(
        <>
        <div onClick={()=>setisOpen(true)}>{Button}</div>
        <Modal isOpen={isOpen} onClose={()=> setisOpen(false)}>
            {children}
        </Modal>
        </>
    )
}

export default CustomModal