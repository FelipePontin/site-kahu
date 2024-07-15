import React from "react"

import styles from './Rodape.module.css'

import ImagemBanner from '../../images/ImagemBanner.png'

const Rodape = () => {

    return (
        <section className={styles.rodape}>
            <div className={styles.rodape__container}>
                <div className={styles.rodape__divison}>
                    <p className={styles.rodape__titulo}>Como chegar?</p>
                    <p className={styles.rodape__endereco}>Rua Dr. Gabriel dos Santos, 55 - Higienópolis - São Paulo, SP </p>
                    <p className={styles.rodape__info}>Temos estacionamento no local</p>
                    <p>Como chegar?</p>
                    <p>Whatsapp: (11) 97110-7188</p>
                </div>
                <img className={styles.banner__image} src={ImagemBanner} />
            </div>
        </section>
    )
}

export default Rodape
