import React from "react";
import "./style.css";
import Die from "./Components/Die";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";


function App() {

  const [dice,setDice]=React.useState(generateRandomNumber());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(()=>{
      const allHeld = dice.every(die => die.isHeld);
      const firstVal = dice[0].value;
      const allSameValue = dice.every(die => die.value === firstVal);
      if(allHeld && allSameValue){
        
        setTenzies(true);
        console.log("You Won");

      }
  },[dice])

  function generateRandomNumber(){    
      const newDice = [];

      for(let i=0;i<10;i++){
        newDice.push(generate());
      }

      return newDice;
  }

  function holdDice(id){
    setDice(oldDie => {
      return (
        oldDie.map( die => {
          return (
            die.id===id ? {...die, isHeld: !die.isHeld} : die
          );
        })
      );
    });
  }

  function generate(){
    return {
      value : Math.floor(Math.random()*6)+1, 
      isHeld: false,
      id: nanoid(),
    }
  }


  function reShuffle(){
    if(!tenzies){
      setDice(oldDie =>{
        return oldDie.map(
          die => {
            return (
              die.isHeld ? die : generate()
            )
          }
        )
      })
    }else{
      setTenzies(false);
      setDice(generateRandomNumber());
    }
    

  }


  const showDice = dice.map(die => {
    return (
      <Die key={die.id} num={die.value} isHeld={die.isHeld} holdDie={() => holdDice(die.id)} />
    )
  });

  
  

  return (
    <div className="App">
      {tenzies && <Confetti/> }
      <main className="main">
        <h1 className="title">Tenzies Game</h1>
        <div className="grid">
          {showDice}
        </div>
        <button className="btn" onClick={reShuffle}>
          
          
          {tenzies ?  "New Game" : "Roll"}
          
          
        </button>
      </main>
      
    </div>
  );
}

export default App;
