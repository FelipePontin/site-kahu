import React from "react"

import styles from './Banner.module.css'

import ImagemBanner from '../../images/ImagemBanner.png'

import Title from "../Title/Title"
import Button from "../Button/Button"

const Banner = () => {
    return (
        <section className={styles.banner} id='inicio'>
            <div className={styles.banner__division}>
                <Title title={'O lar do seu pet!'}/>
                <p className={styles.banner__subtitle}>O lugar ideal para o seu cãozinho se divertir e receber todo o cuidado e carinho que merece.</p>
                <Button text={'VEM PRA KAHU'} icon={'IoPaw'}/>
            </div>
            <img className={styles.banner__image} src={ImagemBanner} />
        </section>
    )
}

export default Banner
