let num = [5, 4, 3, 2, 1]
//num.map(x => " ")
console.log(`O nosso vetor é ${num}.`)
//inserindo valores
num[5] = 6
console.log(`O nosso vetor é ${num}.`)
//inserindo valores
num.push(7)
console.log(`O nosso vetor é ${num}.`)
console.log(num.length)
console.log(num.sort())
//função para retornar a chave (key, index)
num.indexOf(6)


console.log('='.repeat(40))

//Progressivo 
var i = 0
while(i < num.length) {
    console.log(`No index ${i} temos o número ${num[i]}.`)
    i++
}

console.log('='.repeat(40))

//Regressivo
for(let c = num.length - 1; c >= 0; c--) {
    console.log(`No index ${c} temos o número ${num[c]}.`)
}

console.log('='.repeat(40))

// for in para arrays e objetos (todo array é um object)
for(let pos in num) {
    console.log(`No index ${pos} temos o número ${num[pos]}.`)
}

