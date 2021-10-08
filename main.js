// Задание 1

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
let ch = prompt('Задание 1. Введите символ, который нужно подсчитать): ');

function getRow(firstRow, secondRow) {
    let counter_first = 0;
    let counter_second = 0;

    for(let i = 0; i<firstRow.length; ++i) {
        //if((firstRow.charAt(i) == 'a') || (firstRow.charAt(i) == 'а')) {
        if(firstRow.charAt(i) == ch) {
            counter_first++;
        }
    }

    for(let i = 0; i<secondRow.length; ++i) {
        //if((secondRow.charAt(i) == 'a') || (secondRow.charAt(i) == 'а')) {
            if(secondRow.charAt(i) == ch) {
            counter_second++;
        }
    }

    if(counter_first > counter_second)
    return firstRow;
    if(counter_first < counter_second)
    return secondRow;
    else {
        console.log("Ошибка! Вы не ввели символ, количество которого нужно узнать! (или такого символа нет в строках)");
        alert("Ошибка! Вы не ввели символ, количество которого нужно узнать! (или такого символа нет в строках)");
    }
}
console.log(getRow(firstRow, secondRow)); // мама мыла раму
alert(getRow(firstRow, secondRow));



// Задание 2
phone = prompt("Задание 2. Введите номер телефона, который нужно обработать (например, +71234567890): ")
function formattedPhone(phone) {
    if((phone.length > 12) || (phone.length < 11)) {
        alert("Неверный формат!");
    }

    let temp = phone.split('');
    if(phone.length == 11){
        temp.splice(1,"", " ("); // и скобка и пробел для экономии строк
        temp.splice(5,"", ") "); // и скобка и пробел для экономии строк
        temp.splice(9,"", "-");
        temp.splice(12,"", "-");
    } 
    else if(phone.length == 12) {
        temp.splice(2,"", " ("); // и скобка и пробел для экономии строк
        temp.splice(6,"", ") "); // и скобка и пробел для экономии строк
        temp.splice(10,"", "-");
        temp.splice(13,"", "-");
    }
    return temp.join(''); 
}
console.log(formattedPhone(phone)); // +7 (123) 456-78-90
alert(formattedPhone(phone));