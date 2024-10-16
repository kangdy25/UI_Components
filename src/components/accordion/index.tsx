import React from 'react'
import cx from './cx';
import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';

const Accordions = () => {
    return (
        <div className={cx('Accordions')}>
            <h2>아코디언</h2>
            <Accordion1/>
            <Accordion2/>
        </div>
    )
}

export default Accordions;