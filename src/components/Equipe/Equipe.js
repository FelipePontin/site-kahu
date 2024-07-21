import React from "react"

import styles from './Equipe.module.css'

import Title from '../../components/Title/Title'

import Amanda from '../../images/Equipe/Amanda.jpg'
import Nicole from '../../images/Equipe/Nicole.jpg'
import Natizinha from '../../images/Equipe/Natizinha.jpg'
import Caio from '../../images/Equipe/Caio.jpg'
import Lari from '../../images/Equipe/Lari.jpg'
import Mari from '../../images/Equipe/Mari.jpg'
import Nati from '../../images/Equipe/Nati.jpg'

const Equipe = () => {
    return (
        <section className={styles.equipe}>
            <Title title='Nossa equipe' />
            <p className={styles.equipe__title}>Profissionais Apaixonados e Qualificados para Cuidar do Seu Melhor Amigo</p>
            <div className={styles.equipe__team}>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Amanda} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Nicole} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Natizinha} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Caio} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Lari} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Mari} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Nati} alt='' />
                    <p className={styles.equipe__name}>Leo</p>
                    <p className={styles.equipe__description}>Marketing Digital</p>
                </div>
            </div>
        </section>
    )
}

export default Equipe
