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
    }, {
		name: 'Blog',
		tagline: 'Empowering web developers to build a more accessible and inclusive web',
		description: 'Popular posts include <a href="https://blog.benmyers.dev/clickable-divs/">How (Not) to Build a Button</a>, <a href="https://blog.benmyers.dev/accessibility-tree/">The Accessibility Tree</a>, and <a href="https://blog.benmyers.dev/css-can-influence-screenreaders/">CSS Can Influence Screenreaders</a>.',
		bullets: [
			'Leverages GatsbyJS for static site generation.',
			'Posts have been shared by Deque Systems, the A11y Weekly and CSS Weekly newsletters, and more.'
		],
		links: {
			demo: 'https://blog.benmyers.dev',
			repo: 'https://github.com/BenDMyers/blog'
		},
		image: './portfolio_logo.png'
	},
    {
        name: 'What Should Ben Watch Next?',
        tagline: 'Recommend movies I\'ve missed out on',
        description: 'Search for, suggest, and vote on your favorite classic movies for me to watch, and see how I\'m doing.',
        bullets: [
            'Built with React. Powered by an Express API with a MongoDB database.',
            'Leverages The Movie Database for real movie data and posters.'
        ],
        links: {
            demo: 'https://bdm-watchlist-ui.herokuapp.com/',
            repo: 'https://github.com/BenDMyers/Movie_List'
        },
        image: './watchlist.png'
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