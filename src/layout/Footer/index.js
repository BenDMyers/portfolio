import React from 'react';
import {Segment} from 'semantic-ui-react';

import './footer.styles.css';

/**
 * A footer inside a `Segment` for that nice panel appearance.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/layout/Footer.md}
 */
const Footer = () => {
    return (
        <footer className="footer-panel">
            <Segment>Like this site?&nbsp;
                <a href="https://github.com/BenDMyers/portfolio">You can find the code on GitHub.</a>
            </Segment>
        </footer>
    );
}

export default Footer;