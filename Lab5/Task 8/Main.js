  function EightTask(){
  function arrayTable(rows, cols) {
    // создаём строки
    var newArray = new Array(rows)

    for (var i = 0; i < rows; i++) {
      // создаём столбцы
      newArray[i] = new Array(cols)
      //инициализируем ячейки значением
      for (var j = 0; j < cols; j++) {
        let a = Math.floor(Math.random() * (100 - 20 + 1) - 20)
        newArray[i][j] = a
      }
    }
    return newArray
  }
    const array = arrayTable(5, 5)
    console.log(array)
    let arr = document.createElement('h3')
  arr.innerHTML = `Даний масив:`
  document.body.appendChild(arr)
    let newCopy = []
    newCopy = Array.from(array)
    for (let i = 0; i < 5; i++) {
      let arr = document.createElement('h3')
      arr.innerHTML = `[${array[i]}]`
      document.body.appendChild(arr)
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        if (newCopy[i][j] < 0) 
          newCopy[i][j] = 0
        else newCopy[i][j] = 1
      }
    }
    }
    let text = document.createElement('h3')
    text.innerHTML = `На головній діагоналі всі числа зі знаком\n (-) замінити на 0, інші на 1`
    document.body.appendChild(text)
    for (let i = 0; i < 5; i++) {
      let arr = document.createElement('h3')
      arr.innerHTML = `[${newCopy[i]}]`
      document.body.appendChild(arr)
    }
    	console.log(newCopy)
}
EightTask()
