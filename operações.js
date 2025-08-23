// criar a função que vai somar os 2 valores dos inputs
//receber o valor dos 2 inputs e armazenar em 2 variáveis
// realizar a soma das 2 variáveis e colocar em outra variavel
// mostrar no ultimo input o resultado


function calc(op){
    let num1 = parseFloat(document.getElementById("number1").value) 
    //parseFloat ou ParseInt são métodos que convertem string em numeros
    let num2 = parseFloat(document.getElementById("number2").value)
    
    let result = 0

    // explicando o switch case aqui:
    //se o parametro (op) lá do DOM for +,-,*,ou / vai realizar uma operação diferente
    switch(op){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
   
    }
    document.getElementById("result").value = result // o ultimo input recebe o valor do resultado   

    let newHistory = '<p>' + num1 + " " + op + " " + num2 + " = " + result + '</p>' // variavel que vai receber cada operação
    let history = document.getElementById("history")
    history.innerHTML = newHistory + history.innerHTML  //adicionando cada resultado em novas divs dentro do history de forma que a ultima operação sempre será mostrada no topo
    // 5 + 5 = 10 div1
    // 6 / 3 = 2 div2 ...

    //validação para receber as 10 ultimas operações
    // lógica das divs como "filhos" (cada resultado = +1 div que vai ser adicionada dentro da div mãe history)

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]) //remove o ultimo "filho" //childNodes é um array e está buscando o indice 10
    }
}


