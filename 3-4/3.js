//Rodar programa no terminal com o comando: node 3.js
//NodeJS
const data = require('./dados.json');

console.log(data[0].valor)

function menor(dia){
    let menor = 99999999;
    for(let i=0; i<30;i++){
        if(dia[i].valor!=0){
            if(dia[i].valor<menor){
                menor = dia[i].valor;
            }
        }
    }
    console.log(`O menor valor de faturamento do mes foi ${menor} `)
    return menor;
}

function maior(dia){
    let maior = 1;
    for(let i = 0;i < 30;i++){
        if(dia[i].valor!=0){
            if(dia[i].valor>maior){
                maior = dia[i].valor;
            }
        }
    }
    console.log(`O maior valor de faturamento do mes foi ${maior} `)
    return maior;
}

function calcMedia(dia){
    let cont = 0;
    let soma = 0;
    for(let i = 0;i < 30; i++){
        if(dia[i].valor!=0){
            soma+=dia[i].valor;
            cont++
        }
    }
    let media = soma/cont;
    console.log(`A média de fatura diária foi: ${media}`)
    return media;

}

function acimaMedia(dia, media){
    let cont = 0;
    for(let i = 0;i < 30;i++){
        if(dia[i].valor>media){
            console.log(`O dia ${i+1} teve uma fatura acima da média,\nsendo ele de ${dia[i].valor} `)
            cont++;
        }
    }
    console.log(`${cont} dias tiveram uma fatura acima da media`)
    return cont;
}

menor(data);
maior(data);
let media = calcMedia(data)
acimaMedia(data, media);