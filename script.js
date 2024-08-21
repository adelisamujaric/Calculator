function dateAndTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    document.getElementById("timerText").textContent = dateTimeString;
}
dateAndTime();
setInterval(dateAndTime, 1000);

function clickOnButton(){
    const buttons = document.querySelectorAll(".buttons");
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            this.classList.add("buttons-clicked");

            setTimeout(()=>{
                this.classList.remove("buttons-clicked");
            },200);

         });  
    });
}
clickOnButton();
