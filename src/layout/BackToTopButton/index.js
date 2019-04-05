import React, {useState} from 'react';
import {Button} from 'semantic-ui-react';

import './backToTopButton.styles.css';

/**
 * A hidden button that displays when focused and, when clicked, focuses the user on the navbar.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/layout/BackToTopButton.md}
 */
const BackToTopButton = () => {
    const [focused, setFocused] = useState(false);

    const jump = () => {document.querySelector('div[role="navigation"] a:first-child').focus();}
    const handleFocus = () => {setFocused(true);}
    const handleBlur = () => {setFocused(false);}

    const classes = focused ? '' : 'screenreader';

    return <Button id="backToTop" className={classes} onClick={jump} onFocus={handleFocus} onBlur={handleBlur}>Back to Top</Button>
}

export default BackToTopButton;