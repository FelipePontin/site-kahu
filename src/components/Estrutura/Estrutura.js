import React from "react"

import styles from './Estrutura.module.css'

import Title from '../../components/Title/Title'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.css'

import IconeCachorro from '../../images/IconeCachorro.svg'

import Estrutura1 from '../../images/Estrutura/Estrutura1.png'
import Estrutura2 from '../../images/Estrutura/Estrutura2.jpg'
import Estrutura3 from '../../images/Estrutura/Estrutura3.png'
import Estrutura4 from '../../images/Estrutura/Estrutura4.png'
import Estrutura5 from '../../images/Estrutura/Estrutura5.png'

const Estrutura = () => {

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
        <section className={styles.estrutura}>
            <div className={styles.estrutura__divisao}>
                <div className={styles.estrutura__titulo}>
                    <Title title='Estrutura e Ambiente' />
                </div>
                <p className={styles.estrutura__subtitle}>Planejamos uma estrutura focada no conforto, segurança e diversão para os cães. Contamos com uma área aberta, onde os cães podem correr e brincar livremente, sempre sob supervisão.</p>
                <img className={styles.estrutura__icone} src={IconeCachorro} alt='' />
            </div>
            <div className={styles.estrutura__atividades__swiper}>
                <Slider {...settings}>
                    <img className={styles.estrutura__atividades__imagem} src={Estrutura1} alt='' />
                    <img className={styles.estrutura__atividades__imagem} src={Estrutura4} alt='' />
                    <img className={styles.estrutura__atividades__imagem} src={Estrutura2} alt='' />
                    <img className={styles.estrutura__atividades__imagem} src={Estrutura5} alt='' />
                    <img className={styles.estrutura__atividades__imagem} src={Estrutura3} alt='' />
                </Slider>
            </div>
        </section>
    )
}

export default Estrutura
