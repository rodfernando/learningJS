function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é par`
    } else {
        return `O número ${n} é ímpar`
    }
}

let res = parimpar(4)
console.log(parimpar(11))
console.log(res)