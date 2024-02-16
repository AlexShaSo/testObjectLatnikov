//task 1
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach(name => {
    console.log(`Привет, ${name}`);
});




//task 2
const numbers = [1, 2, 3, 4, 5];

const multiNumbers = numbers.map(number => number * 10);

console.log(multiNumbers);





//task 3
const someNumbers = [5, 12, 8, 130, 44];

const filtredNumbers = someNumbers.filter(someNumbers => someNumbers > 10);

console.log(filtredNumbers);



//task 4
const whoAreYouGuys = [
    {name: 'Иван', age: 23},
    {name: 'Мария', age: 18},
    {name: 'Алексей', age: 32},
    {name: 'Ольга', age: 24},
    {name: 'Сергей', age: 17},
    {name: 'Анна', age: 21}
];


const youShallNotPass = whoAreYouGuys.filter(human => human.age >= 18);
const toOld = youShallNotPass.map(human => `${human.name} (${human.age} лет)`);

console.log(toOld);



//task 5
const staff = [
    {product: 'Телефон', price: 50000, quantity: 1},
    {product: 'Чехол', price: 1500, quantity: 2},
    {product: 'Зарядное устройство', price: 2500, quantity: 1}
];

const allPrice = staff.reduce((total, sale) => total + (sale.price * sale.quantity), 0);
const minusMoney = (`Общая стоимость продаж: ${allPrice}`);

console.log(minusMoney);