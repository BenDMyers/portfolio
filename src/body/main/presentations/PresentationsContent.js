import React from 'react';
import {Header} from 'semantic-ui-react';

import PresentationItem from './PresentationItem';
import presentationData from '../../../data/presentationData';

const PresentationsContent = () => {
    document.title = 'Presentations | Ben Myers'
    const presentations = presentationData.reduce((presList=[], presentation, index) => {
        presList.push(<PresentationItem key={presentation.name} {...presentation} />);
        if(index < presentationData.length - 1) {
            presList.push(<hr />);
        }
        return presList;
    }, []);

    return (
        <div className="pres-content main-content-section" role="main">
            <Header as='h2'>Things I've said</Header>
            {presentations}
        </div>
    );
}

export default PresentationsContent;