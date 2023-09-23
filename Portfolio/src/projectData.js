import Project1 from './Assets/Project 1.png';
import Project2 from './Assets/Project 2.png';
import Project3 from './Assets/Project 3.png';
import Project4 from './Assets/Project 4.png';

const projectData = [
    {
        id:1,
        title: "Shopping Cart App",
        link: "https://github.com/shivamwebdev0811/Shopping-Cart.git",
        image: `${Project1}`,
        desc: "In this project I've made a Shopping cart app using Reactjs and Reduxjs with capabilities of adding and removing items from the cart."
    },
    {
        id:2,
        title: "Weather App",
        link: "https://github.com/shivamwebdev0811/weather-app",
        image: `${Project2}`,
        desc: "In this project I've made a Weather app which shows the realtime Weather. this is made using HTML, CSS, Javascript and OpenWeatherAPI."
    },
    {
        id:3,
        title:"Tic Tac Toe Game",
        link:"https://github.com/shivamwebdev0811/tictactoe",
        image:`${Project3}`,
        desc:"In this project I've made a simple Tic Tac Toe game using HTML, CSS and JavaScript"
    },
    {
        id:4,
        title:"Password Generator App",
        link:"https://github.com/shivamwebdev0811/PasswordGenerator",
        image:`${Project4}`,
        desc:"In this project I've made a Password Generator App with the capabilites of generating a random password with the given choice of selected items."
    }
]

export default projectData;
