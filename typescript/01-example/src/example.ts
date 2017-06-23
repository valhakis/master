interface Person {
   firstname: string;
   lastname: string
}

function Greet(person: Person) {
   console.log('Hello, ', person.firstname + ' ' + person.lastname);
}

var user = {
   firstname: 'William'
