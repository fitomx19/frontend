import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
        name: 'Huerta Ramírez Michael Adolfo',
        bio: 'Estudiante de la carrera Lic. en Ciencia de Datos en ESCOM.'
    },
    {
      name: 'Guerrero Paisano Jesedh',
      bio: 'Estudiante de la carrera Lic. en Ciencia de Datos en ESCOM.'
    },
    {
      name: 'Mondolla Cervantes Erin',
      bio: 'Estudiante de la carrera Lic. en Ciencia de Datos en ESCOM.'
    },
    {
      name: 'Ramírez Mendez Kevin',
      bio: 'Estudiante de la carrera Lic. en Ciencia de Datos en ESCOM.'
    },
    {
      name: 'Ortega Tovar Luis Guillermo',
      bio: 'Estudiante de la carrera Lic. en Ciencia de Datos en ESCOM.'
    }
  ];

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Nuestro Equipo</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Team;
