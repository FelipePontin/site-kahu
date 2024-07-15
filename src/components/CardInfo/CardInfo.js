import React from "react"

import styles from './CardInfo.module.css'

import Button from "../Button/Button"

const CardInfo = ({title, subtitle, textButton, icone}) => {
    return (
        <section className={styles.cardInfo}>
            <h1 className={styles.cardInfo__title}>{title}</h1>
            <p className={styles.cardInfo__subtitle}>{subtitle}</p>
            <Button 
                text={textButton}
                icon={icone}
            />
        </section>
    )
}

export default CardInfo
