import React from 'react'
import cx from './cx';
import Accordion1 from './Accordion1';

const Accordions = () => {
    return (
        <div className={cx('Accordions')}>
            <h2>아코디언</h2>
            <Accordion1/>
        </div>
    )
}

export default Accordions;