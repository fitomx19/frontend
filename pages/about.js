import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg font-semibold mb-4">
          ¿Qué es el Mapa de la Comida?
        </p>
        <p className="mb-4">
          El Mapa de la Comida es un proyecto que busca ayudar a las personas a encontrar los mejores precios de locales de comida en la Ciudad de México.
        </p>
        <p className="text-lg font-semibold mb-4">
          ¿Cómo funciona?
        </p>
        <p className="mb-4">
          El Mapa de la Comida utiliza datos abiertos de la Ciudad de México para mostrar los precios de locales de comida y supermercados en la ciudad.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
