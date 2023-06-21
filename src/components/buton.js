import React, {useState} from 'react';

const Button = ({ isWinner }) => {
const [buttonText, setButtonText] = useState("");
const changeText = (text) => setButtonText (text);

  return (
    <div>
      <button type="button" class = "pressButton" onClick={() => {
      if(isWinner){
      changeText("castigator");
      }else {
      changeText("necastigator");
      }
      }}>
        {buttonText}
      </button>
    </div>
  );
};
export default Button;