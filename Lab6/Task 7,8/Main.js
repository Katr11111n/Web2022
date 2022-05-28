//game
let questions = {
  0: 'Ти вже розумієш та вдосконалюєш свої знання з програмування? ',
  1: 'Ти творча людина, якій подобається створювати прекрасне?',
  2: 'Ти любиш вчити іноземні мови?',
  3: 'Ого, буду тоді до вас на ви! Ви маєте діточок і внучок?',
  4: 'Ти любиш дивитися Марвел чи ДС?',
  5: 'Ти вмієш дивувати інших своїми ідеями та знаннями?',
  6: 'Ого, тінейджер, ти любиш вчитися?',
  7: 'Тоді ти любиш дивитися тік-ток і серіальчики ?',
  8: 'Ти живеш тільки однією реальністю та по принципу зараз або ніколи? ',
  9: 'Обери твій улюблений предмет (цифрою): \n 1) Математика\n 2) Іноземні мови\n 3) Інформатика \n 4) Образотворче мистецтво \n 5) Музика',
  10: 'А працювати заради підтримання економіки України треба ж???',
}
let result = {
  0: 'Ого, ми знайшли розробника та ще й дуже розумного!',
  1: 'Ви що кібер-людина? Відпочиньте від стількох справ...',
  2: 'Ти мрійна та вигадлива людина, яка зможе втілити все, що вона тільки забажає!',
  3: 'Ти людина, яка втратила бажання працювати, візьми себе в ручки!',
  4: 'Борітеся - поборете! П.С. хвате дивитися тік-ток....',
  5: 'В тебе все попереду!',
  6: 'Вам треба відпочинок для майбутніх звершень!',
}
let userName = prompt("Введіть своє ім'я", '')

userName = userName || (userName = 'Ноунейм')
let info1 = `
  Вітаємо вас у нашій вікторині, ${userName}!
  Дуже раді, що ви вирішили провести час з нами!
  Ви дізнаєтеся про себе багато нового!
  Правила дуже прості! Відповідай так чи ні на поставленні запитання!
  `
console.log(info1)
let userAge = prompt('Введіть свій вік', '')

console.log('Твій вік ', userAge, ' років')
if (userAge > 7 && userAge <= 30) {
  console.log(questions[6])
  let res1 = prompt(questions[6])
  console.log(`Ти обрав `, res1)
  switch (res1) {
    case 'так': {
      let res3 = prompt(questions[9])
      console.log(questions[9])
      console.log(`Ти обрав`, res3)
      let q1 = res3 == 1 || res3 == 3
      if (q1) {
        let res4 = prompt(questions[0])
        console.log(questions[0])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[0])
        }
        if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      let q2 = res3 == 4 || res3 == 5
      if (q2) {
        let res4 = prompt(questions[1])
        console.log(questions[1])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          let res5 = prompt(questions[5])
          console.log(questions[5])
          console.log(`Ти обрав`, res5)
          if (res5 == 'так') {
            console.log(result[2])
          } else if (res == 'ні') {
            console.log(result[5])
          }
        }
        if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      if (res3 == 2) {
        let res4 = prompt(questions[2])
        console.log(questions[2])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[1])
        } else if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      break
    }
    case 'ні': {
      let res3 = prompt(questions[7])
      console.log(questions[7])
      console.log(`Ти обрав`, res3)

      if (res3 == 'так') {
        let res4 = prompt(questions[10])
        console.log(questions[10])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[3])
        }
        if (res4 == 'ні') {
          console.log(result[6])
        }
      } else if (res3 == 'ні') {
        console.log(result[6])
      }
      break
    }
  }
}

if (userAge > 31 && userAge < 70) {
  let res5 = prompt(questions[3])
  console.log(questions[3])
  console.log(`Ти обрав`, res5)
  if (res5 == 'так') {
    let res6 = prompt(questions[5])
    console.log(questions[5])
    console.log(`Ти обрав`, res6)

    if (res6 == 'так') {
      console.log(result[2])
    }
    if (res6 == 'ні') {
      console.log(result[6])
    }
  } else if (res5 == 'ні') {
    let res6 = prompt(questions[8])
    console.log(questions[8])
    console.log(`Ти обрав`, res6)
    if (res6 == 'так') {
      console.log(result[1])
    } else if (res6 == 'ні') {
      console.log(result[2])
    }
  }
} else {
  console.log('Введіть коректну відповідь, щоб ми вас зрозуміли ...')
}

