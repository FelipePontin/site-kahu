import React from "react"

import styles from './Button.module.css'

import { IoPaw } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa";

const Button = ({text, type, icon}) => {
    const buttonClass = type == 'green' ? styles.button__green  : ''
    const iconClass = type == 'green' ? styles.button__iconGreen  : ''

    const renderIcon = () => {
        switch (icon) {
            case 'IoPaw':
                return <IoPaw className={`${styles.button__icon} ${iconClass}`} />;
            case 'FaInstagram':
                return <FaInstagram className={`${styles.button__icon} ${iconClass}`} />;
            default:
                return null;
        }
    };

    return (
        <button className={`${styles.button} ${buttonClass}`}>
            <p className={styles.button__text}>{text}</p>
            {renderIcon()}
        </button>
    )
}

export default Button
