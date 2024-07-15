import React from "react"

import styles from './Header.module.css'

import KahuLogo from '../../images/LogoKahuHeader.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
    return (
        <BrowserRouter>
            <header className={styles.header}>
                <img className={styles.header__logo} src={KahuLogo} />
                <nav className={styles.header__navigation}>
                    <ul className={styles.header__list}>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#'>Início</Link></li>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#servicos'>Serviços</Link></li>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#creche'>Creche</Link></li>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#hotel'>Hotel</Link></li>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#banho'>Banho e Tosa</Link></li>
                        <li className={styles.header__item}><Link className={styles.header__link} href='' smooth to='#sobre'>Sobre Nós</Link></li>
                    </ul>
                </nav>
            </header>
        </BrowserRouter>
    )
}

export default Header
