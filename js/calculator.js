const result = document.querySelector(".result");
 let numberForString = '';
 let oper = '';
 let num1;
 let num2;
 let flag = true;

  function inputNum(num){
    if(flag){
    numberForString += num;
    result.value += num;
    }else{
        emptyResult();
        flag= true;
        inputNum(num);
    }
}

function operator(opr){
  
    if(oper === ''){
        if(numberForString === ''){
            oper = '';
        }else{
        saveOperator(opr);
    }
    }

    if(opr === '='){
        if(num1 === undefined){
            console.log("순서가 틀렸습니다!");
        }else{
       num2 = parseInt(numberForString);
       calculate(num2);
    }
    }

    if(opr === 'C'){
       emptyResult();
    }
}

function saveOperator(opr){
    if(opr !== '='){
    oper = opr;
    result.value += oper;
    num1 = parseInt(numberForString);
    numberForString = '';
    }
    
}

function calculate(num2){
    
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
    numberForString = '';
    num1 = '';
    num2 = '';
    oper = '';
}