import Header from "../components/header";
import Footer from "../components/Footer";
 

const Information = () => {
    return (
      <>
        <Header />
        <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-4">
            ¿La información proporcionada en el Mapa de la Comida es confiable?
          </p>
          <p className="mb-4">
            ¡Por supuesto! Toda la información recopilada proviene de datos de la Procuraduría Federal del Consumidor (PROFECO) y del Consejo Nacional de Población (CONAPO).
          </p>
          <p className="text-lg font-semibold mb-4">
            ¿De dónde provienen los datos de los precios de los productos?
          </p>
          <p className="mb-4">
            Los datos son del programa Quién es Quién en los Precios (QQP), el cual recopila precios de productos comunes en hogares para ayudar a los consumidores a comparar precios.
          </p>
          <p className="text-lg font-semibold mb-4">
            ¿Qué es el Índice de Desarrollo Social?
          </p>
          <p className="mb-4">
            El Índice de Desarrollo Social (IDS) de la Ciudad de México es una medida ponderada que integra las dimensiones de vivienda, acceso a servicios sanitarios (agua, drenaje y excusado), adecuación energética, acceso a internet y disponibilidad de telefonía (fija o celular), así como el rezago educativo, el acceso a los servicios de salud y a la seguridad social.
          </p>
          <p className="text-lg font-semibold mb-4">
            ¿De dónde se obtuvieron los precios de los locales?
          </p>
          <p className="mb-4">
            Toda la información recopilada para los locales proviene de Inmuebles24, el cual es un negocio inmobiliario extremadamente confiable, con más de 15 años en el mercado.
          </p>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Information;