import React from 'react';
import s from './card.module.scss';

const Card = ({ img, name, info = [], onClick }) => {
    return (
        <div className={s.card} onClick={onClick}>
            <img className={s.card__img} src={img} alt={`${name} flag`} />
            <div className={s.card__body}>
                <h3 className={s.card__title}>{name}</h3>
                <ul className={s.card__list}>
                    {info.map(el =>
                        <li className={s.card__item} key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card
