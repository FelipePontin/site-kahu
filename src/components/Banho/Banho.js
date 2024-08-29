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
import Imagem1 from '../../images/Banho e Tosa/Imagem1.svg'
import Imagem2 from '../../images/Banho e Tosa/Imagem2.svg'
import Imagem3 from '../../images/Banho e Tosa/Imagem3.svg'
import Imagem4 from '../../images/Banho e Tosa/Imagem4.svg'

import Check from '../../images/CHECK.png'


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
                        <img className={styles.banho__imagem} src={Check} alt='' />
                        <p className={styles.banho__titulo}><span className={styles.banho__lugar}>1º</span>Banho</p>
                        <p className={styles.banho__subtitulo}>O banho é realizado com produtos específicos para cada tipo de pelagem, removendo sujeira, oleosidade e odores, proporcionando limpeza profunda e deixando o cão com uma sensação de frescor e conforto.</p>
                    </div>
                    <div className={styles.banho__linha}></div>

                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={Check} alt='' />
                        <p className={styles.banho__titulo}><span className={styles.banho__lugar}>2º</span>Secagem e Escovação
                        </p>
                        <p className={styles.banho__subtitulo}>Após o banho, o pelo é cuidadosamente seco e escovado para remover nós, evitar embolamento e garantir uma pelagem macia, brilhante e desembaraçada, contribuindo para a saúde e beleza do cão.</p>
                    </div>
                    <div className={styles.banho__linha}></div>

                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={Check} alt='' />
                        <p className={styles.banho__titulo}><span className={styles.banho__lugar}>3º</span>Limpeza dos Ouvidos e Corte de Unhas</p>
                        <p className={styles.banho__subtitulo}>A limpeza dos ouvidos previne infecções e o acúmulo de cera, enquanto o corte de unhas mantém o cão confortável, evitando arranhões e problemas de locomoção, além de garantir sua higiene.</p>
                    </div>
                    <div className={styles.banho__linha}></div>

                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={Check} alt='' />
                        <p className={styles.banho__titulo}><span className={styles.banho__lugar}>4º</span>Tosas
                        </p>
                        <p className={styles.banho__subtitulo}>Realizamos tosa higiênica e estilizada, respeitando as necessidades do cão e as preferências do dono, garantindo uma aparência bonita e prática para diferentes raças e tipos de pelagem.</p>
                    </div>
                    <div className={styles.banho__linha}></div>

                    <div className={styles.banho__info}>
                        <img className={styles.banho__imagem} src={Check} alt='' />
                        <p className={styles.banho__titulo}><span className={styles.banho__lugar}>5º</span>Finalização</p>
                        <p className={styles.banho__subtitulo}>Para um toque especial, finalizamos com lacinhos e penteados que deixam o cão ainda mais charmoso, realçando sua personalidade e estilo após os cuidados.</p>
                    </div>
                </div>
                <div className={styles.banho__atividades__swiper}>
                    <Slider {...settings}>
                        <img className={styles.banho__atividades__imagem} src={Imagem1} alt='' />
                        <img className={styles.banho__atividades__imagem} src={Imagem2} alt='' />
                        <img className={styles.banho__atividades__imagem} src={Imagem3} alt='' />
                        <img className={styles.banho__atividades__imagem} src={Imagem4} alt='' />
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Banho
