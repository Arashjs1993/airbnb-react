import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
/*Data contains our data objects */
import Data from "./Data";

function App() {
  /*Map function of the Data array
  turns each data object in the Data.js into 
  the representable JSX format on the browser, 
  inside the map function there is loop that
  loops through all the data objects in Data.js.
  The input of the map func is the function
  that we want to apply to each of the items the loop
  of the map goes over them*/
  const cardsArray = Data.map(hero => {
    return <Card 
      key = {hero.id}
      /*Instead of passing the object props
      one by one we can pass the entire hero object
      to the Card component, in this way we
      reduce the coding effort a lot */
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
