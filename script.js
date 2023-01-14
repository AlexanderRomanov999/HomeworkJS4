/*1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(i + " - это ноль");
    }
    else {
        i % 2 === 0 ? console.log(i + " - четное число") : console.log(i + " - нечетное число");
    }
}

/*2
Дан массив [1, 2, 3, 4, 5, 6, 7]

Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

/*3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

function Generate (arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}
function Summa (arr, num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    return sum;
}
function Minimal (arr, num) {
    let min = arr[0];
    for (let i = 0; i < num; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
    }
    return min;
}
function IsThereThree (arr, num) {
    let bool = false;
    for (let i = 0; i < num; i++) {
        if (arr[i] === 3) {
            bool = true;
        }
    }
    bool === false ? console.log("Нет числа 3") : console.log("Есть число 3");
}
const array2 = [];
console.log(Generate(array2, 5));
console.log(Summa(array2, 5));
console.log(Minimal(array2, 5));
console.log(IsThereThree(array2, 5));

/*Необязательное задание.
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

function RepeatString(string, times) {
    let repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
for (let i = 1; i <= 20; i++) {
    console.log(RepeatString('x', i));
}