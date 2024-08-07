import React from "react"

import styles from './Banho.module.css'

import IconeBanhoeTosa from '../../images/IconeBanhoeTosa.svg'
import IconePataBanho from '../../images/IconePataBanho.svg'

import Title from "../Title/Title"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.css'


import ImagemCreche1 from '../../images/Creche/ImagemCreche1.png'
import Imagem1 from '../../images/Banho e Tosa/Imagem1.png'
import Imagem2 from '../../images/Banho e Tosa/Imagem2.png'



const Banho = () => {

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
                    <Slider {...settings}>
                        <img className={styles.banho__atividades__imagem} src={Imagem1} alt='' />
                        <img className={styles.banho__atividades__imagem} src={Imagem2} alt='' />
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Banho
