import React from "react";

import wave from "../assets/image/wave.svg";

import header from "../assets/image/header.jpg";

import "../styles/BannerHeader.css";

import Button from "@material-ui/core/Button";

function BannerHeader() {
  const headerFond = 'url(' + header + ') no-repeat center center / cover';
  return (
    <div className="main">
      <section className="hero-section pt-100 background-img" style={{background: headerFond}}>
        <div className="container header-contenu mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="hero-content-left text-white text-center">
              <h1 className="text-white">Développeur web freelance </h1>
              <p className="lead mt-5 d-none d-md-block"> Développeur freelance dans l&apos;Est de la France depuis 1 ans, je développe vos projets web et mobile sur mesure.</p>
                <div className="d-flex justify-content-center flex-lg-row flex-column">
                  <a href="#contact"><Button variant="#7FB6D4" className="mt-4 mx-5 ">Contactez-moi </Button></a>
                  <p className="mt-lg-5 mt-3 lead ml-lg-4 text-center"><u> OU </u></p>
                  <a href="#contact"><Button variant="#7FB6D4" className="mt-lg-4 mx-5">Demandez un devis</Button></a>
                </div>
            </div>
          </div>
        </div>
        <div className="bottom-img">
          <img src={wave} alt="Forme de vague" className="img-fluid"/>
        </div>
      </section>
    </div>
    )
}
export default BannerHeader
