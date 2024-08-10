import React from "react"

import styles from './Servicos.module.css'

import Title from '../Title/Title'

import IconeBanhoeTosa from '../../images/IconeBanhoeTosa.svg'
import IconeCreche from '../../images/IconeCreche.svg'
import IconeHotel from '../../images/IconeHotel.svg'
import IconeVeterinario from '../../images/IconeVeterinario.svg'

// import ImagemPataCachorro from '../../images/PataCachorro.svg'

import { FaArrowRight } from "react-icons/fa6";

import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Servicos = () => {
    return (
        <section className={styles.servicos} id='servicos'>
            <div className={styles.servicos__title}>
                <Title title={'Nossos Serviços'} />
            </div>
            <BrowserRouter>
                <div className={styles.servicos__divisoes}>
                    <div className={styles.servicos__divisao}>
                        <Link className={styles.servicos__servico} smooth to='#creche'>
                            <img className={styles.servicos__imagem} src={IconeCreche} alt='' />
                            <p className={styles.servicos__titulo}>Creche Canina</p>
                            <p className={styles.servicos__subtitulo}>Oferecemos um espaço completo para seu cão se divertir. Um ambiente seguro e cercado de profissionais qualificados que amam o que fazem.</p>
                            <FaArrowRight className={styles.servicos__icone} />
                        </Link>
                        <Link className={styles.servicos__servico} smooth to='#hotel'>
                            <img className={styles.servicos__imagem} src={IconeHotel} alt='' />
                            <p className={styles.servicos__titulo}>Hotel Canino</p>
                            <p className={styles.servicos__subtitulo}>No nosso hotel, seu cachorrinho encontra todo o conforto e cuidado que ele merece.</p>
                            <FaArrowRight className={styles.servicos__icone} />
                        </Link>
                        <Link className={styles.servicos__servico} smooth to='#banho'>
                            <img className={styles.servicos__imagem} src={IconeBanhoeTosa} alt='' />
                            <p className={styles.servicos__titulo}>Banho e Tosa</p>
                            <p className={styles.servicos__subtitulo}>Com todo amor e cuidado, deixamos seu cãozinho ainda mais lindo e cheiroso!</p>
                            <FaArrowRight className={styles.servicos__icone} />
                        </Link>
                        {/* <img className={styles.servicos__imagemPata} src={ImagemPataCachorro} alt='' /> */}
                    </div>
                    <Link className={styles.servicos__servico}>
                        <img className={styles.servicos__imagem} src={IconeVeterinario} alt='' />
                        <p className={styles.servicos__titulo}>Centro Veterinário</p>
                        <p className={styles.servicos__subtitulo}>Nossa abordagem ao serviço de veterinário vai além do tratamento convencional - é um compromisso integral com a saúde e bem-estar animal.</p>
                        <FaArrowRight className={styles.servicos__icone} />
                    </Link>
                </div>
            </BrowserRouter>
        </section>
    )
}

export default Servicos
