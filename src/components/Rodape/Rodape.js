import React from "react";

import styles from "./Rodape.module.css";

import Kahu from "../../images/Kahu.png";

import { FaSearch } from "react-icons/fa";

const Rodape = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return (
    <section className={styles.rodape}>
      <div className={styles.rodape__container}>
        <div className={styles.rodape__divison}>
          <p className={styles.rodape__titulo}>Onde Estamos?</p>
          <p className={styles.rodape__endereco}>
            Rua Dr. Gabriel dos Santos, 55 - Higienópolis - São Paulo, SP{" "}
          </p>
          <p className={styles.rodape__info}>Temos estacionamento no local!</p>
          <p className={styles.rodape__contato}>
            Whatsapp:{" "}
            <a
              className={styles.rodape__telefone}
              href="https://api.whatsapp.com/send?phone=5511971107188&text=Olá!"
            >
              (11) 97110-7188
            </a>
          </p>
        </div>
        <a href="https://www.google.com/maps/place/Rua+Dr.+Gabriel+dos+Santos,+55+-+Higienópolis,+São+Paulo+-+SP,+01231-010/data=!4m2!3m1!1s0x94ce5816c57a4bab:0x4e4e860476115260?sa=X&ved=1t:242&ictx=111">
          <div className={styles.rodape__mapa}>
            <img className={styles.banner__image} src={Kahu} />
            <FaSearch className={styles.banner__icon} />
          </div>
        </a>
      </div>
      <p className={styles.banner__copyright}>
        ©{anoAtual} All Rights Reserved.
      </p>
      <p className={styles.rodape__autor}>
        Site desenvolvido com ❤️ por{" "}
        <a
          className={styles.rodape__autor__link}
          href="https://www.linkedin.com/in/felipepanebiancopontin/"
        >
          Felipe Panebianco Pontin
        </a>
      </p>
    </section>
  );
};

export default Rodape;
