import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import CardData from './Components/CardData';

function App() {

  //array of object places which returns a list of all cards
  const places = CardData.map((place)=>{
    return <Card 
        place={place}
    />
  });


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='experiences-card'>
            {places}
      </div>
    </div>
  );
}

export default App;
