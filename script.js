function dateAndTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    document.getElementById("timerText").textContent = dateTimeString;
}
dateAndTime();
setInterval(dateAndTime, 1000);

function clickOnButton(){

    const buttons = document.querySelectorAll(".buttons");
    const insertNumber = document.getElementById("insert");
    const calculation = document.getElementById("calculation");

    let currentInput = "";
    let previousNumber = null;
    let currentOperator = null;
    

    
    buttons.forEach(button => {
        button.addEventListener('click', function(){

            this.classList.add("buttons-clicked");

            setTimeout(()=>{
                this.classList.remove("buttons-clicked");
            },200);

            const buttonAdd = this.textContent.trim();

            if(buttonAdd.match(/[0-9]/) || buttonAdd === ","){
                if(insertNumber.textContent === "0" && buttonAdd !== 0){
                    insertNumber.textContent = buttonAdd;
                }else{insertNumber.textContent += buttonAdd;}
                currentInput += buttonAdd;
            }


            if(calculation.textContent === "0"){
                calculation.textContent = buttonAdd;
            }else{calculation.textContent += buttonAdd;}


            if(buttonAdd === "+" || buttonAdd=== "-" || buttonAdd=== "*" || buttonAdd === "/"){
                if(currentOperator !==null && previousNumber !== null){
                    currentInput = fEvaluate(previousNumber, currentOperator, insertNumber.textContent);
                    insertNumber.textContent = currentInput;
                }
                previousNumber = insertNumber.textContent;
                currentOperator = buttonAdd;
                currentInput = "";
                insertNumber.textContent = "";
            }


            if(buttonAdd === "="){

                if(previousNumber !== null && currentOperator !==null){
                    const result = fEvaluate(previousNumber, currentOperator, insertNumber.textContent);
                    insertNumber.textContent = result;
                    previousNumber = result;
                    currentOperator = null;
                    calculation.textContent = result;
                }

            }

         });  

        
    });

    function fEvaluate(num1, operator, num2){
        switch(operator){
            case '+':
                return (parseFloat(num1) + parseFloat(num2)).toString();
            case '-':
                return (parseFloat(num1) - parseFloat(num2)).toString();
            case '*':
                return (parseFloat(num1) * parseFloat(num2)).toString();
            case '/':
                return (parseFloat(num1) / parseFloat(num2)).toString();
            default:
                return "Error";
            
        }
    }
}
clickOnButton();


