const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

console.log("stampa con ciclo foreach");
people.forEach(person => {
  console.log(person.name);
})



const peopleNames = people.map(person => person.name)
console.log("bonus extra stampa con assegnazione map");
console.log(peopleNames);


