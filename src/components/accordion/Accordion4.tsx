import React, { useState } from 'react'
import data from './data'
import cx from './cx'
import VanillaWrapper from '../vanillaWrapper'

const itemBuilder = ({id, title, description } : {id: string, title: string, description: string }) => {
    const $li = document.createElement('li');
    $li.classList.add(cx('item'), cx('item3'))
    $li.setAttribute('data-id', id);

    const $tab = document.createElement('div');
    $tab.classList.add(cx('tab'));
    $tab.textContent = title;

    const $description = document.createElement('div');
    $description.classList.add(cx('description'));
    $description.textContent = description;

    $li.append($tab, $description);
    return $li;
}

const initiator = (wrapper: HTMLDivElement) => {
    let currentId : string | null = null;
    const $h3 = document.createElement('h3');
    $h3.innerText = '#4. Vanila JavaScript';

    const $ul = document.createElement('ul');
    $ul.classList.add(cx('container'));

    const handleClickTab = (e : Event) => {
        const $el = e.target as HTMLElement;

        if (!$el.classList.contains(cx('tab'))) return;
        const targetId = $el.parentElement!.dataset.id;

        if (!targetId) return;
        currentId = targetId === currentId ? null : targetId;

        $items.forEach($item => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id)
        })
    }
    $ul.addEventListener('click', handleClickTab)

    const $items = data.map(itemBuilder);
    $ul.append(...$items)

    wrapper.append($h3, $ul);
    ($items[0].children[0] as HTMLElement).click;
}

const Accordion4 = () => <VanillaWrapper initiator={initiator} />
export default Accordion4