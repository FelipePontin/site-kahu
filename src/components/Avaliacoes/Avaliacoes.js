import React from "react"

import styles from './Avaliacoes.module.css'

import Title from "../Title/Title"

const Avaliacoes = () => {

    const cardsTop = [
        { id: 1, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 2, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 3, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 4, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 5, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 6, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 7, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 8, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 9, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 10, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin'}
    ];

    const cardsBottom = [
        { id: 1, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 2, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 3, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 4, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 5, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 6, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 7, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 8, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 9, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin' },
        { id: 10, text: 'A Kahu é incrível em todos os detelhes!', user: '@felipepontin'}
    ];

    return (
        <div className={styles.avaliacoes}>
            <Title title='As nossas avaliações 😊'/>
            <p className={styles.avaliacao__subtitle}>Veja o que estão falando da gente</p>
            <div className={styles.avaliacao__container}>
                <div className={styles.avaliacao__divisionTop}>
                    {cardsTop.map((card) => (
                        <div key={card.id} className={styles.avaliacao__card}>
                            <p className={styles.avaliacao__user}>{card.user}</p>
                            <p className={styles.avaliacao__text}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.avaliacao__container}>
                <div className={styles.avaliacao__divisionBottom}>
                    {cardsBottom.map((card) => (
                        <div key={card.id} className={styles.avaliacao__card}>
                            <p className={styles.avaliacao__user}>{card.user}</p>
                            <p className={styles.avaliacao__text}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Avaliacoes
