let answer = document.querySelector("#answer");
let inputs = document.querySelectorAll("input");
var val = '';


function calc(e) {


    if (e.target.value === "=") {
        try {
            val = answer.innerText;
            console.log(typeof val);
            var abc = eval(val);
            val=abc;
            console.log(abc);
            answer.innerHTML = abc;
        } catch (error) {
            answer.innerHTML = "ERROR";
        }


    }
    else if (e.target.value === "DE") { 
        
        console.log(val);
       val = val.toString();
        console.log(e.target.value);
        console.log(typeof val);
        val = val.slice(0, -1);
        answer.innerHTML = val;
        console.log(val.slice(0, -1));




    }
    else if (e.target.value === "AC") {
        answer.innerHTML = "";
    }

    else {
        answer.innerHTML += e.target.value;
        val= answer.innerHTML;
    }
}
inputs.forEach((input) => {
    input.addEventListener("click", calc);
})




