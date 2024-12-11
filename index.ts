console.log('HELLO TYPESCRIPT :)')
// 1)  Tipi primitivi principali in TypeScript
// string, number, boolean, undefined, null, any,

// 2) Tre variabili tipizzate
const myName: string = 'Michele'
const myAge: number = 19

console.log(myName.toUpperCase())

// 3) Tipizzo il parametro

const greet = (name: string): string => {
  return 'Ciao ' + name
}
console.log(greet('Ciccio'))

// 4) Specifico il tipo di ritorno della funzione

const sum = (a: number, b: number): number => {
  return a + b
}
console.log(sum(5, 3))

// 5) Funzione per calcolare il prezzo con IVA
const price = (price: number): number => {
  const iva = 0.22
  return price + price * iva
}
console.log(price(100))

// 6. Funzione che concatena due stringhe e restituisce la lunghezza totale
const stringhe = (str1: string, str2: string): number => {
  return (str1 + str2).length
}
console.log(stringhe('mike', 'mike'))

// 7. Cos'è un Type Union e come si scrive?
// Un Type Union permette di specificare più tipi possibili per una variabile o parametro.
// Si scrive con il simbolo "|", ad esempio: string | number

// 8. Variabile che può contenere un numero, null o undefined
let flexibleVariable: number | null | undefined = 42
flexibleVariable = null
flexibleVariable = undefined

// 9. Tipo per rappresentare i giorni della settimana
type WeekDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'
const today: WeekDay = 'Monday'

// 10. Tipizza l'array di numeri nei due modi possibili
const numbers: number[] = [1, 2, 3]
const numbersAlt: Array<number> = [1, 2, 3]

// 11. Crea una tupla con 5 elementi
const tuple: [string, string, string, number, number] = [
  'one',
  'two',
  'three',
  4,
  5,
]

// 12. Differenza tra type e interface
// "type" è più flessibile e permette di definire tipi unione o tipi complessi.
// "interface" è specifica per oggetti e supporta l'ereditarietà multipla.

// 13. Interfaccia per un oggetto con firstname, lastname e age
interface Person {
  firstname: string
  lastname: string
  age: number
}

// 14. Interfaccia per un utente con email obbligatoria e telefono opzionale
interface User {
  email: string
  phone?: string
}

// 15. Array di oggetti "Studente"
interface Student {
  name: string
  grade: number
}
const students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
]

// 16. Interfaccia base "Veicolo" ed estensione per "Auto"
interface Veicolo {
  brand: string
  model: string
  year: number
}
interface Car extends Veicolo {
  doors: number
}

// 17. Oggetto che implementa l'interfaccia Auto
const myCar: Car = {
  brand: 'bmw',
  model: '320d',
  year: 2020,
  doors: 5,
}

// 18. Cosa sono i Generics in TypeScript?
// I Generics permettono di definire tipi flessibili e riutilizzabili, passati come parametri a funzioni o interfacce.

// 19. È possibile avere più tipi generici in un'interfaccia?
// Sì, è possibile, separandoli con una virgola.
interface Pair<T, U> {
  first: T
  second: U
}

// 20. Interfaccia generica per una risposta API
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
const apiResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'John' },
  status: 200,
  message: 'Success',
}
