import React, {useState} from 'react';
import Button from './buton.js'

const ButtonGames = () => {
const [buttons, setButtons] = useState([]);
const [number, setNumber] = useState('');
const [winnerIndex, setWinnerIndex] = useState(null);

const handleNumberChange = (event) => {
setNumber (event.target.value);
};
const handleForm = (event) => {
event.preventDefault ();
let newButtons = [];
let n = parseInt (number);
    for(let i = 0; i < n; i++) {
    newButtons.push(i);
    };
const randomIndex = Math.floor(Math.random() * n);
setWinnerIndex (randomIndex);
setButtons (newButtons);

};
    return (
        <div>
            <form onSubmit = {handleForm}>
                <input type = "number" value = {number} onChange = {handleNumberChange}/>
                <button type = "submit">
                Submit Number
                </button>
            </form>
        {buttons.map((button,index) => (<Button key = {index} isWinner = {index === winnerIndex}/>))}
        </div>
    );
};
export default ButtonGames;