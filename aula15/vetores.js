/*
for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor é ${valores[pos]}`)
}


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let num = [8,1,7,4,2,9]

num.push(1) //adiciona valores a um array.
num.sort()//ordena os elementos do próprio array e retorna o array.
console.log(num)
console.log(`O vetor tem ${num.length} posições`)/* indica quantos argumentos a função espera, i.e. o número de parametros formais. */
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) /*serve para sabermos qual índice determinado pedaço da string corresponde...*/

if(pos == -1) {
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor esta na posição ${pos}`)
}