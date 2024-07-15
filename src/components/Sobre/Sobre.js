import React from "react"

import styles from './Sobre.module.css'

import Title from "../Title/Title"

import LogoKahu from '../../images/LogoKahuHeader.png'
import CachorroSobre from '../../images/CachorroSobre.png'
import PataBranca from '../../images/PataBranca.svg'

const Sobre = () => {
    return (
        <section className={styles.sobre} id='sobre'>
            <div className={styles.sobre__kahu}>
                <img className={styles.sobre__imagem} src={CachorroSobre} alt='' />
                <div className={styles.sobre__divisao}>
                    <img className={styles.sobre__logo} src={LogoKahu} alt='' />
                    <Title title='Sobre a KAHU' />
                    <p className={styles.sobre__titulo}>O que significa KAHU?</p>
                    <p className={styles.sobre__subtitulo}>Com origem no idioma havaiano, "Kahu" tem um significado especial e profundo. A palavra "Kahu" é tradicionalmente usada para se referir a um guardião dedicado, um cuidador atento, uma espécie de zelador. Seu papel é o de cuidar e proteger algo ou alguém de maneira única, seja um local sagrado enraizado em tradições ancestrais, uma pessoa que precisa de proteção ou mesmo um objeto de valor inestimável.</p>
                </div>
            </div>
            <div className={styles.sobre__infos}>
                <img className={styles.sobre__logo} src={PataBranca} alt='' />
                <p className={styles.sobre__info}>Na <b>KAHU</b>, acreditamos que para alcançar a felicidade e bem-estar dos nossos melhores amigos peludos, é preciso deixar os cachorros serem cachorros.</p>
            </div>
        </section>
    )
}

export default Sobre
