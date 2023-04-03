let soma = 0
let anterior = 0
let proximo = 1


for (i=0; i<=19; i++){
    soma = anterior + proximo
    anterior = proximo
    proximo = soma

    document.write(soma + ' ')
    document.write('<img src="Ex4/fibogol.jpeg" alt="">')
}