import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import CardList from "../Components/Card";
import data from "../data.json";
import bgHome from "../Assets/image/fond_mer.jpg";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="container-home">
        <Header />
        <Banner bg={bgHome} title={"Chez vous, partout et ailleurs"} />
        <CardList data={data} />
      </div>
      <Footer />
    </>
  );
}
export default Home;
