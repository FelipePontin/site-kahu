import React from "react"

import styles from './Banho.module.css'

import IconeBanhoeTosa from '../../images/IconeBanhoeTosa.svg'
import IconePataBanho from '../../images/IconePataBanho.svg'

import Title from "../Title/Title"

import ImagemCreche1 from '../../images/Creche/ImagemCreche1.png'
import Imagem1 from '../../images/Banho e Tosa/Imagem1.png'
import Imagem2 from '../../images/Banho e Tosa/Imagem2.png'

import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Banho = () => {
    return (
        <section className={styles.banho} id='banho'>
            <img className={styles.banho__icon} src={IconeBanhoeTosa} />
            <Title title={'Banho e Tosa'} />
            <div className={styles.banho__divisao}>
                <div className={styles.banho__infos}>
                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={IconePataBanho} alt='' />
                        <p className={styles.banho__titulo}>Transformação Pet</p>
                        <p className={styles.banho__subtitulo}>Serviços de Banho e Tosa para o Bem-Estar e Beleza do Seu Pet</p>
                    </div>
                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={IconePataBanho} alt='' />
                        <p className={styles.banho__titulo}>Cuidados Premium</p>
                        <p className={styles.banho__subtitulo}>Conforto e Carinho para seu Animal de Estimação</p>
                    </div>
                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={IconePataBanho} alt='' />
                        <p className={styles.banho__titulo}>Higiene e Estilo</p>
                        <p className={styles.banho__subtitulo}>Banho e Tosa Personalizados para Todas as Raças</p>
                    </div>
                </div>
                <div className={styles.banho__atividades__swiper}>
                    <Swiper
                        navigation={true}
                        loop={true}
                        modules={[Navigation, Pagination]}
                        className='swiper'
                    >
                        <SwiperSlide>
                            <img className={styles.banho__atividades__imagem} src={Imagem1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.banho__atividades__imagem} src={Imagem2} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Banho
