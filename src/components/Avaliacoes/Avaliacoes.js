import React from "react"

import styles from './Avaliacoes.module.css'

import Title from "../Title/Title"

import { FaStar } from "react-icons/fa";

const Avaliacoes = () => {

  const cards = [
    { id: 1, text: `A Kahu é incrível. A equipe e o tratamento especial que eles dão a cada um dos cachorros é simplesmente maravilhoso. Meu cachorro ama, volta sempre feliz para casa. Nunca tivemos nenhuma ocorrência de brigas, de atritos ou conflitos. Pelo contrário, a adaptação é ótima e todo o tratamento da equipe perfeito!`, user: '@Vitor Richner' },
    { id: 2, text: `Só tenho palavras de GRATIDÃO! Cheguei até vocês através de uma indicação e logo na sequência fui surpreendida pelo cuidado e carinho que tiveram com o meu pet. Eu sempre digo que onde existe amor, há cuidado, e vocês estão de parabéns! Podem ter certeza que não só continuarei deixando o Nick, como também irei indicar de olhos fechados!`, user: '@Rebeca Coutinho' },
    { id: 3, text: `Os dias da Paçoca na creche com toda a certeza estão mais felizes. É nítida a referência positiva que a Kahu faz no desenvolvimento dela e no dia a dia. A Paçó tem apenas 6 meses e ela está amando a Kahu com toda a força dela hahaha O time deles é MUITO atencioso e amoroso com a Paçoca. Ah, e eles mandam fotos e vídeos durante a estadia. Recomendo e muito! 💚`, user: '@ALESSANDRA BRAGA' },
    { id: 4, text: `Melhor creche! Cuidam com muito amor e carinho! Cuidam dos pets individualmente dos cachorros, entendendo a necessidade de cada um! O meu cachorro é grande e eles compram até pneu para ele brincar, ele ama! Além disso, ele ama muito estar lá, ele chega sempre muito feliz e sai correndo de alegria pra entrar!`, user: '@vitoria capeletti batan' },
    { id: 5, text: `Equipe super gentil e profissional. Sempre cuidando muito bem da nossa Florinha. Ficamos totalmente seguros de deixar ela aos cuidados da Kahu durante o dia na creche e em serviço de hotel quando precisamos.`, user: '@Mateus Kleinsorgen' },
    { id: 6, text: `Excelente local para cuidar de seu pet, amplo, espaçoso , arejado. Os cuidadores são experientes, amam o que fazem, e os bichinhos adoram o local...`, user: '@Dionisio Rogerio' },
    { id: 7, text: `Paçoca ama a creche dela! Volta sempre cansada mas sei que brincou o dia inteiro ❤️ Todos os tutores são cordiais, respondem às mensagens e sempre estão atentos!`, user: '@Victor Ambrogini' },
    { id: 8, text: `Um lugar maravilhoso para deixar seu doguinho, toda equipe de monitores tem experiência na área vet, os cuidados com alimentação, as brincadeiras e atividades são muito boas para os cachorros.`, user: '@Gabriela Camilo' },
  ];

  return (
    <div className={styles.avaliacoes}>
      <Title title='As Nossas Avaliações 😊' />
      <p className={styles.avaliacao__subtitle}>Veja o que estão falando da gente por aí!</p>
      <div className={styles.avaliacao__container}>
        <div className={styles.avaliacao__track}>
          {cards.map((card) => (
            <div key={card.id} className={styles.avaliacao__card}>
              <FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} />
              <p className={styles.avaliacao__user}>{card.user}</p>
              <p className={styles.avaliacao__text}>{card.text}</p>
            </div>
          ))}
          {cards.map((card) => (
            <div key={card.id + "-clone"} className={styles.avaliacao__card}>
              <FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} /><FaStar className={styles.avaliacao__star} />
              <p className={styles.avaliacao__user}>{card.user}</p>
              <p className={styles.avaliacao__text}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;