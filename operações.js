// criar a função que vai somar os 2 valores dos inputs
//receber o valor dos 2 inputs e armazenar em 2 variáveis
// realizar a soma das 2 variáveis e colocar em outra variavel
// mostrar no ultimo input o resultado


function calc(op){
    let num1 = parseFloat(document.getElementById("number1").value) 
    //parseFloat ou ParseInt são métodos que convertem string em numeros
    let num2 = parseFloat(document.getElementById("number2").value)
    
    let result = 0

    switch(op){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;

        
    }



    document.getElementById("result").value = result // o ultimo input recebe o valor do resultado   
}
