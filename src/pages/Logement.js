import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HousingCard from "../Components/House";
import logementData from "../data.json";

function Logement() {
  const { id } = useParams();
  const logement = logementData.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <HousingCard housing={logement} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
