import React from 'react';
import PropTypes from 'prop-types';
import SimpleBadge from '../Icons/SimpleBadge';
import * as icons from '../../IMG';

const BadgeContainer = ({ bgColor, title, titleColor }) => {

// Define the items array within component or use external file for larger data sets, then include as props
const badges = [
    {
        title: 'CSS GURU',
        bgColor: '#E7625F',
        textColor: 'black',
        icon: icons.CSS_Badge
    },
    {
        title: 'React MASTER',
        bgColor: '#7EC8E3',
        textColor: 'black',
        icon: icons.React_Badge
    },
    {
        title: 'Masochist',
        bgColor: '#F8EA8C',
        textColor: 'black',
        icon: icons.JavaScript_Badge
    },
    {
        title: 'I love numbers',
        bgColor: '#A4E8E0',
        textColor: 'black',
        icon: icons.Python_Badge
    },
    // Add more badge objects as needed
    ];

    return (
        <div className={`flex flex-col items-center p-4 w-full sm:w-2/5 border-black border-l-2 border-t-2 border-r-4 border-b-4`} // can edit container width if needed
        style={{ backgroundColor: bgColor }}>
          <div className="mb-2">
            <h3 className={`text-xl font-bold`} style={{ color: titleColor }}>
              {title}
            </h3>
          </div>
          <div className={`flex flex-wrap justify-center`}>
            {badges.map((badge, index) => (
              <div key={index} className="mr-2 mb-2">
                <SimpleBadge
                  title={badge.title}
                  bgColor={badge.bgColor}
                  textColor={badge.textColor}
                  icon={badge.icon}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };

BadgeContainer.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BadgeContainer;