interface Person {
  name: string;
}

function welcome_person(person: Person)  {
  console.log(`Welcome to hell ${person.name}.`);
}

let user = { name: 'Thomas Valhakis' };

welcome_person(user);
