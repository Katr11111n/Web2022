 function FourthTask() {
    let a = prompt('Введіть число А', '')
    let b = prompt('Введіть число В, яке більше за А', '')
    var sum = 0

    if (a < b) {
      let title = document.createElement('h2')
      title.innerHTML = `Ви ввели проміжок: [ ${a};${b} ]`
      document.body.appendChild(title)
    } else {
      let title = document.createElement('h2')
      title.innerHTML = 'Ви ввели некоректні дані'
      document.body.appendChild(title)
    }

    while (a < b) {
      a++
      if (a < b) sum += a
      if (a % 2 != 0) {
        let resultNum = document.createElement('h3')
        resultNum.innerHTML = `<br> Непарне значення: ${a}`
        document.body.appendChild(resultNum)
      }
    }
    let Sum = document.createElement('h3')
    Sum.innerHTML = `Сумма: ${sum}`
    document.body.appendChild(Sum)
  }
  FourthTask()
