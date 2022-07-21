let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let Outros = 19849.53;

let vetor = [SP,RJ,MG,ES,Outros];
let vetorString = ["SP","RJ","MG","ES","Outros"];

let total = 0;
for(let i = 0; i<vetor.length;i++){
    total+=vetor[i];
}

function porcentagem(total, estado){
    let porcentagem = (100*estado/total);
    return porcentagem;
}

let pSP = porcentagem(total, SP);
let pRJ = porcentagem(total, RJ);
let pMG = porcentagem(total, MG);
let pES = porcentagem(total, ES);
let pOutros = porcentagem(total, Outros);

let vetorPorcent = [pSP, pRJ, pMG, pES, pOutros]

for(let i = 0; i<vetor.length;i++){
    console.log(`O estado de ${vetorString[i]} teve um rendimento de ${vetorPorcent[i]}%`)
}