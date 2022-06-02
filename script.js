function operar(){

    let operacaoDigitada = document.getElementsByName('operacao')

    let operacaoDesejada = operacaoDigitada[0].value

    let n1 = document.getElementsByName('numero1')

    let primeiroNumero = n1[0].value;
   
    let n2 = document.getElementsByName('numero2')

    let segundoNumero = n2[0].value; 

    let resultado = document.getElementById('resultado')

    if(operacaoDesejada == 'soma' || operacaoDesejada == 'Soma'){
        resultado.innerHTML = `<p>O resultado de ${primeiroNumero} somado a ${segundoNumero} é ${+primeiroNumero + +segundoNumero} </p>`
    }else if(operacaoDesejada == 'subtração' || operacaoDesejada == 'Subtração'){
        resultado.innerHTML = `<p>O resultado de ${primeiroNumero} menos ${segundoNumero} é ${-primeiroNumero - -segundoNumero} </p>`
    }else if(operacaoDesejada == 'divisão' || operacaoDesejada == 'Divisão'){
        resultado.innerHTML = `<p>O resultado de ${primeiroNumero} dividido ${segundoNumero} é ${primeiroNumero / segundoNumero} </p>`  
    }else if(operacaoDesejada == 'multiplicação' || operacaoDesejada == 'Multiplicação'){
        resultado.innerHTML = `<p>O resultado de ${primeiroNumero} vezes ${segundoNumero} é ${primeiroNumero * segundoNumero} </p>`
    }else{
        resultado.innerHTML = `Você não selecionou uma operação corretamente!`
    }
}