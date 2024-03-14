import React from 'react';
import SimpleCard from '../Cards/SimpleCard'; // use my Simple card, or place your own card component here

const SimpleCardContainer = ({ header, bgColor }) => {
  
  // Can define card array here or have a separate file holding it
  const cards = [
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE' },
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018' },
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE' },
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018' },
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE' },
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90' },
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018' },
    // Add more card data as needed
  ];

  return (
    <div className="border border-black border-t-4 border-l-4 border-b-8 border-r-8 p-4" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      {header && <h1 className="text-black text-3xl font-bold text-center mb-4 font-michroma">{header}</h1>}

      {/* Card grid with overflow auto */}
      <div className="max-h-[1000px] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"> {/* Adjust maxHeight as needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCardContainer;