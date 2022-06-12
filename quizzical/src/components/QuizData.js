import React from "react";


export default function QuizData(){
    const [list,setList] = React.useState([]);

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then(resp => resp.json())
        .then(data => setList(data.results.map(e =>{
            let list = [e.correct_answer,e.incorrect_answers[0],e.incorrect_answers[1],
            e.incorrect_answers[2]];
            let shuffle = list.sort((a,b) => Math. random() - 0.5);
            return (
                
                {
                    "question":e.question,
                    "option1":shuffle[0],
                    "option2":shuffle[1],
                    "option3":shuffle[2],
                    "option4":shuffle[3],
                    "correct":e.correct_answer,
                }
            );
        })));

      },[]);
      return list;

}