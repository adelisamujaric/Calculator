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

            if(buttonAdd === "Clear all"){
                insertNumber.textContent = "0";
                calculation.textContent = "0";
                previousNumber = null;
                currentOperator = null;
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

function clearFields(){
    const buttons = document.querySelectorAll(".mainButtons");
    const insertNumber = document.getElementById("insert");
    const calculation = document.getElementById("calculation");

    
        buttons.forEach(button =>{
            button.addEventListener('click', function(){
                this.classList.add("mainButtons-clicked");
                setTimeout(()=>{
                    this.classList.remove("mainButtons-clicked");
                    },200);

                    const clickedButton = this.textContent.trim();

                    if(clickedButton === "Clear all"){
                        insertNumber.textContent = "0";
                        calculation.textContent = "0";
                    }

                    if(clickedButton === "Delete"){
                        let currentText = insertNumber.textContent;
                        if(currentText.length>1){
                            insertNumber.textContent = currentText.slice(0,-1);
                            calculation.textContent = currentText.slice(0, -1);
                        }else{
                            insertNumber.textContent = "0";
                            calculation.textContent = "0";
                        }
                    }
            })
        })

}
clearFields();

