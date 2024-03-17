import React, { useState, useEffect } from 'react';
import * as icons from './IMG';
import * as TestData from './Data/TestData';
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
import SimpleCalendar from './components/Calendar/SimpleCalendar';
import SimpleDateSelect from './components/Forms/SimpleDateSelect';
import SimpleRadioGroup from './components/Buttons/SimpleRadioGroup';
import SimpleTextField from './components/Forms/SimpleTextField';
import FormSkeleton from './components/Forms/FormSkeleton';
import SimpleCheckbox from './components/Forms/SimpleCheckbox';


function App() {
  //States Required
  const [showNotification, setShowNotification] = useState(false); // for notifications
  const [toggleState1, setToggleState1] = useState(true); //for simple toggle box 1
  const [toggleState2, setToggleState2] = useState(true); //for simple toggle box 2
  const [showAlert1, setShowAlert1] = useState(false); // for simple Alert1
  const [showAlert2, setShowAlert2] = useState(false); // for simple Alert2
  const [selectedOption, setSelectedOption] = useState(''); // for simple radio group

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
  const SocialButtonClick = () => {
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
// Simple Calendar Logic
const handleCalendarDateSelect = (date) => {
  console.log("Selected date:", date);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Date Select Logic
const handleDateSelect = (date) => {
  console.log("Selected date:", date);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Radio Group Logic
const handleRadioSelectionChange = (value) => {
  setSelectedOption(value);
};

const handleRadioSubmit = () => {
  // Handle form submission with selectedOption
  console.log("Selected option:", selectedOption);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Simple Text Field Logic
const handleTextFieldSubmit = (value, id) => {
  console.log('Submitted value:', value, 'from:', id);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Form Skeleton Logic (2 text fields)

const handleFormSubmit = (formData) => {
  console.log('Submitted field values:', formData);
  // You can handle the submitted field values here
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// checkbox logic
const handleCheckboxSubmit = (isChecked, id) => {
  console.log(`Checkbox ${id} submitted with value: ${isChecked}`);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Form Skeleton Logic (checkbox and text)
const handleFormSubmit2 = (formData) => {
  console.log('Form submitted with data:', formData);
};
// form data format:
//  {
//    "id": value,
//    "id": "value"
//  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Form Skeleton Logic (text and date)

const handleFormSubmit3 = (formData) => {
  console.log('Form submitted with data:', formData);
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
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-center w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Social Media Link Buttons</header>
            <div className="flex flex-col sm:flex-row space-y-4 space-x-0 sm:space-y-0 sm:space-x-4">

            <SocialButton
              ariaLabel="Facebook"
              title="Facebook"
              src={icons.Facebook}
              alt="Facebook logo"
              onClick={SocialButtonClick}
              href="https://www.facebook.com"
            />

            <SocialButton
              ariaLabel="Twitter"
              title="Twitter"
              src={icons.Twitter}
              alt="Twitter logo"
              onClick={SocialButtonClick}
              href="https://www.Twitter.com"
            />

            <SocialButton
              ariaLabel="Instagram"
              title="Instagram"
              src={icons.Instagram}
              alt="Instagram logo"
              onClick={SocialButtonClick}
              href="https://www.Instagram.com"
            />

            <SocialButton
              ariaLabel="LinkedIn"
              title="LinkedIn"
              src={icons.LinkedIn}
              alt="LinkedIn logo"
              onClick={SocialButtonClick}
              href="https://www.LinkedIn.com"
            />

            <SocialButton
              ariaLabel="Youtube"
              title="Youtube"
              src={icons.Youtube}
              alt="Youtube logo"
              onClick={SocialButtonClick}
              href="https://www.Youtube.com"
            />
            </div>
          </div>

          {/* Simple Card */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Card</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleCard
              photo="https://via.placeholder.com/300x300"
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
            items={TestData.cardItems}
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
              items={TestData.accordionItems}
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
                id={"simple-toggle-box-1"}
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
                id={"simple-toggle-box-2"}
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
              items={TestData.scrollItems}
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
              title="Super Cool & Responsive Container" 
              bgColor="#FFB067" 
              titleColor="black"
              items={TestData.badgeItems} 
              />
            </div>
          </div>

          {/* Simple Calendar */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Calendar</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleCalendar 
              bgColor="#F9EAC2" 
              monthColor="black"
              dayColor="black"
              buttonColor="#E98973"
              onDateSelect={handleCalendarDateSelect}
              />
            </div>
          </div>

          {/* Simple Date Select Form component */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Date Select</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleDateSelect 
              id='dateSelect1'
              title={'Date Select'}
              onSubmit={handleDateSelect}
              isRequired={true}
              showButton={true}
              inputColor="black"/>
            </div>
          </div>

          {/* Simple Radio Group */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Simple Radio Group</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleRadioGroup
                title="Choose the best programming language:"
                titleTextColor="#EFDCF9"
                bgColor="#7954A1"
                items={['JavaScript', 'Python', 'COBOL', 'Java', 'C++', 'C#', 'Rust']} // options can be placed directly here or if there is a large list, use an external file
                itemTextColor="#EFDCF9"
                buttonTextColor="#EFDCF9"
                selectionColor="#F6D4D2"
                selection={selectedOption}
                onSelectionChange={handleRadioSelectionChange}
                onSubmit={handleRadioSubmit}
              />
              </div>
          </div>

          {/* Simple Text Field */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Text Field</header>
            <div className="flex w-full h-full items-center justify-center">
              <SimpleTextField
                id='SingleField'
                bgColor="#323E42"
                buttonColor="#81ABBC"
                onSubmit={handleTextFieldSubmit}
                showButton={true}
                label="Text Field"
                inputLimit={10}
                isRequired={true}
                textColor="white"
              />
            </div>
          </div>

          {/* Form Skeleton with 2 text boxes */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Form Skeleton (2 text fields)</header>
            <div className="flex w-full h-full items-center justify-center">
            <FormSkeleton 
            header="Wow a form!"
            onSubmit={handleFormSubmit}
            buttonColor="#81ABBC"
            bgColor="#CB857C"
            >
              <SimpleTextField 
              id='Field1_ID'
              label="Field 1" 
              showButton={false} 
              bgColor="#323E42"
              inputLimit={6}
              isRequired={true}
              textColor="white"
              />
              <SimpleTextField 
              id='Field2_ID'
              label="Field 2" 
              showButton={false} 
              bgColor="#323E42"
              inputLimit={5}
              textColor="white"
              />
            </FormSkeleton>
            </div>
          </div>

          {/* Simple Checkbox */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Checkbox</header>
            <div className="flex w-full h-full items-center justify-center">
            <SimpleCheckbox
                id="checkbox1"
                label="Example Checkbox"
                bgColor="#e0e0e0"
                onSubmit={handleCheckboxSubmit}
                isRequired={true}
              />
            </div>
          </div>

          {/* Form Skeleton text and boolean */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">Form Skeleton (text and boolean field)</header>
            <div className="flex w-full h-full items-center justify-center">
            <FormSkeleton 
            onSubmit={handleFormSubmit2} 
            buttonColor="#81ABBC" 
            header="Sell your soul!"
            bgColor="#774A62">
              <SimpleCheckbox
                id="checkbox1"
                label="I agree to the terms and conditions"
                bgColor="#e0e0e0"
                onChange={() => {}}
                isRequired={true}
                showButton={false}
                value={false}
              />
              <SimpleTextField
                id="textField5"
                label="Enter your name"
                bgColor="#323E42"
                onChange={() => {}}
                showButton={false}
                isRequired={false}
                textColor="white"
              />
            </FormSkeleton>
            </div>
          </div>

          {/* From Skeleton With date and text input */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
            <FormSkeleton onSubmit={handleFormSubmit3} buttonColor="#81ABBC" header="Sell your soul!" bgColor="#774A62">
              <SimpleTextField
                id="textField1"
                label="Enter your name"
                bgColor="#323E42"
                onChange={() => {}}
                showButton={false}
                isRequired={true}
                textColor="white"
              />
              <SimpleDateSelect
                id="dateSelect2"
                title="Select Date"
                description="Please select a date"
                buttonColor="#81ABBC"
                textBoxColor="#323E42"
                titleColor="#ffffff"
                descriptionTextColor="#ffffff"
                buttonTextColor="white"
                type='textDate'
              />
            </FormSkeleton>
            </div>
          </div>

          {/* test div */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              {/* render component here */}
            </div>
          </div>

          {/* test div */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              {/* render component here */}
            </div>
          </div>

          {/* test div */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              {/* render component here */}
            </div>
          </div>

          {/* test div */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              {/* render component here */}
            </div>
          </div>

          {/* test div */}
          <div className="text-white bg-gray-600 p-4 flex flex-col items-center justify-top w-full h-full">
            <header className="text-white text-3xl font-bold mb-8 font-julius-sans-one">title</header>
            <div className="flex w-full h-full items-center justify-center">
              {/* render component here */}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
