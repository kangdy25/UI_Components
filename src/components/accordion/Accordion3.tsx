import React, { useState } from 'react'
import data from './data'
import cx from './cx'

const AccordionItem = ({id, title, description, current, toggle} : {id: string, title: string, description: string, current: boolean, toggle: ()=>void}) => {
    return (
        <li className={cx('item', 'item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const Accordion3 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);
    const toggleItem = (id: string)=>()=>{
        setCurrentId(prev => prev === id ? null : id)
    }
    return (
        <div>
            <h3>#3. React (Animation) - Accordion</h3>
            <ul className={cx('container')}>
                {data.map((i)=>(
                    <AccordionItem {...i} key={i.id} current={currentId === i.id} toggle={toggleItem(i.id)}/>
                ))}
            </ul>
        </div>
    )
}

export default Accordion3