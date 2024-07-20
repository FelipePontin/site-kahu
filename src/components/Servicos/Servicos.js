import React from "react"

import styles from './Servicos.module.css'

import Title from '../Title/Title'

import IconeBanhoeTosa from '../../images/IconeBanhoeTosa.svg'
import IconeCreche from '../../images/IconeCreche.svg'
import IconeHotel from '../../images/IconeHotel.svg'
import IconeVeterinario from '../../images/IconeVeterinario.svg'

// import ImagemPataCachorro from '../../images/PataCachorro.svg'

import { FaArrowRight } from "react-icons/fa6";

const Servicos = () => {
    return (
        <section className={styles.servicos} id='servicos'>
            <div className={styles.servicos__title}>
                <Title title={'Nossos serviços'} />
            </div>
            <div className={styles.servicos__divisoes}>
                <div className={styles.servicos__divisao}>
                    <div className={styles.servicos__servico}>
                        <img className={styles.servicos__imagem} src={IconeBanhoeTosa} alt='' />
                        <p className={styles.servicos__titulo}>Banho e Tosa</p>
                        <p className={styles.servicos__subtitulo}>Sabemos que você está deixando um membro da sua família conosco, e nossa equipe trata seu cão com o carinho e atenção que vocês merecem.</p>
                        <FaArrowRight className={styles.servicos__icone} />
                    </div>
                    <div className={styles.servicos__servico}>
                        <img className={styles.servicos__imagem} src={IconeCreche} alt='' />
                        <p className={styles.servicos__titulo}>Creche Canina</p>
                        <p className={styles.servicos__subtitulo}>Oferecemos um espaço seguro para seu cão se divertir, em um ambiente seguro e cercado de especialistas apaixonados por eles.</p>
                        <FaArrowRight className={styles.servicos__icone} />
                    </div>
                    <div className={styles.servicos__servico}>
                        <img className={styles.servicos__imagem} src={IconeHotel} alt='' />
                        <p className={styles.servicos__titulo}>Hotel Canino</p>
                        <p className={styles.servicos__subtitulo}>No nosso Hotel Canino seu cão encontra todo o conforto e cuidado que ele merece enquanto está longe de você.</p>
                        <FaArrowRight className={styles.servicos__icone} />
                    </div>
                    {/* <img className={styles.servicos__imagemPata} src={ImagemPataCachorro} alt='' /> */}
                </div>
                <div className={styles.servicos__servico}>
                    <img className={styles.servicos__imagem} src={IconeVeterinario} alt='' />
                    <p className={styles.servicos__titulo}>Centro Veterinário</p>
                    <p className={styles.servicos__subtitulo}>Nossa abordagem ao serviço de veterinário vai além do tratamento convencional - é um compromisso integral com a saúde e bem-estar animal.</p>
                    <FaArrowRight className={styles.servicos__icone} />
                </div>
            </div>
        </section>
    )
}

export default Servicos
