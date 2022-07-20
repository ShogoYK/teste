function is_in_fibonacci(z){

    let fibonacci = [0,1]
    let next = 0
    count = 1
    while(z>next){
        next = fibonacci[count]+fibonacci[count-1]
        fibonacci.push(next)
        count++
    }
    console.log(`A sequencia de Fibonacci é: ${fibonacci}...`)
  
    return fibonacci.includes(Number(z))
}


let numero = prompt("Insira o numero a ser verificado")
const resultado = is_in_fibonacci(numero)
console.log(resultado)
if(resultado == true){
    alert(`O número ${numero} pertence a sequencia de fibonacci!`)
}
else if(resultado == false){
    alert(`O número ${numero} NÃO pertence a sequencia de fibonacci!`)
}