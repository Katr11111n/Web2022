  function SevenTask() {
    let N = 12
    let array = []
    let odd = []
    let sum = 0

    for (i = 0; i < N; i++) {
      let a = Math.round(Math.random() * 100)
      array.push(a)
    }

    let min = array[0]
    let max = min
    for (i = 0; i < N; i++) {
      if (array[i] > max) max = array[i]
      if (array[i] < min) min = array[i]

      if (array[i] % 2 != 0) odd.push(array[i])
      sum += array[i]
    }
    const resultOdd = array.filter((el) => el % 2 != 0)
    console.log(resultOdd)
    let averenge = sum / N
    console.log(sum)
    console.log(odd)

    let arr = document.createElement('h3')
    arr.innerHTML = `Даний масив: [${array}]`
    document.body.appendChild(arr)
    let max1 = document.createElement('h4')
    max1.innerHTML = `Максимальне значення за першим варіантом: ${max}`
    document.body.appendChild(max1)

    let max2 = document.createElement('h4')
    max2.innerHTML = `Максимальне значення за другим варіантом: ${Math.max(
      ...array,
    )}`
    document.body.appendChild(max2)

    let min1 = document.createElement('h4')
    min1.innerHTML = `Мінімальне значення за першим варіантом: ${min}`
    document.body.appendChild(min1)

    let min2 = document.createElement('h4')
    min2.innerHTML = `Мінімальне значення за другим варіантом: ${Math.min(
      ...array,
    )}`
    document.body.appendChild(min2)

    let aver = document.createElement('h4')
    aver.innerHTML = `Середнє арифметичне значення: ${Math.round(averenge).toFixed(2)}`
    aver.className = 'bg'
    document.body.appendChild(aver)

    let odd1 = document.createElement('h4')
    odd1.innerHTML = `Непарні значення першим способом: [${odd}]`
    odd1.className = 'bg'
    document.body.appendChild(odd1)

    let odd2 = document.createElement('h4')
    odd2.innerHTML = `Непарні значення другим способом: [${resultOdd}]`
    odd2.className = 'bg'
    document.body.appendChild(odd2)

    let summa = document.createElement('h4')
    summa.innerHTML = `Загальна сума елементів: ${sum}`
    summa.className = 'bg2'
    document.body.appendChild(summa)
  }
SevenTask()
