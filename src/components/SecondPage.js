import React, { useState, useEffect } from "react";

function SecondPage({ questions, setShowSecondPage }) {
  const question = questions[questions.length - 1];
  console.log(question);

  const [option, setOption] = useState(0);
  const options = [question.option1, question.option2, question.option3];
  const randOption = () => {
    let i = options.length;
    const j = Math.floor(Math.random() * i);
    setOption(options[j]);
    console.log(option);
  };
  useEffect(() => {
    randOption();
  },[])
    
  return (
    <div className="container">

      <div className="answerContainer">
        <h2>{`${question.question}?`}</h2>
        <p style={{color: option === question.option1 ? "red": "#031334"}}>{`A. ${question.option1}`}</p>
        <p style={{color: option === question.option2 ? "red": "#031334"}}>{`B. ${question.option2}`}</p>
        <p style={{color: option === question.option3 ? "red": "#031334"}}>{`C. ${question.option3}`}</p>
      </div>
      
      <div>
        <div>
          <button 
            className="askAgain"
            onClick={randOption}
          >
            <i class="fa fa-repeat" aria-hidden="true"></i>Ask Again!
          </button>
        </div>
        <button
          className="btn-secondpage"
          onClick={() => setShowSecondPage(false)}  
        >
          Ask Another Random Question
        </button>
        <button 
          className="btn-secondpage"
          onClick={() => setShowSecondPage(false)}
        >
          Get Another Random Answer</button>
      </div>

    </div>
  )
}


export default SecondPage;