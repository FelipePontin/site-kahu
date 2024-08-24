import React from "react"

import styles from './Banner.module.css'

import ImagemBanner from '../../images/ImagemBanner.png'

import Title from "../Title/Title"
import Button from "../Button/Button"

const Banner = () => {
    return (
        <section className={styles.banner} id='inicio'>
            <div className={styles.banner__division}>
                <Title title={'O Lar Do Seu Pet'} />
                <p className={styles.banner__subtitle}>O lugar ideal para o seu cãozinho se divertir e receber todo o cuidado e carinho que merece.</p>
                <div className={styles.banner__botao}>
                    <a href='https://api.whatsapp.com/send?phone=5511971107188&text=Olá!'>
                        <Button text={'VEM PRA KAHU'} icon={'IoPaw'} />
                    </a>
                </div>

            </div>
            <img className={styles.banner__image} src={ImagemBanner} />
        </section>
    )
}

export default Banner
