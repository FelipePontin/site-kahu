import React from "react"

import styles from './Hotel.module.css'

import IconeCreche from '../../images/IconeHotel.svg'
import IconePata from '../../images/PataDegrade.svg'

import Title from "../Title/Title"

import ImagemCreche1 from '../../images/Creche/ImagemCreche1.png'

import Check from '../../images/CHECK.png'

const Hotel = () => {
    return (
        <section className={styles.hotel} id='hotel'>
            <img className={styles.hotel__icon} src={IconeCreche} />
            <Title title={'Hotel Canino'} />
            <div className={styles.hotel__cards}>
                <div>
                    <div className={styles.hotel__card}>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='' />
                            <p className={styles.hotel__titulo}>Rotina</p>
                            <p className={styles.hotel__subtitulo}>Durante o dia o seu cachorro participa da rotina da creche.</p>
                        </div>
                        {/* <button className={styles.hotel__button}>Saiba Mais</button> */}
                    </div>
                    <div className={styles.hotel__card}>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='' />
                            <p className={styles.hotel__titulo}>Filtro De Ar</p>
                            <p className={styles.hotel__subtitulo}>Filtro para deixar o ar do ambiente puro e fresquinho, evitando alergias e crises respiratórias nos nossos companheiros</p>
                        </div>
                        {/* <button className={styles.hotel__button}>Saiba Mais</button> */}
                    </div>
                </div>
                <div>
                    <div className={styles.hotel__card}>
                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='' />
                            <p className={styles.hotel__titulo}>Camas Individuais</p>
                            <p className={styles.hotel__subtitulo}>Camas individuais, com colchões adaptados para o peso e tamanho de cada pet, que passam por higienização diária.</p>
                        </div>
                        {/* <button className={styles.hotel__button}>Saiba Mais</button> */}
                    </div>
                    <div className={styles.hotel__card}>

                        <div className={styles.hotel__cardDivision}>
                            <img className={styles.banho__imagem} src={Check} alt='' />
                            <p className={styles.hotel__titulo}>Acompanhamento</p>
                            <p className={styles.hotel__subtitulo}>Acompanhamento 24h com um membro da equipe.</p>
                        </div>
                        {/* <button className={styles.hotel__button}>Saiba Mais</button> */}
                    </div>
                </div>
            </div>
            {/* <div className={styles.hotel__precos}>
                <Title title={'Preços Hotel Canino'} />
                <div className={styles.hotel__pacotes}>
                    <div className={styles.hotel__pacote}>
                        <p className={styles.hotel__pacote__titulo}>DIÁRIA AVULSO</p>
                        <p className={styles.hotel__pacote__subtitulo}>Deixe o seu cachorro o dia inteiro na creche.</p>
                        <p className={styles.hotel__pacote__preco}>R$ 150,00</p>
                    </div>
                    <div className={styles.hotel__pacote}>
                        <p className={styles.hotel__pacote__titulo}>A PARTIR DE 3 DIAS</p>
                        <p className={styles.hotel__pacote__subtitulo}>Deixe seu cachorro a partir de 3 dias na creche.</p>
                        <p className={styles.hotel__pacote__preco}>R$ 130,00</p>
                    </div>
                    <div className={styles.hotel__pacote}>
                        <p className={styles.hotel__pacote__titulo}>A PARTIR DE 7 DIAS</p>
                        <p className={styles.hotel__pacote__subtitulo}>Deixe seu cachorro a partir de 7 dias na creche.</p>
                        <p className={styles.hotel__pacote__preco}>R$ 110,00</p>
                    </div>
                </div>
                <div className={styles.hotel__pacote__adendo}>
                    <img className={styles.hotel__pacote__imagem} src={IconePata} alt='' />
                    <div className={styles.hotel__pacote__divisaoAdendo}>
                        <p className={styles.hotel__pacote__adendoTitulo}>LEVA E TRÁS - ATÉ 1KM DE DISTÂNCIA</p>
                        <p className={styles.hotel__pacote__adendoSubtitulo}>R$30,00 por dia</p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Hotel
