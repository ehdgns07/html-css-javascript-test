const result = document.querySelector(".result");
 let number = '';
 let oper = '';
 let num1;
 let num2;
 let flag = true;

  function inputNum(num){
    if(flag){
    number += num;
    result.value += num;
    }else{
        emptyResult();
        flag= true;
        inputNum(num);
    }
}

function operator(opr){
  
    if(oper === ''){
        saveOperator(opr);
    }

    if(opr === '='){
       calculate();
    }

    if(opr === 'C'){
       emptyResult();
    }
}

function saveOperator(opr){
    oper = opr;
    result.value += oper;
    num1 = parseInt(number);
    number = '';
}

function calculate(){

    num2 = parseInt(number);
    if(oper === '/'){
        result.value = num1 / num2;
        flag = false;
    }
    if(oper === '*'){
        result.value = num1 * num2;
        flag = false;
    }
    if(oper === '-'){
        result.value = num1 - num2;
        flag = false;
    }
    if(oper === '+'){
        result.value = num1 + num2;
        flag = false;
    }
}

function emptyResult(){
    result.value = '';
    number = '';
    num1 = '';
    num2 = '';
    oper = '';
}