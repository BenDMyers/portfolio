const workExperienceData = [
    {
        employer: 'USAA',
        location: 'Plano, TX',
        logo: './usaa.png',
        program: 'Full-Stack Engineer',
        // description: 'classes in both foo and bar',
        startDate: new Date(2018, 5),
        // bullets: [
        //     'Here we are', 'Dont turn away now'
        // ],
        titles: [
            {
                name: 'Scheduled Transactions',
                bullets: [
                    'Training in Kafka.'
                    // 'Developed and implemented React/Redux components for the redesign of the credit card, checking, and savings account summaries, which are critical pages for the bank that receive more than 60 million views a month.'
                ],
                startDate: new Date(2019, 0)
            },
            {
                name: 'Account Summary Redesign',
                bullets: [
                    'Developed and implemented React/Redux components for the redesign of the credit card, checking, and savings account summaries, which are critical pages for the bank that receive more than 60 million views a month.',
                    'Championed web accessibility on our products.',
                    'Collaborated in an Agile/Scrum environment.'
                ],
                startDate: new Date(2018, 5),
                endDate: new Date(2018, 11)
            }
        ]
    },
    {
        employer: 'USAA',
        location: 'Plano, TX',
        logo: './usaa.png',
        program: 'IT Intern',
        // description: 'classes in both foo and bar',
        startDate: new Date(2017, 4),
        endDate: new Date(2017, 7),
        bullets: [
            'Modularized and automated an internal product health dashboard by integrating our API with the web application using the React and Redux frameworks.',
            'Operated in a team with four other interns using the Agile workflow, providing weekly demos.'
        ]
    },
    {
        employer: 'LASSO Center',
        location: 'Stillwater, OK',
        logo: './lasso.png',
        program: 'Computer Science Tutor',
        // description: 'classes in both foo and bar',
        startDate: new Date(2016, 0),
        endDate: new Date(2016, 11),
        bullets: [
            'Assisted Oklahoma State University students in their understanding of their Computer Science I and Computer Science II classes.'
        ]
    }
];

export default workExperienceData;