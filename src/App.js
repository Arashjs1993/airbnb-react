import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
/*Data contains our data objects */
import Data from "./Data";

function App() {
  const cardsArray = Data.map(hero => {
    return <Card 
      key = {hero.id}
      item = {hero}
    />
  })
  return (
      <div>
        <Header/>
        <Hero/>
        <section className="card-section">
          {cardsArray}
        </section>
      </div>
       );
}

export default App;
