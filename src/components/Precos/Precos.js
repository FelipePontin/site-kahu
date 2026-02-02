import React from "react"

import styles from './Precos.module.css'

const Precos = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Tabela de Preços</h1>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Serviço</th>
                        <th className={styles.th}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Hotel Pet</td>
                        <td className={styles.td}>R$ 50,00 / dia</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Creche Canina</td>
                        <td className={styles.td}>R$ 30,00 / dia</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Banho</td>
                        <td className={styles.td}>R$ 40,00</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Tosa</td>
                        <td className={styles.td}>R$ 35,00</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Banho e Tosa</td>
                        <td className={styles.td}>R$ 65,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Precos
