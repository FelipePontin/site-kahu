import React, { useState, useEffect } from "react"

import styles from './Header.module.css'

import KahuLogo from '../../images/LogoKahuHeader.png'

import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {

    const [menu, setMenu] = useState(true)
    const [menuClass, setMenuClass] = useState(styles.header__list);

    const handleMenu = () => setMenu(!menu)

    const closeMenu = () => setMenu(false)

    useEffect(() => {
        const updateMenuClass = () => {
            setMenuClass(menu && window.innerWidth < 1000 ? styles.header__list__open : styles.header__list);
        };

        updateMenuClass(); // Atualiza a classe inicialmente
        window.addEventListener('resize', updateMenuClass); // Atualiza a classe ao redimensionar

        return () => {
            window.removeEventListener('resize', updateMenuClass); // Limpa o event listener ao desmontar
        };
    }, [menu]);

    return (
        <>
            <div className={styles.header__banner}></div>
            <BrowserRouter>
                <header className={styles.header}>
                    <img className={styles.header__logo} src={KahuLogo} />
                    <nav className={styles.header__navigation}>
                        <ul className={`${menuClass} `}>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#inicio'>Início</Link></li>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#servicos'>Serviços</Link></li>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#creche'>Creche</Link></li>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#hotel'>Hotel</Link></li>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#banho'>Banho e Tosa</Link></li>
                            <li className={styles.header__item}><Link className={styles.header__link} href='' onClick={closeMenu} smooth to='#sobre'>Sobre Nós</Link></li>
                            <div className={styles.header__icons__division}>
                                <FaInstagram className={styles.header__icon} />
                                <FaTiktok className={styles.header__icon} />
                                <FaWhatsapp className={styles.header__icon} />
                            </div>
                        </ul>
                    </nav>
                    <IoMenu onClick={handleMenu} className={styles.header__menu} />
                </header>
            </BrowserRouter>
        </>

    )
}

export default Header
