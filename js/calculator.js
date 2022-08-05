const result = document.querySelector(".result");
//  let number = '';
//  let oper = '';
//  let num1;
//  let num2;
 let flag = true;

 let numbers = {
    number : '',
    num1 : 0,
    num2 : 0,
    oper : '',
    flag : true
 }

  function inputNum(num){
    if(flag){
    numbers.number += num;
    result.value += num;
    }else{
        emptyResult();
        flag= true;
        inputNum(num);
    }
}

function operator(opr){
  
    if(nubmers.oper === ''){
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
    numbers.num1 = parseInt(numbers.number);
    numbers.number = '';
}

function calculate(){

    numbers.num2 = parseInt(numbers.number);
    if(oper === '/'){
        result.value = numbers.num1 / numbers.num2;
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