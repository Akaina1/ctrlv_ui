import * as icons from '../IMG';
// Test Data for Simple Scroll Container

const scrollItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    // Add more items as needed
  ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test Data for Simple Accordion

const accordionItems = [
    {
      header: "This is a header you can click on!",
      content: "And this is the content you just found!",
      ariaLabel: "Enter screen reader description here",
    },
    {
      header: "This is ALSO a header!",
      content: "WOW, more content!",
      ariaLabel: "Enter screen reader description here",
    },
    {
        header: "There is no content here...",
        content: "gottem",
        ariaLabel: "Enter screen reader description here",
    },
    {
        header: "one larger header",
        content: "and a side of content",
        ariaLabel: "Enter screen reader description here",
    },
    {
        header: "I needed to add more items",
        content: "because testing",
        ariaLabel: "Enter screen reader description here",
    },
    {
        header: "I can't think of more copy",
        content: "so here is random stuff",
        ariaLabel: "Enter screen reader description here",
    },
    {
        header: "this is getting long",
        content: "too long...",
        ariaLabel: "Enter screen reader description here",
    },
    {
        header: "okay I am done now",
        content: "enjoy this accordion",
        ariaLabel: "Enter screen reader description here",
    },       
    // Add more items as needed
  ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test Data for Simple Badge Container

const badgeItems = [
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test Data for Simple Card Container

const cardItems = [
    { photo: 'https://via.placeholder.com/300x300', 
    title: 'This', 
    description: 'Super Responsive!', 
    button: 'I', 
    bgColor: '#FF7A5C', 
    buttonLabel: "Card Button 1",  
    onButtonClick: () => { console.log('Button clicked on card 1!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Is', 
    description: 'So Simple!', 
    button: 'Really', 
    bgColor: '#A388EE', 
    buttonLabel: "Card Button 2",  
    onButtonClick: () => { console.log('Button clicked on card 2!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'A', 
    description: 'And accessible!', 
    button: 'Love', 
    bgColor: '#90EE90', 
    buttonLabel: "Card Button 3", 
     onButtonClick: () => { console.log('Button clicked on card 3!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Card', 
    description: 'Wow this text is cool!', 
    button: 'Buttons', 
    bgColor: '#E3A018', 
    buttonLabel: "Card Button 4",  
    onButtonClick: () => { console.log('Button clicked on card 4!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Could be a product', 
    description: 'and a description', 
    button: 'Super Button', 
    bgColor: '#FF7A5C', 
    buttonLabel: "Card Button 5",  
    onButtonClick: () => { console.log('Button clicked on card 5!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Or maybe a turle', 
    description: 'who eats sandwiches', 
    button: 'it grows...', 
    bgColor: '#A388EE', 
    buttonLabel: "Card Button 6",  
    onButtonClick: () => { console.log('Button clicked on card 6!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'A borrito', 
    description: 'extra LARGE', 
    button: 'IT CAN GET REALLY BIG OR...', 
    bgColor: '#90EE90', 
    buttonLabel: "Card Button 7",  
    onButtonClick: () => { console.log('Button clicked on card 7!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Cards are fun', 
    description: 'so are containers!', 
    button: 'small', 
    bgColor: '#E3A018', 
    buttonLabel: "Card Button 8",  
    onButtonClick: () => { console.log('Button clicked on card 8!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'I ran', 
    description: 'darn turtles', 
    button: 'but', 
    bgColor: '#FF7A5C', 
    buttonLabel: "Card Button 9",  
    onButtonClick: () => { console.log('Button clicked on card 9!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Out', 
    description: 'need to make another sandwich', 
    button: 'I', 
    bgColor: '#A388EE', 
    buttonLabel: "Card Button 10",  
    onButtonClick: () => { console.log('Button clicked on card 10!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Of', 
    description: 'where is the mayo?', 
    button: 'have', 
    bgColor: '#90EE90', 
    buttonLabel: "Card Button 11",  
    onButtonClick: () => { console.log('Button clicked on card 11!');},},

    { photo: 'https://via.placeholder.com/300x300', 
    title: 'Copy', 
    description: 'cards will grow vertically to fit whatever crazy stuff you type in here, just remember that each card layout is the same so if you type a lot it will stretch the section for each card next to it as seen here', button: 'Buttons', bgColor: '#E3A018', buttonLabel: "Card Button 12",  onButtonClick: () => { console.log('Button clicked on card 12!');},},
    // Add more card data as needed
  ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { scrollItems, accordionItems, cardItems, badgeItems };