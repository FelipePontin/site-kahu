import React from "react"

import styles from './Equipe.module.css'

import Title from '../../components/Title/Title'

import Leusten from '../../images/Equipe/1.svg'

const Equipe = () => {
    return (
        <section className={styles.equipe}>
            <Title title='Nossa equipe' />
            <p className={styles.equipe__title}>Profissionais Apaixonados e Qualificados para Cuidar do Seu Melhor Amigo</p>
            <div className={styles.equipe__team}>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Leusten} alt='' />
                    <p className={styles.equipe__name}>Leusten</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Leusten} alt='' />
                    <p className={styles.equipe__name}>Leusten</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Leusten} alt='' />
                    <p className={styles.equipe__name}>Leusten</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
            </div>
        </section>
    )
}

export default Equipe
