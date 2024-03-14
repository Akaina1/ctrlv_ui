import React from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../Cards/SimpleCard'; // use my Simple card, or place your own card component here

const SimpleCardContainer = ({ header, bgColor }) => {
  
  // Define the items array within component or use external file for larger data sets, then include as props
  const cards = [
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C', buttonLabel: "Card Button 1",  onButtonClick: () => { console.log('Button clicked on card 1!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE', buttonLabel: "Card Button 2",  onButtonClick: () => { console.log('Button clicked on card 2!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90', buttonLabel: "Card Button 3",  onButtonClick: () => { console.log('Button clicked on card 3!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018', buttonLabel: "Card Button 4",  onButtonClick: () => { console.log('Button clicked on card 4!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C', buttonLabel: "Card Button 5",  onButtonClick: () => { console.log('Button clicked on card 5!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE', buttonLabel: "Card Button 6",  onButtonClick: () => { console.log('Button clicked on card 6!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90', buttonLabel: "Card Button 7",  onButtonClick: () => { console.log('Button clicked on card 7!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018', buttonLabel: "Card Button 8",  onButtonClick: () => { console.log('Button clicked on card 8!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'This', description: 'Super Responsive!', button: 'I', bgColor: '#FF7A5C', buttonLabel: "Card Button 9",  onButtonClick: () => { console.log('Button clicked on card 9!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Is', description: 'So Simple!', button: 'Really', bgColor: '#A388EE', buttonLabel: "Card Button 10",  onButtonClick: () => { console.log('Button clicked on card 10!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'A', description: 'I Love Cards!', button: 'Love', bgColor: '#90EE90', buttonLabel: "Card Button 11",  onButtonClick: () => { console.log('Button clicked on card 11!');},},
    { photo: 'https://via.placeholder.com/400x400', title: 'Card', description: 'Wow this text is cool!', button: 'Buttons', bgColor: '#E3A018', buttonLabel: "Card Button 12",  onButtonClick: () => { console.log('Button clicked on card 12!');},},
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

SimpleCardContainer.propTypes = {
  header: PropTypes.string,
  bgColor: PropTypes.string,
};

SimpleCardContainer.defaultProps = {
  header: '',
  bgColor: 'white',
};

export default SimpleCardContainer;