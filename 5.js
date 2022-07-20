let input = prompt("Insira a palavra que deseja inverter");
let novo = ""
for(let i=input.length-1;i>=0;i--){
    novo+=input[i];
}
alert(`A palavra ${input} invertida é:\n${novo}`)