import React from 'react';

const Duration = ({startDate, endDate, className}) => {
    const screenreaderDateConfig = {month: 'long', year: 'numeric'};
    const dateConfig = {month: 'short', year: 'numeric'};

    const toString = date => date.toLocaleDateString('en-US', dateConfig);
    const toScreenreader = date => date.toLocaleDateString('en-US', screenreaderDateConfig);

    let screenreaderDuration = '';
    let duration = '';

    if(startDate) {
        screenreaderDuration = `${toScreenreader(startDate)} to `;
        duration = `${toString(startDate)} - `;

        if(!endDate) {
            screenreaderDuration += 'present';
            duration += 'present';
        }
    }

    if(endDate) {
        screenreaderDuration += toScreenreader(endDate);
        duration += toString(endDate);
    }

    return (<>
        <span className="screenreader">{screenreaderDuration}</span>
        <span className={`duration ${className || ''}`}>{duration}</span>
    </>);
};

export default Duration;