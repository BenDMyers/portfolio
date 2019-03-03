import React from 'react';

import socials from '../../data/social.json';
import SocialItem from './SocialItem';

const SocialList = () => {
    return socials.map(social => <SocialItem key={social.name} {...social} />);
}

export default SocialList;