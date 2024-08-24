import React from "react"

import styles from './Consultar.module.css'

import Button from "../Button/Button"

const Consultar = () => {
    return (
        <section className={styles.consultar}>
            <h1 className={styles.consultar__title}>Consultar Preços</h1>
            <a href='https://api.whatsapp.com/send?phone=5511971107188&text=Olá!'>
                <Button
                    text={'Lista De Preços'}
                    icon={'IoPaw'}
                />
            </a>
        </section>
    )
}

export default Consultar
