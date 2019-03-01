import React, {Component} from 'react';

import socials from './social.json';
import SocialItem from './SocialItem';

const SocialList = () => {
    return socials.map(social => <SocialItem {...social} />);
}

export default SocialList;