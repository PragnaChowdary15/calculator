// select display and all buttons
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

//calcualtor state
let currentValue = "";
let previousValue = "";
let operator = "";

//loop through all buttons
buttons.forEach((button) =>
{
     button.addEventListener("click",()=>
    {
        const value = button.innerText;

        //clearing 
        if(value === "AC")
        {
            currentValue = "";
            previousValue = "";
            operator = "";
            display.innerText = "0";
            return;

        }

        //equals operator
        if(value === "=")
        {
            if(currentValue === "" || previousValue === "")
                return;
            let result;

            const prev = Number(previousValue);
            const curr = Number(currentValue);
            if(operator === "+") result = prev+curr;
            if(operator === "-") result = prev-curr;
            if(operator === "*") result = prev*curr;
            if(operator === "/") result = prev/curr;

            display.innerText = result;
            currentValue = result.toString();
            previousValue = "";
            operator = "";
            return;
        }

            //operators 
            if(value === "+" || value === "-" || value === "*" || value === "/")
            {
                if(currentValue === "") return;
                previousValue = currentValue ;
                operator = value;
                currentValue = "";
                return ;
            }

            //decimal point
            if(value === ".")
            {
                if(currentValue.includes(".")) return;
            }
            
            currentValue += value;
            display.innerText = currentValue;


        
    });
});