import React from "react"

import styles from './Veterinario.module.css'

import IconeVeterinario from '../../images/IconeVeterinario.svg'
import ImagemVet from '../../images/imagemVet.jpg'
import PataDegrade from '../../images/PataDegrade.svg'

import Title from "../Title/Title"
import Button from "../Button/Button"

const Veterinario = () => {

    return (
        <section className={styles.veterinario} id='veterinario'>
            <img className={styles.veterinario__icon} src={IconeVeterinario} />
            <div className={styles.veterinario__titulo}>
                <Title title='Centro Veterinário' />
            </div>
            <div className={styles.veterinario__infos}>
                <div className={styles.veterinario__divisao}>
                    <img src={PataDegrade} className={styles.veterinario__iconePata}/>
                    <p className={styles.veterinario__subtitle}>Nossa veterinária está disponível para todos os cães, sejam eles da creche ou visitantes externos. Consultas de rotina, exames preventivos e diagnósticos especializados. Aqui, seu cão recebe cuidados especializados em todas as etapas, com atenção dedicada à sua saúde e conforto.</p>
                    <div className={styles.banner__botao}>
                        <a href='https://api.whatsapp.com/send?phone=5511971107188&text=Olá!'>
                            <Button text={'MARCAR CONSULTA'} type='green' icon={'IoPaw'} />
                        </a>
                    </div>
                </div>
                <div className={styles.veterinario__atividades__swiper}>
                    <img className={styles.veterinario__atividades__imagem} src={ImagemVet} />
                </div>
            </div>
        </section>
    )
}

export default Veterinario
