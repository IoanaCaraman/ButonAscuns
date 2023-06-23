function handleForm() {
    event.preventDefault();

    var input = document.getElementById("formInput");
    var buttonsContainer = document.getElementById("buttonsContainer");

    for( let i = 0; i < input.value; i++) {
        var button = document.createElement("button");
        button.classList.add("pressButton");
        buttonsContainer.appendChild(button);
        button.classList.add("press.SubmitButton");
    }
    handleButtons();
}


function handleButtons() {

    var buttons = document.getElementsByClassName("pressButton");
    var winnerIndex = Math.floor(Math.random() * buttons.length);

    for(let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function(){
        if(this === buttons[winnerIndex]){
        this.textContent = "castigator";
        }else {
        this.textContent = "necastigator";
        }
        });
    }
}