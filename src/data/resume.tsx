import { Icons } from '@/components/ui/icons';
import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
} from 'lucide-react';

export const DATA = {
    name: 'Clark Walrath',
    initials: 'CW',
    location: 'San Diego, CA',
    locationLink: 'https://www.google.com/maps/place/sandiego',
    description:
        'Developer turned entrepreneur, I love building solutions and helping others.',
    summary:
        "I'm a passionate developer who transitioned into entrepreneurship. My journey began with creating games, and now I focus on blending creativity and code to solve real-world problems. Whether I'm prototyping a new idea or collaborating with others, I bring energy, curiosity, and a love for building.",
    avatarUrl: 'https://github.com/itscl4rk.png',
    skills: [
        'Git',
        'GitHub',
        'JavaScript',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
    ],
    navbar: [
        { name: 'Home', link: '/', active: true },
        { name: 'About', link: '/about', active: true },
        { name: 'Projects', link: '/projects', active: true },
        { name: 'Contact', link: '/contact', active: true },
    ],
    contact: {
        email: '44walrath@gmail.com',
        social: {
            GitHub: {
                name: 'GitHub',
                handle: 'itscl4rk',
                url: 'https://dub.sh/clark-github',
                icon: GithubIcon,

                active: true,
            },
            LinkedIn: {
                name: 'LinkedIn',
                handle: 'itscl4rk',
                url: 'https://dub.sh/dillion-linkedin',
                icon: LinkedinIcon,

                active: false,
            },
            X: {
                name: 'X',
                handle: 'itscl4rk',
                url: 'https://dub.sh/clark-twitter',
                icon: Icons.x,

                active: true,
            },
            Youtube: {
                name: 'Youtube',
                handle: 'itscl4rk',
                url: 'https://dub.sh/clark-youtube',
                icon: YoutubeIcon,
                active: true,
            },
            Instagram: {
                name: 'Instagram',
                handle: '44walrath',
                url: 'https://dub.sh/clark-instagram',
                icon: InstagramIcon,

                active: false,
            },
            Itch: {
                name: 'Itch',
                handle: 'itscl4rk',
                url: 'https://dub.sh/clark-itch',
                icon: Icons.itch,
                active: true,
            },
        },
    },
    work: [
        {
            company: 'Atomic Finance',
            href: 'https://atomic.finance',
            badges: [],
            location: 'Remote',
            title: 'Bitcoin Protocol Engineer',
            logoUrl: '/placeholder.png',
            start: 'May 2021',
            end: 'Oct 2022',
            description:
                'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
        },
        {
            company: 'Atomic Finance',
            href: 'https://atomic.finance',
            badges: [],
            location: 'Remote',
            title: 'Bitcoin Protocol Engineer',
            logoUrl: '/placeholder.png',
            start: 'May 2021',
            end: 'Oct 2022',
            description:
                'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
        },
    ],
    education: [
        {
            school: 'Buildspace',
            href: 'https://buildspace.so',
            degree: 's3, s4, sf1, s5',
            logoUrl: '/placeholder.png',
            start: '2023',
            end: '2024',
        },
        {
            school: 'Buildspace',
            href: 'https://buildspace.so',
            degree: 's3, s4, sf1, s5',
            logoUrl: '/placeholder.png',
            start: '2023',
            end: '2024',
        },
    ],
    projects: [
        {
            id: 'clay-games',
            title: 'Clay Games',
            description:
                "Clay Games is a collection of small, experimental web games. They're weird. They're fun. They're sometimes broken on purpose.",
            image: 'https://images.unsplash.com/photo-1564091422888-15640d9709a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: '/projects/clay-games',
            github: 'https://github.com/itscl4rk/clay-games',
            website: '',
            technologies: [
                'React',
                'Vite',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
            ],
        },
    ],
    games: [],
} as const;
