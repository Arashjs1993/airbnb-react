import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
      <div>
        <Header/>
        <Hero/>
        <Card 
          img="image 12.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
      </div>
       );
}

export default App;
