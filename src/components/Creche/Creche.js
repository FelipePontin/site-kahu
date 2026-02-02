import React, { useEffect } from "react";

import styles from "./Creche.module.css";

import IconeCreche from "../../images/IconeCreche.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

import Title from "../Title/Title";

import AOS from "aos";
import "aos/dist/aos.css";

import ImagemCreche1 from "../../images/Creche/ImagemCreche1.png";
import ImagemCreche2 from "../../images/Creche/ImagemCreche2.png";
import ImagemCreche3 from "../../images/Creche/ImagemCreche3.png";

const Creche = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    fontSize: "24px",
    color: "#000",
    cursor: "pointer",
    zIndex: 1,
    borderRadius: "50%",
    padding: "10px",
    transform: "translateY(-50%)",
  };

  return (
    <section className={styles.creche} id="creche" data-aos="fade-up">
      <img
        className={styles.creche__icon}
        src={IconeCreche}
        alt="Icone Creche"
      />
      <Title title={"Creche Canina"} />
      <div className={styles.creche__cards}>
        <div className={styles.creche__card} data-aos="fade-up">
          <div className={styles.creche__cardDivision}>
            <img
              className={styles.creche__imagem}
              src={ImagemCreche1}
              alt="Socialização e Convívio"
            />
            <p className={styles.creche__titulo}>Socialização e Convívio</p>
            <p className={styles.creche__subtitulo}>
              Oferecemos um ambiente controlado, onde os cães podem interagir e
              brincar uns com os outros. Cães bem socializados tendem a ser mais
              equilibrados e menos ansiosos.
            </p>
          </div>
        </div>
        <div className={styles.creche__card} data-aos="fade-up">
          <div className={styles.creche__cardDivision}>
            <img
              className={styles.creche__imagem}
              src={ImagemCreche3}
              alt="Exercícios Físicos e Mentais"
            />
            <p className={styles.creche__titulo}>
              Exercícios Físicos e Mentais
            </p>
            <p className={styles.creche__subtitulo}>
              Os cães se exercitam diariamente, o que é essencial para a saúde
              física e mental. Atividades como corridas, agility e caça petiscos
              ajudam a gastar energia de maneira saudável e a ter uma mente
              mais desenvolvida
            </p>
          </div>
        </div>
        <div className={styles.creche__card} data-aos="fade-up">
          <div className={styles.creche__cardDivision}>
            <img
              className={styles.creche__imagem}
              src={ImagemCreche2}
              alt="Supervisão Profissional"
            />
            <p className={styles.creche__titulo}>Supervisão Profissional</p>
            <p className={styles.creche__subtitulo}>
              Nossa equipe é treinada para observar e responder às necessidades
              dos cães, garantindo que estejam seguros e felizes. Eles também
              são capazes de identificar sinais precoces de problemas de saúde
              ou comportamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creche;
