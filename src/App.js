import React, { useState, useEffect } from 'react';
import * as icons from './IMG';
import SimpleNav from './components/NavBar/SimpleNav';
import SimpleButton from './components/Buttons/SimpleButton';
import SocialButton from './components/Buttons/SocialButton';
import SimpleCard from './components/Cards/SimpleCard';
import SimpleCardContainer from './components/Containers/SimpleCardContainer';
import SimpleAccordion from './components/Accordion/SimpleAccordion';
import SimpleNotification from './components/Alerts-Notifications/SimpleNotification';
import SimpleToggleBox from './components/Toggles/SimpleToggleBox';
import SimpleAlert from './components/Alerts-Notifications/SimpleAlert';
import SimpleScrollContainer from './components/Containers/SimpleScrollContainer';
import ProfileIcon from './components/Icons/ProfileIcon';
import SimpleBadge from './components/Icons/SimpleBadge';
import BadgeContainer from './components/Containers/BadgeContainer';


function App() {
  //States Required
  const [showNotification, setShowNotification] = useState(false); // for notifications
  const [toggleState1, setToggleState1] = useState(true); //for simple toggle box 1
  const [toggleState2, setToggleState2] = useState(true); //for simple toggle box 2
  const [showAlert1, setShowAlert1] = useState(false); // for simple Alert1
  const [showAlert2, setShowAlert2] = useState(false); // for simple Alert2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Alert Logic
const handleAlert1 = (selectedOption) => {
  // Do something with the selected option
  console.log(selectedOption);
  setShowAlert1(false);
};

const handleAlert2 = (selectedOption) => {
  // Do something with the selected option
  console.log(selectedOption);
  setShowAlert2(false);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Toggle Box Logic for Toggle 1
const handleSimpleToggleBox1 = (newState) => {
  setToggleState1(newState);
  console.log("Toggle 1 State:", newState); // Log the updated state
};

// Simple Toggle Box Logic for Toggle 2
const handleSimpleToggleBox2 = (newState) => {
  setToggleState2(newState);
  console.log("Toggle 2 State:", newState); // Log the updated state
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Simple Button Logic
  const SimpleButtonClick = () => {
    // do something when the button is clicked
    console.log('Simple Button clicked!');
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Card Button Logic 
  const handleCardClick = () => {
    // Your navigation or render logic goes here
    console.log('Card Button clicked!');
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Social Button Logic
  const SocailButtonClick = () => {
    // do something when the button is clicked
    console.log('Socail Button clicked!');
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Notification Logic
const NotificationClick = () => {
  setShowNotification(true);
};

const handleNotificationClose = () => {
  setShowNotification(false);
};

// Add a useEffect hook to hide the notification after a set duration
useEffect(() => {
  if (showNotification) {
    const timer = setTimeout(() => {
       setShowNotification(false);
    }, 5000); // Set the duration here, in this case, 5 seconds
      return () => clearTimeout(timer);
    }
}, [showNotification]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Profile Icon Logic

const handleProfileClick1 = () => {
  // Logic to handle profile icon click
  console.log('Profile icon 1 clicked');
};

const handleProfileClick2 = () => {
  // Logic to handle profile icon click
  console.log('Profile icon 2 clicked');
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App bg-gray-700 flex flex-col min-h-screen min-w-screen overflow-y-auto items-center">
      {/* Header Bar */}
      <header className="text-white text-3xl font-bold m-10 font-julius-sans-one">
        Component Test Area
      </header>

      {/* Test Section */}
      <section className="flex w-full bg-gray-800 p-4">
        <div className="grid grid-cols-1 gap-5 w-screen">

          {/* Simple Nav Bar */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Nav</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleNav
              bgColor="#ffb2ef"
              textColor="black"
              />
            </div>
          </div>

          {/* Simple Button */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Button</header>
              <div className="flex w-full h-full items-center justify-center">
                <SimpleButton
                  buttonLabel="A button"
                  href=""
                  onClick={SimpleButtonClick}
                  bgColor='#69D2E7'
                  textColor='black'
                >
                  Button
                </SimpleButton>            
              </div>
          </div>

          {/* Custom SVG Icons */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Custom SVG Icons</header>
              <div className="flex w-full h-full items-center justify-center">

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={icons.Facebook} alt="Facebook logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={icons.Twitter} alt="Logo" className="w-full h-full" />
                </div>

              
                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={icons.Instagram} alt="Logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={icons.LinkedIn} alt="Logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={icons.Youtube} alt="Logo" className="w-full h-full" />
                </div>

            </div>
          </div>

          {/* Social Button */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Social Media Link Buttons</header>
            <div className="flex w-full h-full items-center justify-center">

            <SocialButton
              ariaLabel="Facebook"
              title="Facebook"
              src={icons.Facebook}
              alt="Facebook logo"
              onClick={SocailButtonClick}
              href="https://www.facebook.com"
            />

            <SocialButton
              ariaLabel="Twitter"
              title="Twitter"
              src={icons.Twitter}
              alt="Twitter logo"
              onClick={SocailButtonClick}
              href="https://www.Twitter.com"
            />

            <SocialButton
              ariaLabel="Instagram"
              title="Instagram"
              src={icons.Instagram}
              alt="Instagram logo"
              onClick={SocailButtonClick}
              href="https://www.Instagram.com"
            />

            <SocialButton
              ariaLabel="LinkedIn"
              title="LinkedIn"
              src={icons.LinkedIn}
              alt="LinkedIn logo"
              onClick={SocailButtonClick}
              href="https://www.LinkedIn.com"
            />

            <SocialButton
              ariaLabel="Youtube"
              title="Youtube"
              src={icons.Youtube}
              alt="Youtube logo"
              onClick={SocailButtonClick}
              href="https://www.Youtube.com"
            />
            </div>
          </div>

          {/* Simple Card */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Card</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleCard
              photo="https://via.placeholder.com/400x400"
              title="SUPER COOL CARD"
              description="Incredible description of the card!"
              button="IT'S ANOTHER BUTTON"
              buttonLabel="A button"
              bgColor='#FDFD96'
              onButtonClick={handleCardClick}
            />
            </div>
          </div>

          {/* Simple Card Container */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Card Container</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleCardContainer 
            header="This is a super cool container for cards... and... stuff?"
            bgColor='#E3DFF2'
            />
            </div>
          </div>

          {/* Simple Accordion */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Accordion</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleAccordion
              bgColor='#A388EE'
              headerColor='black'
              contentColor='black'
              />
            </div>
          </div>

          {/* Simple Notification */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full ">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Notification</header>
            <div className="flex w-full h-full items-center justify-center">
              
              {/* Call with another component */}
              <SimpleButton
                buttonLabel="Show Notification"
                onClick={NotificationClick}
                bgColor="#122620"
                textColor="white"
                >
                Show Notification
              </SimpleButton>
              {showNotification && (
              <SimpleNotification
                header="HEY YOU!"
                description="this notification is pretty cool eh?"
                onClose={handleNotificationClose}
                show={showNotification}
                ariaLabel={"Wow isn't accessibility awesome?"}
                bgColor='#FF6B6B'
              />
              )}

              {/* Or just use a button */}
               <button className='ml-4 border-black border-2 p-4'
               onClick={NotificationClick}>Show Notification</button>
                {showNotification && (
                  <SimpleNotification
                  header="HEY YOU!"
                  description="this notification is pretty cool eh?"
                  onClose={handleNotificationClose}
                  show={showNotification}
                  ariaLabel="Wow isn't accessibility awesome?"
                  bgColor='#FF6B6B'
                  />
                )}

            </div>
          </div>

          {/* Simple Toggle Box */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Toggle Box</header>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <SimpleToggleBox
                onToggle={handleSimpleToggleBox1}
                initialState={toggleState1}
                onLabel="Don't you hate when"
                offLabel="Wait a minute, where's my sandwich?"
                containerBackgroundColor="#EED6D3"
                containerBorderColor="black"
                toggleBackgroundColor="#67595E"
                toggleOffColor='red'
                toggleOnColor='white'
              />

              <SimpleToggleBox
                onToggle={handleSimpleToggleBox2}
                initialState={toggleState2}
                onLabel="Your pet turtle eats your sandwiches?"
                offLabel="Are you a turtle?"
                containerBackgroundColor="#EED6D3"
                containerBorderColor="black"
                toggleBackgroundColor="#67595E"
                toggleOffColor='red'
                toggleOnColor='white'
              />       
           </div>
          </div>

          {/* Test Component # */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Alert</header>
            <div className="flex w-full h-full items-center justify-center">

           {/* Call with a button */}
            <button className='mr-6 border-2 border-black p-4'
            onClick={() => setShowAlert1(true)}>Show Alert</button>
            {showAlert1 && (
              <SimpleAlert
                bgColor="red"
                title="Warning"
                description="this is a SUPER important Alert!"
                options={['Yes', 'No']}
                onSelect={handleAlert1}
                titleColor="#EFF1DB"
                descriptionColor="#EFF1DB"
                ButtonTextColor="white"
                ariaLabel="Wow more accessibility features!"
              />
            )}

            {/* Call with another component */}
            <SimpleButton
                buttonLabel="Show Alert"
                onClick={() => setShowAlert2(true)}
                bgColor="#BBE7FE"
                textColor='#003060'
                >
                Show Alert
              </SimpleButton>
              {showAlert2 && (
              <SimpleAlert
                bgColor="#DB1F48"
                title="Lesser Warning"
                description="this is a less important Alert..."
                options={['Yes', 'No']}
                onSelect={handleAlert2}
                titleColor="#E5DDC8"
                descriptionColor="#E5DDC8"
                ButtonTextColor="#E5DDC8"
                ariaLabel="Wow more accessibility features!"
              />
            )}

           </div>
          </div>

          {/* title */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Scroll Container</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleScrollContainer title="My Scrollable Content" 
              bgColor="#D3BBDD"
              titleTextColor="black"
              itemTextColor="black"
              />
            </div>
          </div>

          {/* Profile Icon Button */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Profile Icon (button)</header>
            <div className="flex w-full h-full items-center justify-center">
              <div className="flex flex-col items-center mr-8">
                <div className="mb-2 text-sm font-semibold">Default</div> {/* Label for default icon */}
                <ProfileIcon onClick={handleProfileClick1} bgColor="#FF6B6B" />
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 text-sm font-semibold">Filled</div> {/* Label for filled icon */}
                <ProfileIcon onClick={handleProfileClick2} photoUrl="https://i.pravatar.cc/80" bgColor="#FF6B6B" />
              </div>
            </div>
          </div>


          {/* Simple Badge */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Badge</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleBadge 
              title='Verified'
              bgColor='#18A558'
              textColor='black'
              icon={icons.Verified_Badge}
              />
            </div>
          </div>

          {/* Badge Container */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Badge Container</header>
            <div className="flex w-full h-full items-center justify-center">
              <BadgeContainer 
              title="My Badges" 
              bgColor="#D3BBDD" 
              titleColor="black" 
              />
            </div>
          </div>

          {/* title */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              <p>test</p>
            </div>
          </div>

          {/* title */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              <p>test</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
