  //2
  function SecondTask() {
    let first = prompt('Введіть цілочисельне значення №1', '')
    let second = prompt('Введіть цілочисельне значення №2', '')
    let third = prompt('Введіть цілочисельне значення №3', '')
    console.log('Ви ввели дані числа: ', first, ' ', second, ' ', third)
    let result = Number(
      (parseInt(first) + parseInt(second) + parseInt(third)) / 3,
    )
    console.log('Середнє арифметичне: ', Math.round(result).toFixed(2))
  }
  SecondTask()

