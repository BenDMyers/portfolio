import React from 'react';

import socials from '../../data/social.json';
import SocialItem from './SocialItem';

/**
 * A component for displaying cards of social media links.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/sidebar/SocialList.md#SocialList}
 */
const SocialList = () => {
    return socials.map(social => <SocialItem key={social.name} {...social} />);
}

export default SocialList;