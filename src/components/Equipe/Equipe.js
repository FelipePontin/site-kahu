import React from "react"

import styles from './Equipe.module.css'

import Title from '../../components/Title/Title'

import Nicole from '../../images/Equipe/Nicole.png'
import Natizinha from '../../images/Equipe/Natizinha.png'
import Caio from '../../images/Equipe/Caio.png'
import Lari from '../../images/Equipe/Lari.png'
import Mari from '../../images/Equipe/Mari.png'
import Nati from '../../images/Equipe/Nati.png'
import Yas from '../../images/Equipe/Yas.png'
import Rafa from '../../images/Equipe/Rafa.png'
import Bia from '../../images/Equipe/Bia.png'
import Anna from '../../images/Equipe/Anna.png'
import Luma from '../../images/Equipe/Luma.png'
import Gi from '../../images/Equipe/Gi.png'
import GiVet from '../../images/Equipe/Gi Veterinária.png'


const Equipe = () => {
    return (
        <section className={styles.equipe}>
            <Title title='Nossa Equipe' />
            <p className={styles.equipe__title}>Profissionais apaixonados e qualificados para cuidar do seu melhor amigo!</p>
            <div className={styles.equipe__team}>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Yas} alt='' />
                    <p className={styles.equipe__name}>Yas</p>
                    <p className={styles.equipe__description}>Supervisora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Anna} alt='' />
                    <p className={styles.equipe__name}>Anna</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Bia} alt='' />
                    <p className={styles.equipe__name}>Bia</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Caio} alt='' />
                    <p className={styles.equipe__name}>Caio</p>
                    <p className={styles.equipe__description}>Monitor</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Gi} alt='' />
                    <p className={styles.equipe__name}>Gi</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Luma} alt='' />
                    <p className={styles.equipe__name}>Luma</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Nati} alt='' />
                    <p className={styles.equipe__name}>Nati</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Nicole} alt='' />
                    <p className={styles.equipe__name}>Nicole</p>
                    <p className={styles.equipe__description}>Monitora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Rafa} alt='' />
                    <p className={styles.equipe__name}>Rafa</p>
                    <p className={styles.equipe__description}>Monitor</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Natizinha} alt='' />
                    <p className={styles.equipe__name}>Natizinha</p>
                    <p className={styles.equipe__description}>Monitora e Banhista</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Lari} alt='' />
                    <p className={styles.equipe__name}>Lari</p>
                    <p className={styles.equipe__description}>Banhista e Tosadora</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={GiVet} alt='' />
                    <p className={styles.equipe__name}>Gi</p>
                    <p className={styles.equipe__description}>Veterinária</p>
                </div>
                <div className={styles.equipe__people}>
                    <img className={styles.equipe__image} src={Mari} alt='' />
                    <p className={styles.equipe__name}>Mari</p>
                    <p className={styles.equipe__description}>Recepcionista</p>
                </div>
            </div>
        </section>
    )
}

export default Equipe
