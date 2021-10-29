import React from "react";

function SecondPage({headerName}) {
    
  return (
    <div className="container">
      <h1>{headerName}</h1>
      
      <div className="answerContainer">
        <h2>What is my name?</h2>
        <form method="get">
          <div>
            <input type="text" value="A. Chinenye" className="output-option"/>
          </div>
          <div>
            <input type="text" value="B. Ifeoma" className="output-option"/>
          </div>
          <div>
            <input type="text" value="C. Nkechi" className="output-option"/>
          </div>
        </form>
      </div>
      
      <div className="btn-secondpage">
        <div><button className="askAgain"><i class="fa fa-repeat" aria-hidden="true"></i>Ask Again!</button></div>
        <button className="btn-secondpage">Ask Another Random Question</button>
        <button className="btn-secondpage">Get Another Random Answer</button>
      </div>

      <div>
        <h2>Most Popular Question</h2>
        <span>What is my name?</span>
      </div>
      
    </div>
  )
}


export default SecondPage;