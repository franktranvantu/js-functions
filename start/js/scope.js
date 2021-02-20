let person = 'Lee';

function greeting() {
  const person = 'Meg'; // What happen if const is absence
  alert(`Hi, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting();