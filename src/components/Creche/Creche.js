import React, { useEffect } from "react"

import styles from './Creche.module.css'

import IconeCreche from '../../images/IconeCreche.svg'
import IconePata from '../../images/PataDegrade.svg'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './styles.css'

import Title from "../Title/Title"

import AOS from 'aos'
import 'aos/dist/aos.css'

import ImagemCreche1 from '../../images/Creche/ImagemCreche1.png'
import ImagemCreche2 from '../../images/Creche/ImagemCreche2.png'
import ImagemCreche3 from '../../images/Creche/ImagemCreche3.png'

import ImagemAtividade1 from '../../images/Creche/Atividades/ImagemAtividade1.png'
import ImagemAtividade2 from '../../images/Creche/Atividades/ImagemAtividade2.png'
import ImagemAtividade3 from '../../images/Creche/Atividades/ImagemAtividade3.png'
import ImagemAtividade4 from '../../images/Creche/Atividades/ImagemAtividade4.png'
import ImagemAtividade5 from '../../images/Creche/Atividades/ImagemAtividade5.png'

const Creche = () => {

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick} style={{ ...arrowStyle, left: '10px' }}>
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick} style={{ ...arrowStyle, right: '10px' }}>
            </div>
        );
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        fontSize: '24px',
        color: '#000',
        cursor: 'pointer',
        zIndex: 1,
        borderRadius: '50%',
        padding: '10px',
        transform: 'translateY(-50%)'
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <section className={styles.creche} id='creche' data-aos='fade-up'>
            <img className={styles.creche__icon} src={IconeCreche} />
            <Title title={'Creche Canina'} />
            <div className={styles.creche__cards}>
                <div className={styles.creche__card} data-aos='fade-up'>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche1} alt='' />
                        <p className={styles.creche__titulo}>Socialização e Convívio</p>
                        <p className={styles.creche__subtitulo}>Oferecemos um ambiente controlado, onde os cães podem interagir e brincar uns com os outros. Cães bem socializados tendem a ser mais equilibrados e menos ansiosos.</p>
                    </div>
                    {/* <button className={styles.creche__button}>Saiba Mais</button> */}
                </div>
                <div className={styles.creche__card} data-aos='fade-up'>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche3} alt='' />
                        <p className={styles.creche__titulo}>Exercícios Físicos e Mentais</p>
                        <p className={styles.creche__subtitulo}>Os cães se exercitam diariamente, o que é essencial para a saúde física e mental. Atividades como corridas, agility e caça petiscos ajudam a gastar energia de maneira saudável e a ter uma mente mais desenvolvida</p>
                    </div>
                    {/* <button className={styles.creche__button}>Saiba Mais</button> */}
                </div>
                <div className={styles.creche__card} data-aos='fade-up'>
                    <div className={styles.creche__cardDivision}>
                        <img className={styles.creche__imagem} src={ImagemCreche2} alt='' />
                        <p className={styles.creche__titulo}>Supervisão Profissional</p>
                        <p className={styles.creche__subtitulo}>Nossa equipe é treinada para observar e responder às necessidades dos cães, garantindo que estejam seguros e felizes. Eles também são capazes de identificar sinais precoces de problemas de saúde ou comportamento.</p>
                    </div>
                    {/* <button className={styles.creche__button}>Saiba Mais</button> */}
                </div>
            </div>

            {/* <div className={styles.creche__atividades}>
                <div className={styles.creche__atividades__swiper}>
                    <Slider {...settings}>
                        <img className={styles.creche__atividades__imagem} src={ImagemAtividade1} alt='' />
                        <img className={styles.creche__atividades__imagem} src={ImagemAtividade2} alt='' />
                        <img className={styles.creche__atividades__imagem} src={ImagemAtividade3} alt='' />
                        <img className={styles.creche__atividades__imagem} src={ImagemAtividade4} alt='' />
                        <img className={styles.creche__atividades__imagem} src={ImagemAtividade5} alt='' />

                    </Slider>
                </div>
                <div className={styles.creche__atividades__divisao}>
                    <div className={styles.creche__atividades__titulo}>
                        <Title title={'Atividades'} />
                    </div>
                    <p className={styles.creche__atividades__explicacao}>Atividades interativas, jogos para <span className={styles.creche__atividades__destaque}>estimulação física e mental, exercícios de obediência e habilidades</span>, além de encontros supervisionados para promover amizades e comportamento positivo.</p>
                </div>
            </div> */}
            {/* <div className={styles.creche__precos}>
                <Title title={'Preços Creche'} />
                <p className={styles.creche_subtitle}>(Pacotes mensais)</p>
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
            </div> */}
        </section>
    )
}

export default Creche
