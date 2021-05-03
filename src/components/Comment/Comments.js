import React, { useEffect, useState } from "react";
import "../Home.css";
import SVGwaveG from "../Images/wave_gray.svg";
import "./Comment.css";
import NewComment from "./NewComment";

export const CommentsList = [
  {
    id: 1,
    description: "Amazing",
    text: "Nice design!",
    name: "Anonimous",
  },
];
const Comments = () => {
  const [inputText, setInputText] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [commentslist, setCommentslist] = useState(CommentsList);

  // run once
  useEffect(() => {
    getLocalComments();
  }, []);

  // useEffect
  useEffect(() => {
    saveLocalComments();
  }, [commentslist]);

  // saving it locally
  const saveLocalComments = () => {
    localStorage.setItem("commentslist", JSON.stringify(commentslist));
  };
  const getLocalComments = () => {
    if (localStorage.getItem("commentslist") === null) {
      localStorage.setItem("commentslist", JSON.stringify([]));
    } else {
      const commentLocal = JSON.parse(localStorage.getItem("commentslist"));
      setCommentslist(commentLocal);
    }
  };

  return (
    <div className="fifth_session" id="comments">
      <h2 className="title">Leave a Comment here</h2>
      <div className='comments_grid'>

      {commentslist.map((item) => {
        return (
          <div className="quote">
            <blockquote>
              <p>
                <em>
                  <strong>"{item.description}"</strong> <br />"{item.text}”
                </em>
              </p>
            </blockquote>
            <p>
              <em>-–{item.name}</em>
            </p>
          </div>
        );
      })}
      {/* <blockquote>
          <p>
            <em>
              <strong>“All The Nuts And Bolts”</strong> <br />
              "I appreciated the nuts and bolts, especially the cost of living,
              the financial considerations and strategies and the businesses
              that you showcased were interesting and enticing”
            </em>
          </p>
        </blockquote> */}

      <NewComment
        inputText={inputText}
        setInputText={setInputText}
        inputDescription={inputDescription}
        setInputDescription={setInputDescription}
        commentslist={commentslist}
        setCommentslist={setCommentslist}
        inputName={inputName}
        setInputName={setInputName}
      />
    </div>
      <img src={SVGwaveG} alt="" className="wave" />
    </div>
  );
};

export default Comments;
