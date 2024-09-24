import React, { useEffect } from "react"

import styles from './Redes.module.css'

import Title from "../Title/Title"

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Redes = () => {

    useEffect(() => {
        AOS.init({ duration: 500 })
      }, [])

    return (
        <section className={styles.redes} data-aos='fade-up'>
            <Title title='Nos Acompanhe Nas Redes Sociais' className={styles.redes__title} />
            <div className={styles.redes__container}>
                <a href='https://www.instagram.com/kahu.larpet/'>
                    <div className={`${styles.redes__division} ${styles.redes__instagram}`}>
                        <FaInstagram className={styles.redes__icon} />
                        <p className={styles.redes__name}>Instagram</p>
                    </div>
                </a>
                <a href='https://www.tiktok.com/@kahu.larpet'>
                    <div className={`${styles.redes__division} ${styles.redes__tiktok}`}>
                        <FaTiktok className={styles.redes__icon} />
                        <p className={styles.redes__name}>Tiktok</p>
                    </div>
                </a>
                <a href='https://www.youtube.com/@kahu.larpet'>
                    <div className={`${styles.redes__division} ${styles.redes__youtube}`}>
                        <FaYoutube className={styles.redes__icon} />
                        <p className={styles.redes__name}>Youtube</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Redes
