import profileImg from '../assets/Profile-photo.png'

import { FaProjectDiagram } from 'react-icons/fa'

import {
    FaCode,
    FaDatabase,
    FaReact,
    FaGitAlt,
    FaSchool,
    FaScrewdriver
} from 'react-icons/fa6'


// ===============================
// Assets
// ===============================

export const assets = {
    profileImg
}


// ===============================
// Navbar
// ===============================

export const navMenu = [
    'Home',
    'Work',
    'Skills',
    'About',
    'Contact'
]


// ===============================
// Technical Skills
// ===============================

export const skillsData = [

    {
        icon: FaCode,
        title: 'Frontend',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Tailwind CSS'
        ]
    },

    {
        icon: FaReact,
        title: 'React.js',
        technologies: [
            'React Hooks',
            'React Router',
            'Context API',
            'Redux Toolkit',
            'Components'
        ]
    },

    {
        icon: FaScrewdriver,
        title: 'Backend',
        technologies: [
            'Node.js',
            'Express.js',
            'REST API',
            'HTTP',
            'Middleware'
        ]
    },

    {
        icon: FaDatabase,
        title: 'Database',
        technologies: [
            'MongoDB',
            'Mongoose',
            'Schemas',
            'CRUD',
            'Aggregation'
        ]
    },

    {
        icon: FaGitAlt,
        title: 'Tools',
        technologies: [
            'Git',
            'GitHub',
            'VS Code',
            'Vite',
            'npm'
        ]
    }

]


// ===============================
// Projects
// ===============================

export const projectData = [

    {
        title: 'Weather App',

        description:
            'A responsive weather application built with React.js that fetches weather information from a weather API and displays results based on the searched city.',

        image:
            'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop&q=80',

        tech: [
            'React.js',
            'JavaScript',
            'API',
            'Vite'
        ],

        github:
            'https://github.com/vivekpiwal2003/Weather-App'
    },


    {
        title: 'Login Portal',

        description:
            'A full-stack login and signup portal created to practice user authentication, routing, frontend-backend communication, and database integration.',

        image:
            'https://cdn.vectorstock.com/i/1000v/23/75/user-login-portal-vector-26792375.jpg',

        tech: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB'
        ],

        github:
            'https://github.com/vivekpiwal2003/login_portal'
    },


    {
        title: 'Hospital Management',

        description:
            'A hospital management interface built with React.js while practicing component-based development, reusable components, page structure, and modern UI development.',

        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xzsOIzuG_bKTHp1uJoIceNAqMwV6G9cdXtRDlzhGBQ&s=10',

        tech: [
            'React.js',
            'JavaScript',
            'CSS'
        ],

        github:
            'https://github.com/vivekpiwal2003/Hospital-management'
    },


    {
        title: 'Todo App',

        description:
            'A simple and interactive Todo application built with React.js to manage tasks and practice React state management and reusable components.',

        image:
            'https://i.ytimg.com/vi/G0jO8kUrg-I/sddefault.jpg',

        tech: [
            'React.js',
            'JavaScript',
            'CSS'
        ],

        github:
            'https://github.com/vivekpiwal2003/Todo-App-Using-React-'
    },


    {
        title: 'SSC Project',

        description:
            'My first web development project created using HTML and CSS, focused on practicing webpage structure, styling, layouts, and basic responsive design.',

        image:
            'https://www.nextias.com/resources/upsc/ssc-staff-selection-commission.webp',

        tech: [
            'HTML5',
            'CSS3'
        ],

        github:
            'https://github.com/vivekpiwal2003/SSC-Project-'
    }

]


// ===============================
// Profile Data
// ===============================

export const profileData = [

    {
        icon: FaCode,

        title: 'Language',

        technologies: [
            'JavaScript',
            'HTML',
            'CSS',
            'React'
        ]
    },


    {
        icon: FaSchool,

        title: 'Education',

        technologies: [
            'B.A. Pursuing',
            'IGNOU'
        ]
    },


    {
        icon: FaProjectDiagram,

        title: 'Projects',

        technologies: [
            'Weather App',
            'Login Portal',
            'Hospital Management',
            'Todo App'
        ]
    }

]

