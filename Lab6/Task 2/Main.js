    function calc (num1, num2, symbol){
        switch (symbol) {
    case '+':
        let res1 = num1 + num2
       alert(`Ви ввели ${num1} та ${num2} Результат додавання : ${res1}`);
        break;
    case '-':
    let res2 = num1 - num2
    alert(`Ви ввели ${num1} та ${num2} Результат віднімання : ${res2}`);

        break;
    case '/':
    let res3 = num1 / num2
    alert(`Ви ввели ${num1} та ${num2} Результат ділення : ${res3}`);

        break;
    case '*':
    let res4 = num1 * num2
    alert(`Ви ввели ${num1} та ${num2} Результат множення : ${res4}`);

        break;

    default:
        console.log('Введіть коректні значення!');
}
    }
    calc(30000,3,'/')

