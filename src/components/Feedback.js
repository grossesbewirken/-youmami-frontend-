import React from "react";
import "./Feedback.css";


// I M P O R T   F O N T A W E S O M E
import { GiPartyPopper } from "react-icons/gi"


const Feedback = () => {
  return (
    <>
      <div className="center high">
        <div>
          { <GiPartyPopper className="icon big"/> }
        </div>
        <h1>Thank you for your inspiration</h1>
      </div>
    </>
  );
};
export default Feedback;
