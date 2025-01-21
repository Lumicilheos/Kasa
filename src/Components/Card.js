import React from "react";
import "../Assets/scss/Components/_card.scss";

// Composant Card (représente une seule carte)
// function Card({ title, location, cover, host }) {
//   return (
//     <a href="/Logement" className="card">
//       <img src={cover} alt={title} className="card-image" />
//       <div className="card-content">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-location">{location}</p>
//         <div className="card-host">
//           <img src={host.picture} alt={host.name} className="host-picture" />
//           <p>{host.name}</p>
//         </div>
//       </div>
//     </a>
//   );
// }

// Composant CardList (liste toutes les cartes)

//  ENLEVER LE MAX DIMAGE §§
function CardList({ data }) {
  // const maxCards = 6; // Nombre maximum de cartes à afficher

  return (
    <div className="grid-container">
      {data.map((item) => (
        <a href={`/logement/${item.id}`} className="card" key={item.id}>
          <img src={item.cover} alt={item.title} className="card-image" />
          <h2 className="card-title">{item.title}</h2>
          {/* <p className="card-location">{item.location}</p> */}
        </a>
      ))}
    </div>
  );
}
export default CardList;
