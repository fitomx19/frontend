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

        <p className="text-lg font-semibold mb-4">
          ¿Cual es la fórmula para calcular la calificación de los locales?
        </p>
        <p className="mb-4">
          La fórmula para calcular la calificación de los locales es la siguiente:
        </p>
        <p className="mb-4">
          - Distancia más larga de un local a un supermercado: 0 puntos
        </p>
        <p className="mb-4">
        - Distancia más corta de un local a un supermercado: 10 puntos
        </p>
        <p className="mb-4">
          Precio más alto de la cuenta de un supermercado: 0 puntos
        </p>
        <p className="mb-4">
          Precio más bajo de la cuenta de un supermercado: 10 puntos
        </p>
        <p className="mb-4">
          Indice de Desarrollo Humano de la alcaldía: Hasta 10 puntos
        </p>
        <p className="mb-4">
          Precio por metro cuadrado más alto de la alcaldía: 0 puntos
        </p>
        <p className="mb-4">
          Precio por metro cuadrado más bajo de la alcaldía: 10 puntos
        </p>

        <p className="text-lg font-semibold mb-4">
          Sumamos los puntos de cada local y los dividimos entre 5 para obtener la calificación.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
