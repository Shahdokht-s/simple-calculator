const result = document.getElementById("result");
let justCalculated = false;


function clearDisplayAll(){
    result.value = "";
    justCalculated = false;
}

function clearDisplayOne(){
    result.value = result.value.slice(0 , -1);
}

function appendToDisplay(input){
    if(justCalculated){
        result.value = "";
        justCalculated = false;
    }
    result.value += input;
}

function calculate(){
try{
result.value = eval(result.value);
justCalculated = true;
}
catch(error){
    result.value = "Please enter a valid equation";
    justCalculated= true;
}

}