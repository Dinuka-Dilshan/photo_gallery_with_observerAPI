import { useState } from "react";
import "./Modal.css";

const Modal = ({ onBackgroundClick,setQuery }) => {

  const [text,setText] = useState('');

  const changeHandler  = (e)=>{
    setText(e.target.value)
  }


  const submithandler = ()=>{
    setQuery(text);
    onBackgroundClick()
  }

  return (
    <>
      <div
        className="blur-screen"
        onClick={(e) => {
          onBackgroundClick();
        }}
      ></div>
      <div className="modal-container">
        <div className="nodal-text-wrapper">
          <span className="modal-text">Enter a Keyword To Search</span>
        </div>
        <div className="modal-input-wrapper">
          <input type="text" className="modal-input" value={text} onChange={changeHandler}/>
        </div>
        <div className="nodal-btn-wrapper">
          <button onClick={submithandler} className="modal-btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
