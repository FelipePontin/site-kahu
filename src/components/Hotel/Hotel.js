import React, { useEffect } from "react"

import styles from './Hotel.module.css'

import IconeCreche from '../../images/IconeHotel.svg'

import Title from "../Title/Title"


import Check from '../../images/CHECK.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Hotel = () => {

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    return (
        <section className={styles.hotel} id='hotel' data-aos='fade-up'>
            <img className={styles.hotel__icon} src={IconeCreche} alt='Icone Creche' />
            <Title title={'Hotel Canino'} />
            <div className={styles.hotel__cards}>
                <div>
                    <div className={styles.hotel__card} data-aos='fade-up'>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='Rotina' />
                            <p className={styles.hotel__titulo}>Rotina</p>
                            <p className={styles.hotel__subtitulo}>Durante o dia o seu cachorro participa da rotina da creche.</p>
                        </div>
                    </div>
                    <div className={styles.hotel__card} data-aos='fade-up'>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='Filtro de ar' />
                            <p className={styles.hotel__titulo}>Filtro de ar</p>
                            <p className={styles.hotel__subtitulo}>Filtro para deixar o ar do ambiente puro e fresquinho, evitando alergias e crises respiratórias nos nossos aumigos.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.hotel__card} data-aos='fade-up'>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='Camas individuais' />
                            <p className={styles.hotel__titulo}>Camas individuais</p>
                            <p className={styles.hotel__subtitulo}>Temos camas individuais para cada cachorrinho, que passam sempre por higienização.</p>
                        </div>
                    </div>
                    <div className={styles.hotel__card} data-aos='fade-up'>

                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='Acompanhamento' />
                            <p className={styles.hotel__titulo}>Acompanhamento</p>
                            <p className={styles.hotel__subtitulo}>Seu cachorro é supervisionado 24h pelos nossos monitores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hotel
