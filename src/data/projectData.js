const projectData = [
    {
        name: 'This Portfolio!',
        tagline: '★ You are here',
        description: 'This site was built by hand as a way to keep using what I\'ve learned in web development. If you have any feedback for how I can improve, please let me know!',
        bullets: [
            'Implemented with React and hosted on Heroku.',
            'Designed with web accessibility in mind.'
        ],
        links: {
            demo: 'https://www.benmyers.dev',
            repo: 'https://github.com/BenDMyers/portfolio'
        },
        image: './portfolio_logo.png'
    },
    {
        name: 'MoodTrackr',
        tagline: 'Hacklahoma 2018\'s Second Place winner',
        description: 'An application built in a team of four over 24 hours to gauge emotion over time through the user\'s webpage.',
        bullets: [
            'Implemented a front-end web application built with React that integrated with a REST API to an AI model built with Python and Keras.',
            'Awarded Second Place and Best Use of Amazon Web Services.'
        ],
        links: {
            site: 'https://devpost.com/software/moodtrackr-1r2pju',
            repo: 'https://github.com/MoodTrackr/site'
        },
        image: 'https://avatars1.githubusercontent.com/u/37024509?s=200&v=4'
    },
    {
        name: 'Befunge Visualizer',
        tagline: 'Local Hack Day 2017 submission',
        description: 'A desktop application built over 24 hours that accepts Befunge scripts and displays the execution in an interactive interface.',
        bullets: [
            'Developed using the Electron framework.',
            'Designed to accept custom specs for fungeoids.'
        ],
        links: {
            site: 'https://devpost.com/software/befunge-visualizer',
            repo: 'https://github.com/BenDMyers/BefungeVisualizer'
        },
        image: './bv.jpg'
    },
    {
        name: 'Merge',
        tagline: 'A "social" network for Computer Science students',
        description: 'Merge users can create posts that include text, code, and pictures, and they can comment on others\' posts. They can join groups pertaining to their interests, and can chat with individual users or with entire groups.',
        bullets: [
            'Created for the Advanced MIS Programming class at Oklahoma State University.',
            'Built with the ASP.NET framework and good, old-fashioned HTML and CSS.'
        ],
        links: {
            demo: 'http://csokstatemerge.azurewebsites.net/',
            repo: 'https://github.com/BenDMyers/Merge',
            video: 'https://www.youtube.com/watch?v=4O2iaATjFRU'
        },
        image: './merge_logo.png'
    }
];

export default projectData;