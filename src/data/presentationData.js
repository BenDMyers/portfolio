import { JANUARY, APRIL, NOVEMBER, DECEMBER } from '../utils/Duration';

const presentationData = [
    {
        name: 'Accessibility Is Compliance',
        organization: 'ReactJS Dallas',
        logo: './rjsd.png',
        description:
            'A brief foray into the American case law surrounding web accessibility, presented to the ReactJS Dallas meetup at Call-Em-All.',
        links: {
            slides: 'https://dallas.benmyers.dev'
        },
        date: new Date(2019, NOVEMBER),
        videoUrl: 'https://www.youtube.com/watch?v=ikoYin3Uiv8',
        tags: ['dev', 'disability']
    },
    {
        name: 'React Codelab | Local Hack Day 2018',
        organization:
            'Association for Computing Machinery, Oklahoma State University',
        logo: './acm.png',
        description:
            'A livestream covering the basics of front-end web development with React in an hour, put on for students at my alma mater for Local Hack Day 2018.',
        date: new Date(2018, DECEMBER),
        videoUrl: 'https://www.youtube.com/watch?v=aRZWEdJkHDs',
        tags: ['dev']
    },
    {
        name: 'Codelab: Desktop Applications with Electron',
        organization:
            'Association for Computing Machinery, Oklahoma State University',
        logo: './acm.png',
        description:
            'A codelab teaching the basics of building cross-platform desktop applications with Electron, put on for the Association of Computing Machinery at Oklahoma State University.',
        date: new Date(2018, JANUARY),
        videoUrl: 'https://www.youtube.com/watch?v=RVedymcdsbU',
        tags: ['dev']
    },
    {
        name: 'The Disability Conversation',
        organization: 'TEDxOStateU',
        logo:
            'https://i1.wp.com/yukaichou.com/wp-content/uploads/2017/04/tedx-logo.png?fit=660%2C196&ssl=1',
        description:
            "A TEDx talk on how the ways we do or don't talk about disability matter. Presented at the TEDxOStateU conference in Stillwater, OK in 2015.",
        date: new Date(2015, APRIL),
        videoUrl: 'https://www.youtube.com/watch?v=ccIAqPjwKcY',
        tags: ['disability']
    }
];

export default presentationData;
