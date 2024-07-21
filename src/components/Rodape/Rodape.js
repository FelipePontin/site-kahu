import React from "react"

import styles from './Rodape.module.css'

import Kahu from '../../images/Kahu.png'

const Rodape = () => {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    return (
        <section className={styles.rodape}>
            <div className={styles.rodape__container}>
                <div className={styles.rodape__divison}>
                    <p className={styles.rodape__titulo}>Como Chegar?</p>
                    <p className={styles.rodape__endereco}>Rua Dr. Gabriel dos Santos, 55 - Higienópolis - São Paulo, SP </p>
                    <p className={styles.rodape__info}>Temos estacionamento no local</p>
                    <p className={styles.rodape__contato}>Whatsapp: <a className={styles.rodape__telefone} href=''>(11) 97110-7188</a></p>
                </div>
                <img className={styles.banner__image} src={Kahu} />
            </div>
            <p className={styles.banner__copyright}>©{anoAtual} All Rights Reserved.</p>
        </section>
    )
}

export default Rodape
