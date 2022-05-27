  function factorial(n) {
    //return (n != 1) ? n * factorial(n - 1) : 1;
    let res = 1
    while (n--) res *= n + 1
    return res
  }
  function fiveTask() {
    let x = prompt('Введіть число ', '')
    let result = factorial(x)

    let number = document.createElement('h3')
    number.innerHTML = `Ви ввели таке число: ${x}`
    document.body.appendChild(number)
    let newResult = document.createElement('h2')
    newResult.innerHTML = `Результат ${x}! = ${result}`
    document.body.appendChild(newResult)
  }
  fiveTask()
