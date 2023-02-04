import self from '../images/me.png'
import webstudio from "../images/webstudio.png"
import imagefinder from "../images/imagefinder.png"
import hellish from "../images/hellish.png"
import eventbooster from "../images/eventbooster.png"
import wallet from "../images/wallet.png"
import petly from "../images/petly.png"
import sobdesign from "../images/sob-design.png"
import ersodesign from "../images/ersodesign.png"
import mbox from "../images/mbox.png"
import phonebook from '../images/phonebook.png'

export let colors = ["rgb(83, 134, 65), rgb(53, 120, 208)"];

export const data = {
    firstName: "Danny",
    lastName: "Bochkov",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '⚡',
            text: 'feeds on the energy of other people'
        },
        {
            emoji: '🌎',
            text: 'based in the Ukraine'
        },
        {
            emoji: "💼",
            text: "open to work"
        },
        {
            emoji: "📧",
            text: "bockovdanil07@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Danil-Bochkov",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/danny-bochkov/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/d_dunya_b/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://t.me/d_Danya_b",
            icon: "fa fa-telegram",
            label: 'telegram'
        }
    ],
    bio: "Hi! I'm Danny. I'm a Full Stack Developer. I studied CompSci at National University of Radioelectronics. To be honest, I dedicate myself to working on every task. I try to learn everything new because web development is very interesting to me. I believe that it is important for a person that the site or application he visited was very pleasant and without bugs. I also know how to fit well into a team because I am an open and kind person. I am very focused and confident. You should hire me!",
    skills:
    {
        proficientWith: ['html5', 'css3', 'sass', 'javascript', 'react', 'nodejs', 'mongodb'],
        exposedTo: ['figma', 'adobe after effects', 'scrum&kanban']
    }
    ,
    hobbies: [
        {
            label: 'basketball',
            emoji: '🏀'
        },
        {
            label: 'travel',
            emoji: '🗺️'
        },
        {
            label: 'board games',
            emoji: '🎲'
        },
        {
            label: 'games',
            emoji: '🎮'
        }
    ],
    portfolio: [
        {
            category: 'team',
            title: "Hellish English",
            description: 'Hellish English - an adaptive website for an English school. This was a team project. My role was Developer: I was responsible for the review, teacher, and guarantee sections and for making an adaptive design for them. I used HTML, SASS, and Parcel.',
            live: "https://anyanass.github.io/Repeta-followers/",
            source: "https://github.com/AnyaNass/Repeta-followers",
            image: hellish
        },
        {
            category: 'team',
            title: "Event Booster",
            description: 'Event Booster - an adaptive web application, designed to search events around the world. This was a team project. I was responsible for the header and pagination sections. For the pagination section, I used pure JS, and for making an adaptive design - SASS.',
            live: "https://alonastasyshyna.github.io/event-booster/",
            source: "https://github.com/AlonaStasyshyna/event-booster",
            image: eventbooster
        },
        {
            category: 'team',
            title: "Wallet",
            description: 'Wallet is a responsive app for people who want to do accounting. It was a team project developed in React. I was responsible for the statistics section, in terms of monthly transactions, as well as its responsive design.',
            live: "https://rostyslavderii.github.io/wallet-app/",
            source: "https://github.com/Rostyslavderii/wallet-app",
            image: wallet
        },
        {
            category: 'team',
            title: "Petly",
            description: 'Petly is the most interesting responsive app for people who want to find a pet or give it to good hands. It was a team project developed in React and NodeJs. I was responsible for the modal window for adding ads and developing the endpoint for the favorite section. After QA testing, all the bugs in my tasks were fixed.',
            live: "https://pet-support.vercel.app/",
            source: "https://github.com/LiliyaFaizulina/pet-support",
            image: petly
        },
        {
            category: 'commercial',
            title: "Erso Design",
            description: 'Erso Design is a responsive website for a customer. I used HTML SASS and JS to develop this web page. This website is fully responsive and also has a working feedback form.',
            live: "https://danil-bochkov.github.io/ERSO-portfolio/",
            source: "https://github.com/Danil-Bochkov/ERSO-portfolio",
            image: ersodesign
        },
        {
            category: 'commercial',
            title: "SOB_DESIGN",
            description: 'SOB_DESIGN is an adaptive portfolio site for a customer. This site is fully responsive and has two different working feedback forms. I used HTML SASS and JS to develop this web page.',
            live: "https://danil-bochkov.github.io/SOB_DESIGN-portfolio/",
            source: "https://github.com/Danil-Bochkov/SOB_DESIGN-portfolio",
            image: sobdesign
        },
        // {
        //     category: 'pet',
        //     title: "Phonebook",
        //     description: 'Phonebook is an app for people who want to store all their contacts. It was a solo project developed in React and NodeJs. I used Mongodb to develop all endpoints and the backend of the app. For the frontend I used react components for a clean code look.',
        //     live: "https://danil-bochkov.github.io/goit-react-hw-08-phonebook/",
        //     source: "https://github.com/Danil-Bochkov/goit-react-hw-08-phonebook",
        //     image: phonebook
        // },
        {
            category: 'pet',
            title: "Mbox",
            description: 'Media Box is a responsive app for people who want to find movies to watch and spend their evenings with. It is my solo project, developed in React, and I used a third-party API. You can choose movies through a search engine, look at the cast list, or read reviews from viewers.',
            live: "https://danil-bochkov.github.io/goit-react-hw-05-movies/#/",
            source: "https://github.com/Danil-Bochkov/goit-react-hw-05-movies",
            image: mbox
        },
        {
            category: 'pet',
            title: "ImageSearcher",
            description: 'Image Searcher is a simple responsive app to search for any image. This is my solo project developed in React and I used a third-party API. You can search for any image through the search engine and see it in a larger size with a click.',
            live: "https://danil-bochkov.github.io/goit-react-hw-04-image-finder/",
            source: "https://github.com/Danil-Bochkov/goit-react-hw-04-image-finder",
            image: imagefinder
        },
        {
            category: 'pet',
            title: "WebStudio",
            description: 'WebStudio Landing Page is a responsive website for a web studio. It was a solo project and my first project with HTML and CSS.',
            live: "https://danil-bochkov.github.io/goit-markup-hw-08/",
            source: "https://github.com/Danil-Bochkov/goit-markup-hw-08",
            image: webstudio
        }
    ]
}