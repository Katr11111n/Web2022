        function calculate(num1, num2, sign){
    const signs = {
        "+": (num1, num2) => num1 + num2,
        "-": (num1, num2) => num1 - num2,
        "*": (num1, num2) => num1 * num2,
        "/": (num1, num2) => num1 / num2
    }
    if (Array.isArray(num1)){
        let result = []
        num1.map((first, index) => {
            const secondNum = num2[index]
            result.push(signs[sign](first, secondNum))
        })
        return result
    }
    if (typeof num1 === 'object'){
        return {result: signs[sign](num1.a, num2.b)}
    }
    return signs[sign](num1, num2)
}

console.log(`[10,6,3] * [1,5,30] = `,calculate([10,6,3], [1,5,30], "*"))
console.log(`[10,6,3] + [1,5,30] = `,calculate([10,6,3], [1,5,30], "+"))

 console.log(`{a: 100} - {b: 10} = ` ,calculate( {a: 100}, {b: 10}, "-"))
console.log(`{a: 100} / {b: 10} = ` ,calculate({a: 100}, {b: 10}, "/"))
