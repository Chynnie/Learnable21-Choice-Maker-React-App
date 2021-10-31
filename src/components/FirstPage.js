import React, { useState } from "react";
import Textfield from "./Textfield";

function FirstPage({ setShowSecondPage, questions, setQuestions }) {
  const [question, setQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: ""
  });
  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setQuestions([...questions, question]);
    setShowSecondPage(true);
  };

  return (
    <div className="container">
      <form method="get">
        <h4>Question</h4>
        <Textfield 
          type="text" 
          placeholder="Enter Question-----" 
          name="question"
          onChange={handleChange}
        />
        <h4>Answer Options</h4>
        <Textfield 
          type="text"
          placeholder="A:"
          name="option1"
          onChange={handleChange}
        />
        <Textfield 
          type="text"
          placeholder="B:"
          name="option2"
          onChange={handleChange}
        />
        <Textfield 
          type="text"
          placeholder="C:"
          name="option3"
          onChange={handleChange}
        />
      </form>
      
      <button 
        className="answerBtn"
        onClick={handleSubmit}
        disabled={
          !question.question ||
          !question.option1 ||
          !question.option2 ||
          !question.option3
        }
      >
        Answer!
      </button>
    </div>
  );
}

export default FirstPage;