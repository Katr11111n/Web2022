  function SixTask() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        document.write('*\n')
      }
      let br = document.createElement('br')
      document.body.appendChild(br)
    }
    document.write('<hr>')

    for (let i = 0; i< 8; i++) {
      for (let j = 0; j < i + 1; j++) {
        document.write('*\n')
      }
      document.write('<br>')
    }
    document.write('<hr>')

    var line = 8 // Quantity of lines
    var space = 7 // Quantity of gaps in the first line
    var star = 1 // Quantity of stars in the first line

    for (let i = 0; i < line; i++) {
      for (let j = 0; j < space; j++) {
        document.write('&nbsp\n')
      }
      for (let k = 0; k < star; k++) {
        document.write('*')
      }
      space -= 1
      star += 2
      document.write('<br>')
    }
    document.write('<hr>')

    let size = 11
    let center = size / 2

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i <= center) {
          //верхняя половина
          if (j >= center - i && j <= center + i) document.write('*')
          else document.write('&nbsp')
        } else {
          //нижняя половина
          if (j >= center + i - size + 1 && j <= center - i + size - 1)
            document.write('*')
          else document.write('&nbsp')
        }
      }
      document.write('<br>')
    }
  }
  SixTask()
