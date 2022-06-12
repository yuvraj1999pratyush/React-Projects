import './Style.css';
import Question from './components/Question';
import React from 'react';
import QuizData from './components/QuizData';
import { Link } from 'react-router-dom';



export default function All() {

  
  const [count, setCount] = React.useState(0);
  const [display, setDisplay] = React.useState(false);

  let lst = QuizData();

  console.log(lst);



  function getData(data) {

    if (!data.isClicked && data.val === data.correct) {
      setCount(count => count + 1);
    }

    if (!data.isClicked && data.val !== data.correct) {
      setCount(count => count - 1);
    }

    if (data.isClicked && data.val === data.correct) {
      setCount(count => count - 1);
    }

    if (data.isClicked && data.val !== data.correct) {
      setCount(count => count + 1);
    }

  }

  const showQuiz = lst.map(q => {
    return (
      <Question

        key={q.question}
        question={q.question}
        option1={q.option1}
        option2={q.option2}
        option3={q.option3}
        option4={q.option4}
        correct={q.correct}
        getData={getData}
        display={display}
        showColor={showColor}
      />
    );
  })

  function showColor(styles) {

  }

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <div>
      <div className="All">
        {showQuiz}
        <button className='app-btn' onClick={handleDisplay}>Show Correct Answers</button>
        {display && <h1 className='score'>Your Score is {count}</h1>}

        <Link to={`/`}>
          <button className='return'>Return To Home Page</button>
        </Link>

      </div>
    </div>
  );
}

