import React, { useState, useEffect } from 'react';

const GlobalLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [imgAlt, setImgAlt] = useState('');

  useEffect(() => {
    const handleClick = (e) => {
      // Check if clicked element is an image inside a gallery or has cursor-pointer style
      const img = e.target;
      if (img.tagName === 'IMG' && (img.closest('.cs-gallery') || img.closest('.gallery') || img.style.cursor === 'pointer')) {
        e.preventDefault();
        setImgSrc(img.src);
        setImgAlt(img.alt || '');
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="absolute top-4 right-6 text-white text-[2rem] cursor-pointer hover:text-accent transition-colors"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </div>
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      />
      {imgAlt && (
        <div className="mt-4 text-white text-center font-medium opacity-90 max-w-[800px]">
          {imgAlt}
        </div>
      )}
    </div>
  );
};

export default GlobalLightbox;
