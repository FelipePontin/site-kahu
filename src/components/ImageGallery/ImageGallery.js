import React, { useEffect } from "react";

import styles from "./ImageGallery.module.css";

import Title from "../Title/Title";
import Button from "../Button/Button";
import Masonry from "react-responsive-masonry";

import Cachorro01 from "../../images/CachorrosMomentosFelizes/Cachorro01.png";
import Cachorro02 from "../../images/CachorrosMomentosFelizes/Cachorro02.png";
import Cachorro03 from "../../images/CachorrosMomentosFelizes/Cachorro03.png";
import Cachorro04 from "../../images/CachorrosMomentosFelizes/Cachorro04.png";
import Cachorro05 from "../../images/CachorrosMomentosFelizes/Cachorro05.png";
import Cachorro06 from "../../images/CachorrosMomentosFelizes/Cachorro06.png";
import Cachorro07 from "../../images/CachorrosMomentosFelizes/Cachorro07.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ImageGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const images = [
    Cachorro01,
    Cachorro02,
    Cachorro03,
    Cachorro04,
    Cachorro05,
    Cachorro06,
    Cachorro07,
  ];

  return (
    <section className={styles.image__gallery} data-aos="fade-up">
      <div className={styles.image__title__division}>
        <Title title="Momentos Felizes na Kahu" />
      </div>
      <p className={styles.image__gallery__subtitle}>
        Confira algumas fotos dos nossos aulunos se divertindo e aproveitando
        cada momento na Kahu!
      </p>
      <a href="https://www.instagram.com/kahu.higienopolis/">
        <Button text={"INSTAGRAM"} type={"green"} icon={"FaInstagram"} />
      </a>
      <div className={styles.image__gallery__content}>
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className={styles.image__gallery__image}
              data-aos="flip-left"
              alt="Estrelas Avaliações"
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ImageGallery;
