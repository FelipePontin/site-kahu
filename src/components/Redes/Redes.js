import React, { useEffect } from "react"

import styles from './Redes.module.css'

import Title from "../Title/Title"

import { FaInstagram, FaTiktok } from "react-icons/fa";

const Redes = () => {

    return (
        <section className={styles.redes}>
            <Title title='Nos acompanhe nas redes sociais' className={styles.redes__title} />
            <div className={styles.redes__container}>
                <div className={`${styles.redes__division} ${styles.redes__instagram}`}>
                    <FaInstagram className={styles.redes__icon} />
                    <p className={styles.redes__name}>Instagram</p>
                </div>
                <div className={`${styles.redes__division} ${styles.redes__tiktok}`}>
                    <FaTiktok className={styles.redes__icon} />
                    <p className={styles.redes__name}>Tiktok</p>
                </div>

            </div>
        </section>
    )
}

export default Redes
