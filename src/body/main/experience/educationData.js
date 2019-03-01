const educationData = [
    {
        school: 'Oklahoma State University',
        location: 'Stillwater, OK',
        schoolLogo: './osu.png',
        program: 'Bachelor of Science, Computer Science',
        // description: 'classes in both foo and bar',
        startDate: new Date(2014, 7),
        endDate: new Date(2018, 4),
        gpa: 3.22,
        // bullets: [
        //     'Here we are', 'Dont turn away now'
        // ],
        honors: [
            {
                name: 'Outstanding Service Award',
                awardedBy: 'College of Arts and Sciences',
                description: 'Awarded to recognize dedication to, and support of, the Computer Science Department through efforts in the student chapter of the Association for Computing Machinery, representing the department to prospective students, and stepping in as a substitute teacher for Computer Science I twice.',
                date: new Date(2018, 3)
            }
        ]
    }
];

export default educationData;