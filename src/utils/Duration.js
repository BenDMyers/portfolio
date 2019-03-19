import React from 'react';
import PropTypes from 'prop-types';

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

Duration.propTypes = {
    className: PropTypes.string,
    endDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date)
}

const [JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER] = Array(12).keys();

export default Duration;
export {JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER};