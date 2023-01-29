import self from '../images/me.png'
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

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
    bio: "Hi!! I'm Danny. I'm a Full Stack Developer. I studied CompSci at National University of Radioelectronics. To be honest, I dedicate myself to working on every task. I try to learn everything new because web development is very interesting to me. I believe that it is important for a person that the site or application he visited was very pleasant and without bugs. I also know how to fit well into a team because I am an open and kind person. I am very focused and confident. You should hire me!",
    skills:
        {
            proficientWith: ['html5', 'css3', 'sass', 'javascript', 'react', 'nodejs', 'mongodb'],
            exposedTo: ['typescript', 'react native', 'angular', 'vuejs']
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
            title: "Project 1",
            description: 'Some text about project',
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell",
            // image: mock1
        },
        {
            title: "Project 2",
            description: 'Some text about project',
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock2
        },
        {
            title: "Project 3",
            description: 'Some text about project',
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock3
        },
        {
            title: "Project 4",
            description: 'Some text about project',
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock4
        },
        {
            title: "Project 5",
            description: 'Some text about project',
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock5
        }
    ]
}