import React, { useState } from 'react'
import data from './data'
import cx from './cx'

const AccordionItem = ({id, title, description} : {id: string, title: string, description: string}) => {
    return (
        <li className={cx('item', 'item5')} key={id}>
            <input type="radio" name='accordion' id={id} className={cx('input')}/>
            <label htmlFor={id} className={cx('tab')}>{title}</label>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const Accordion5 = () => {
    return (
        <div>
            <h3>#5. React (HTML - radio) - Accordion</h3>
            <ul className={cx('container')}>
                {data.map((i)=>(
                    <AccordionItem {...i} key={i.id} />
                ))}
            </ul>
        </div>
    )
}

export default Accordion5