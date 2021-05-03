import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const NewComment = ({
  setInputText,
  commentslist,
  setCommentslist,
  inputText,
  setInputName,
  inputName,
  setInputDescription,
  inputDescription,
}) => {
  const inputTextHandler = (e) => {
      
      if (e.target.value !== "") {
          setInputText(e.target.value);
      }
  };

  const inputNameHandler = (e) => {
    if (e.target.value !== "") {
        setInputName(e.target.value);
    }
  };

  const inputDescriptionHandler = (e) => {
    if (e.target.value !== "") {
        setInputDescription(e.target.value);
    }
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "" && inputName !== "" && inputDescription !== "") {
        setShowSuccess(true);
        setCommentslist([
            ...commentslist,
            {
              text: inputText,
              name: inputName,
              description: inputDescription,
              id: Math.random() * 1000,
            },
          ]);
          setInputDescription("");
          setInputText("");
          setInputName("");
          setShowError(false);
    }
    else {
        setShowError(true);
    }
    
  };

  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };

  const [clicked, setClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
   
    <form className={clicked ? "form active" : "form"}>
      
      <div
        onClick={clickHandler}
        className={clicked ? "toggle active" : "toggle"}
      >
          {clicked ? <h2>Leave a Comment here</h2> : ""}
      </div>
      <div className="input">
        <input
          placeholder="Describe it with max of 3 words"
          value={inputDescription}
          onChange={inputDescriptionHandler}
          type="text"
          className="todo-input"
        />
        <input
          placeholder="Leave a comment"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <input
          placeholder="Enter your Name"
          value={inputName}
          onChange={inputNameHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          Submit
        </button>
        {showError ? <p style={{color:"#800000"}}>Please avoid empty space!</p>: ""}
        {showSuccess ? <p style={{color:"green"}}>Added!</p>: ""}
      </div>
    </form>
  );
};

export default NewComment;
