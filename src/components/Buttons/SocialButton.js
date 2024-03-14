import React from 'react';

const SocialButton = ({ ariaLabel, title, src, alt, onClick, href }) => {
  const button = (
    <button
      className="flex flex-col items-center justify-center relative aspect-square w-full h-full"
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
    >
      <div
        className="w-full h-full object-cover mr-4 focus:scale-90 hover:scale-90 transition duration-200"
      >
        <img src={src} alt={alt} className="w-full h-full" />
      </div>
    </button>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label={ariaLabel}
        title={title}
      >
        {button}
      </a>
    );
  }

  return button;
};

export default SocialButton;
