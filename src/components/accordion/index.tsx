import React from 'react'
import cx from './cx';
import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';
import Accordion3 from './Accordion3';
import Accordion4 from './Accordion4';

const Accordions = () => {
    return (
        <div className={cx('Accordions')}>
            <h2>아코디언</h2>
            <Accordion1/>
            <Accordion2/>
            <Accordion3/>
            <Accordion4/>
        </div>
    )
}

export default Accordions;