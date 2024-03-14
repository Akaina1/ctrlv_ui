import React, { useState, useEffect } from 'react';
import SimpleNav from './components/NavBar/SimpleNav';
import SimpleButton from './components/Buttons/SimpleButton';
import Facebook from './IMG/Facebook_1.svg'
import Instagram from './IMG/Instagram_1.svg'
import Twitter from './IMG/Twitter_1.svg'
import LinkedIn from './IMG/LinkedIn_1.svg'
import Youtube from './IMG/Youtube_1.svg'
import SocialButton from './components/Buttons/SocialButton';
import SimpleCard from './components/Cards/SimpleCard';
import SimpleCardContainer from './components/Containers/SimpleCardContainer';
import SimpleAccordion from './components/Accordion/SimpleAccordion';
import SimpleNotification from './components/Alerts-Notifications/SimpleNotification';
import SimpleToggleBox from './components/Toggles/SimpleToggleBox';
import SimpleAlert from './components/Alerts-Notifications/SimpleAlert';
import SimpleScrollContainer from './components/Containers/SimpleScrollContainer';


function App() {
  //States Required
  const [showNotification, setShowNotification] = useState(false); // for notifications
  const [toggleState, setToggleState] = useState(true); //for simple toggle box
  const [showAlert, setShowAlert] = useState(false); // for simple Alert
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Alert Logic
const handleAlert1 = (selectedOption) => {
  // Do something with the selected option
  console.log(selectedOption);
  setShowAlert(false);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Toggle Box Logic
const handleSimpleToggleBox1 = (newState) => {
  setToggleState(newState);
};

// for multiple toggles
const handleSimpleToggleBox2 = (newState) => {
  setToggleState(newState);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Simple Button Logic
  const SimpleButtonClick = () => {
    // do something when the button is clicked
    console.log('Button clicked!');
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Social Button Logic
  const SocailButtonClick = () => {
    // do something when the button is clicked
    console.log('Button clicked!');
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
              <SimpleNav/>
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
                >
                  Button
                </SimpleButton>            
              </div>
          </div>

          {/* Custom SVG Icons (Non-button) */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Custom SVG Icons</header>
              <div className="flex w-full h-full items-center justify-center">

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={Facebook} alt="Facebook logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={Twitter} alt="Logo" className="w-full h-full" />
                </div>

              
                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={Instagram} alt="Logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={LinkedIn} alt="Logo" className="w-full h-full" />
                </div>

                <div className="w-[400px] h-[400px] object-cover mr-4">
                  <img src={Youtube} alt="Logo" className="w-full h-full" />
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
              src={Facebook}
              alt="Facebook logo"
              onClick={SocailButtonClick}
              href="https://www.facebook.com"
            />

            <SocialButton
              ariaLabel="Twitter"
              title="Twitter"
              src={Twitter}
              alt="Twitter logo"
              onClick={SocailButtonClick}
              href="https://www.Twitter.com"
            />

            <SocialButton
              ariaLabel="Instagram"
              title="Instagram"
              src={Instagram}
              alt="Instagram logo"
              onClick={SocailButtonClick}
              href="https://www.Instagram.com"
            />

            <SocialButton
              ariaLabel="LinkedIn"
              title="LinkedIn"
              src={LinkedIn}
              alt="LinkedIn logo"
              onClick={SocailButtonClick}
              href="https://www.LinkedIn.com"
            />

            <SocialButton
              ariaLabel="Youtube"
              title="Youtube"
              src={Youtube}
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
                bgColor="#69D2E7"
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
                initialState={toggleState}
                onLabel="Don't you hate when"
                offLabel="Wait a minute, where's my sandwich?"
                containerBackgroundColor="#EED6D3"
                containerBorderColor="black"
                toggleBackgroundColor="#67595E"
                toggleOffColor='white'
                toggleOnColor='white'
              />

              <SimpleToggleBox
                onToggle={handleSimpleToggleBox2}
                initialState={toggleState}
                onLabel="Your pet turtle eats your sandwiches?"
                offLabel="Are you a turtle?"
                containerBackgroundColor="#EED6D3"
                containerBorderColor="black"
                toggleBackgroundColor="#67595E"
                toggleOffColor='white'
                toggleOnColor='white'
              />       
           </div>
          </div>

          {/* Test Component # */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Title</header>
            <div className="flex w-full h-full items-center justify-center">

           {/* Call with a button */}
            <button className='mr-6 border-2 border-black p-0'
            onClick={() => setShowAlert(true)}>Show Alert</button>
            {showAlert && (
              <SimpleAlert
                bgColor="red"
                title="Warning"
                description="Are you sure you want to do this?"
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
                onClick={() => setShowAlert(true)}
                bgColor="#69D2E7"
                >
                Show Alert
              </SimpleButton>
              {showAlert && (
              <SimpleAlert
                bgColor="#DB1F48"
                title="Warning"
                description="Are you sure you want to do this?"
                options={['Yes', 'No']}
                onSelect={handleAlert1}
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
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleScrollContainer title="My Scrollable Content" bgColor="pink-200">
              <div>Content goes here</div>
              <div>More content goes here</div>
              <div>Even more content goes here</div>
              <div>Content goes here</div>
              <div>More content goes here</div>
              <div>Even more content goes here</div>
              <div>Content goes here</div>
              <div>More content goes here</div>
              <div>Even more content goes here</div>
              <div>Content goes here</div>
              <div>More content goes here</div>
              <div>Even more content goes here</div>
              {/* Add more content as needed */}
            </SimpleScrollContainer>
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
