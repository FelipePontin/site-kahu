import React, { useEffect } from "react"

import styles from './CardInfo.module.css'

import Button from "../Button/Button"

import AOS from 'aos'
import 'aos/dist/aos.css'

const CardInfo = ({ title, subtitle, textButton, icone }) => {

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    return (
        <section className={styles.cardInfo} data-aos='fade-up'>
            <h1 className={styles.cardInfo__title}>{title}</h1>
            <p className={styles.cardInfo__subtitle}>{subtitle}</p>
            <a href='https://api.whatsapp.com/send?phone=5511971107188&text=Olá!'>
                <Button
                    text={textButton}
                    icon={icone}
                />
            </a>
        </section>
    )
}

export default CardInfo
