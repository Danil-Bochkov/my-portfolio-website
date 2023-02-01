import self from '../images/me.png'
import webstudio from "../images/webstudio.png"
import imagefinder from "../images/imagefinder.png"
import hellish from "../images/hellish.png"
import eventbooster from "../images/eventbooster.png"
import wallet from "../images/wallet.png"
import petly from "../images/petly.png"
import sobdesign from "../images/sob-design.png"
import ersodesign from "../images/ersodesign.png"

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
            text: "Open to work"
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
            description: 'Some text about project',
            live: "https://anyanass.github.io/Repeta-followers/",
            source: "https://github.com/AnyaNass/Repeta-followers",
            image: hellish
        },
        {
            category: 'team',
            title: "Event Booster",
            description: 'Some text about project',
            live: "https://alonastasyshyna.github.io/event-booster/",
            source: "https://github.com/AlonaStasyshyna/event-booster",
            image: eventbooster
        },
        {
            category: 'team',
            title: "Wallet",
            description: 'Some text about project',
            live: "https://rostyslavderii.github.io/wallet-app/",
            source: "https://github.com/Rostyslavderii/wallet-app",
            image: wallet
        },
        {
            category: 'team',
            title: "Petly",
            description: 'Some text about project',
            live: "https://pet-support.vercel.app/",
            source: "https://github.com/LiliyaFaizulina/pet-support",
            image: petly
        },
        {
            category: 'commercial',
            title: "Erso Design",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/ERSO-portfolio/", 
            source: "https://github.com/Danil-Bochkov/ERSO-portfolio",
            image: ersodesign
        },
        {
            category: 'commercial',
            title: "SOB_DESIGN",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/SOB_DESIGN-portfolio/",
            source: "https://github.com/Danil-Bochkov/SOB_DESIGN-portfolio",
            image: sobdesign
        },
        {
            category: 'pet',
            title: "Phonebooker",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/goit-react-hw-08-phonebook/",
            source: "https://github.com/Danil-Bochkov/goit-react-hw-08-phonebook",
            // image: mock3
        },
        {
            category: 'pet',
            title: "Mbox",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/goit-react-hw-05-movies/#/",
            source: "https://github.com/Danil-Bochkov/goit-react-hw-05-movies",
            // image: mock4
        },
        {
            category: 'pet',
            title: "ImageSearcher",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/goit-react-hw-04-image-finder/",
            source: "https://github.com/Danil-Bochkov/goit-react-hw-04-image-finder",
            image: imagefinder
        },
        {
            category: 'pet',
            title: "WebStudio",
            description: 'Some text about project',
            live: "https://danil-bochkov.github.io/goit-markup-hw-08/", 
            source: "https://github.com/Danil-Bochkov/goit-markup-hw-08",
            image: webstudio
        }
    ]
}