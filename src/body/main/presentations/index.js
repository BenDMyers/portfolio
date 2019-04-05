import React from 'react';
import {Header} from 'semantic-ui-react';

import './presentations.styles.css';
import PresentationItem from './PresentationItem';
import presentationData from '../../../data/presentationData';

/**
 * A display of presentations given. Contents of the portfolio's `/presentations` route.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/presentations/PresentationsContent.md#PresentationsContent}
 */
const PresentationsContent = () => {
    document.title = 'Presentations | Ben Myers'
    const presentations = presentationData.reduce((presList=[], presentation, index) => {
        presList.push(<PresentationItem key={presentation.name} {...presentation} />);
        if(index < presentationData.length - 1) {
            presList.push(<hr key={`hr ${index}`} />);
        }
        return presList;
    }, []);

    return (
        <div className="pres-content main-content-section" role="main">
            <Header as='h2'>Things I&apos;ve said</Header>
            {presentations}
        </div>
    );
}

export default PresentationsContent;