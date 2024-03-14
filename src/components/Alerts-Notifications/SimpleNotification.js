import React, { useEffect, useRef } from 'react';

const SimpleNotification = ({ header, description, onClose, show, bgColor, ariaLabel }) => {
    
    const notificationRef = useRef(null);

    useEffect(() => {
        if (show) {
            notificationRef.current.focus();
        }
    }, [show]);

    const handleClose = () => {
        onClose();
    };
    
    if (!show) return null;

    return (
        <div
            ref={notificationRef}
            tabIndex="-1"
            role="alert"
            aria-live="assertive"
            className="fixed top-0 right-0 z-50 p-12
            border-b-4 border-r-4 border-l-2 border-t-2 border-gray-800
            transition duration-500 ease-in-out transform origin-top 
            bg-opacity-90 animate-drop-down"
            style={{ backgroundColor: bgColor }}
            aria-label={ariaLabel}
        >
            <div aria-hidden="true" className="container mx-auto flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-black font-aldrich">{header}</h2>
                    <p className="text-2xl text-black font-darker-grotesque">{description}</p>
                </div>
                <button
                    className="ml-4 focus:outline-none"
                    onClick={handleClose}
                >
                    <svg
                        className="w-6 h-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SimpleNotification;