import React from 'react'
import testImage from '../assets/AZ-400_BlogImage.png'
import './card.css'

interface CardProps {
    title: string
    img: string
    key: number
    onClick?: () => void
}

const Card = (props: CardProps) => {
    return (
        <div className="card" key={props.key} onClick={props.onClick}>
            <div className="card__body">
                <img src={props.img} className="card__image" />
                <h2 className="card__title">{props.title}</h2>
            </div>
        </div>
    )
}

export default Card
