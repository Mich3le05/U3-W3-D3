console.log('HELLO TYPESCRIPT :)');
// 1)  Tipi primitivi principali in TypeScript
// string, number, boolean, undefined, null, any,
// 2) Tre variabili tipizzate
var myName = 'Michele';
var myAge = 19;
console.log(myName.toUpperCase());
// 3) Tipizzo il parametro
var greet = function (name) {
    return 'Ciao ' + name;
};
console.log(greet('Ciccio'));
// 4) Specifico il tipo di ritorno della funzione
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 3));
// 5) Funzione per calcolare il prezzo con IVA
var price = function (price) {
    var iva = 0.22;
    return price + price * iva;
};
console.log(price(100));
// 6. Funzione che concatena due stringhe e restituisce la lunghezza totale
var stringhe = function (str1, str2) {
    return (str1 + str2).length;
};
console.log(stringhe('mike', 'mike'));
// 7. Cos'è un Type Union e come si scrive?
// Un Type Union permette di specificare più tipi possibili per una variabile o parametro.
// Si scrive con il simbolo "|", ad esempio: string | number
// 8. Variabile che può contenere un numero, null o undefined
var flexibleVariable = 42;
flexibleVariable = null;
flexibleVariable = undefined;
var today = 'Monday';
// 10. Tipizza l'array di numeri nei due modi possibili
var numbers = [1, 2, 3];
var numbersAlt = [1, 2, 3];
// 11. Crea una tupla con 5 elementi
var tuple = [
    'one',
    'two',
    'three',
    4,
    5,
];
var students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 85 },
];
// 17. Oggetto che implementa l'interfaccia Auto
var myCar = {
    brand: 'bmw',
    model: '320d',
    year: 2020,
    doors: 5,
};
var apiResponse = {
    data: { id: 1, name: 'John' },
    status: 200,
    message: 'Success',
};
