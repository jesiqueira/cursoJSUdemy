const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    },
}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

let str = JSON.parse('{"a":1, "b":2, "c":3}')
console.log(typeof str)
console.log(str.a)
console.log(str.b)
console.log('-------------')

let testeConverteString = JSON.parse(JSON.stringify(obj))

console.log(testeConverteString)
