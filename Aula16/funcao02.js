function soma(n1=0, n2=0) { /*Parâmetros predefinidos: evita que ao somar uma variável com outra indefinida, não dê o erro de NaN (Not a Number)*/
    return n1 + n2
}

console.log(soma(10))