import React from "react";
// import ReactDOM from "react-dom";

function FirstPage() {

  return (
    <div className="container">
      <div>
        <h4>Question</h4>
        <form method="get">
          <input 
            type="text" 
            placeholder="Enter Question-----" 
          />
        </form>
      </div>
              
      <div>
        <h4>Answer Options</h4>
        <form method="get">
          <div>
            <input 
              type="text" 
              placeholder="A:"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="B:"
            />
            </div>
            <div>
            <input 
              type="text" 
              placeholder="C:"
            />
            </div>
          </form>
        </div>
              
      <div className="btn">
        <button className="answerBtn">Answer!</button>
      </div>        
    </div>
  );
}



export default FirstPage;