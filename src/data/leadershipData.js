import {MAY, AUGUST} from '../utils/Duration';

const leadershipData = [
    {
        organization: 'Association for Computing Machinery, Oklahoma State University',
        role: 'President',
        logo: './acm.png',
        startDate: new Date(2016, AUGUST),
        endDate: new Date(2018, MAY),
        bullets: [
            'Organized meetings that explored technologies and professional aspects of the computer science field.',
            'Facilitated hackathons, game jams, and programming competitions.',
            'Volunteered at a local elementary school, training fourth- and fifth-graders to program in JavaScript.'
        ]
    },
    {
        organization: 'Boy Scouts of America',
        role: 'Eagle Scout',
        logo: './eagle.gif',
        endDate: new Date(2014, AUGUST),
        bullets: [
            'Prepared and coordinated the improvement of a local fire department’s veteran memorial for an Eagle project.',
            'Led STEM and disability advocacy programs at summer camps and winter camps.',
            'Vigil Honor member of the Order of the Arrow, Scoutings\'s National Honor Society.'
        ]
    }
];

export default leadershipData;