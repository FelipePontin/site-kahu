import React from "react"

import styles from './Creche.module.css'

import IconeCreche from '../../images/IconeCreche.svg'
import IconePata from '../../images/PataDegrade.svg'

import Title from "../Title/Title"

import ImagemCreche1 from '../../images/Creche/ImagemCreche1.png'
import ImagemAtividade1 from '../../images/Creche/Atividades/ImagemAtividade1.png'
import ImagemAtividade2 from '../../images/Creche/Atividades/ImagemAtividade2.png'

import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Creche = () => {
    return (
        <section className={styles.creche} id='creche'>
            <img className={styles.creche__icon} src={IconeCreche} />
            <Title title={'Creche Canina'} />
            <div className={styles.creche__cards}>
                <div className={styles.creche__card}>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche1} alt='' />
                        <p className={styles.creche__titulo}>Diversão Diária</p>
                        <p className={styles.creche__subtitulo}>Creche Canina com Atividades, Cuidados Especializados e Muito Amor para Seu Melhor Amigo</p>
                    </div>
                    <button className={styles.creche__button}>Saiba Mais</button>
                </div>
                <div className={styles.creche__card}>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche1} alt='' />
                        <p className={styles.creche__titulo}>Amigos Felizes</p>
                        <p className={styles.creche__subtitulo}>Socialização, Brincadeiras Interativas e Supervisão Profissional na Nossa Creche Canina</p>
                    </div>
                    <button className={styles.creche__button}>Saiba Mais</button>
                </div>
                <div className={styles.creche__card}>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche1} alt='' />
                        <p className={styles.creche__titulo}>Dia Animado</p>
                        <p className={styles.creche__subtitulo}>Ambiente Seguro e Estimulante, com Atividades Planejadas para o Bem-Estar do Seu Cão na Creche Canina</p>
                    </div>
                    <button className={styles.creche__button}>Saiba Mais</button>
                </div>
            </div>
            <div className={styles.creche__atividades}>
                <div className={styles.creche__atividades__swiper}>
                    <Swiper
                        navigation={true}
                        loop={true}
                        modules={[Navigation, Pagination]}
                        className='swiper'
                    >
                        <SwiperSlide>
                            <img className={styles.creche__atividades__imagem} src={ImagemAtividade1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.creche__atividades__imagem} src={ImagemAtividade2} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.creche__atividades__divisao}>
                    <div className={styles.creche__atividades__titulo}>
                        <Title title={'Atividades'} />
                    </div>
                    <p className={styles.creche__atividades__explicacao}>Atividades interativas, jogos para <span className={styles.creche__atividades__destaque}>estimulação física e mental, exercícios de obediência e habilidades</span>, além de encontros supervisionados para promover amizades e comportamento positivo.</p>
                </div>
            </div>
            <div className={styles.creche__precos}>
                <Title title={'Preços creche(pacotes mensais)'} />
                <div className={styles.creche__pacotes}>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                    <div className={styles.creche__pacote}>
                        <p className={styles.creche__pacote__titulo}>1X SEMANA</p>
                        <p className={styles.creche__pacote__subtitulo}>Deixe seu cachorro na creche 1x por semana</p>
                        <p className={styles.creche__pacote__preco}>R$ 350,00</p>
                    </div>
                </div>
                <div className={styles.creche__pacote__adendo}>
                    <img className={styles.creche__pacote__imagem} src={IconePata} alt='' />
                    <div className={styles.creche__pacote__divisaoAdendo}>
                        <p className={styles.creche__pacote__adendoTitulo}>MEIA DIÁRIA (7H as 13H ou 13H as 19H) - 80% DO VALOR INTEGRAL</p>
                        <p className={styles.creche__pacote__adendoSubtitulo}>Não trabalhamos com diárias avulsas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creche
