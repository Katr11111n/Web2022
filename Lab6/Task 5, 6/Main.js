  let MathFrameWork ={
    first:0,
    second:0,
    calc: (num1,num2,sign)=>MathFrameWork.result = calculate(num1, num2, sign) ,
    result:''
}
MathFrameWork.first = [20,3]
MathFrameWork.second = [1,7]
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "+")
console.log(`Ви ввели [${MathFrameWork.first}] + [${MathFrameWork.second}] \n Результат додавання: `,MathFrameWork.result)

MathFrameWork.first = 2
MathFrameWork.second = 5
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "*")
console.log(`Ви ввели ${MathFrameWork.first} * ${MathFrameWork.second} \n Результат  множення: `,MathFrameWork.result)

MathFrameWork.first = {a: 120}
MathFrameWork.second = {b: 3}
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, "/")
console.log(`Ви ввели ${MathFrameWork.first.a} / ${MathFrameWork.second.b} \n Результат  ділення: `,MathFrameWork.result)



