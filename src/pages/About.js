import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import bgAbout from "../Assets/image/fond_mer2.png";
import Collapse from "../Components/Collapse";
import Footer from "../Components/Footer";

const engagements = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissen une fiabilité total. Les photos sont conformes aux logements,et toutes les informations sont régulierement vérifiées pas nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeur fondatrives de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme",
  },
  {
    title: "Service",
    content:
      "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôte ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Sécutité",
    content:
      "La sécurité et la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussibien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
function About() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner bg={bgAbout} />
        {engagements.map((engagement, index) => (
          <Collapse key={index} title={engagement.title} content={engagement.content} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default About;
