       let doc = {
        title: '',
        body: '',
        footer: '',
        date: new Date().toString(),
        addition: {
          topic: '',
          body: '',
          footer: '',
          date: new Date().toString(),
        },
      }

      function title(value) {
        doc.title = value
        let title = document.createElement('h3')
        title.innerHTML = `Заголовок документа: ${doc.title}`
        document.body.appendChild(title)
      }
      // fiveTask()
      function body(value) {
        doc.body = value
        let body = document.createElement('h3')
        body
        body.innerHTML = `Тіло документа : ${doc.body}`
        document.body.appendChild(body)
      }
      function footer(value) {
        doc.footer = value
        let footer = document.createElement('h3')
        footer.innerHTML = `Футер документа : ${doc.footer}`
        document.body.appendChild(footer)
      }

      function date(value = new Date().toString()) {
        doc.date = value
        let date = document.createElement('h3')
        date.innerHTML = `Дата документа : ${doc.date}`
        document.body.appendChild(date)
      }
      function addition(topic, body, footer, date) {
        doc.addition.topic = topic
        doc.addition.body = body
        doc.addition.footer = footer
        doc.addition.date = date
        let addition = document.createElement('div')
        addition.style.background = '#FFA07A'
        addition.style.color = 'white'
        addition.style.width = '300px'
        addition.innerHTML = `Додаток заголовок : ${doc.addition.topic}
        <br>
        Додаток тіла : ${doc.addition.body}
        <br>
        Додаток футера : ${doc.addition.footer}
        <br>
        Додаток дати : ${doc.addition.date}

        `
        document.body.appendChild(addition)
      }

      function main() {
        title('My header!')
        body('My body in project!')
        date()
        addition(
          'Title in addition',
          'Main part in addition',
          'Footer in addition',
          new Date().toString(),
        )
        footer('My footer in project!')
      }
      main()
