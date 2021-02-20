function sayGreeting(greeting = 'Good morning', name = 'student') {
  return `${greeting}, ${name}!`;
}

sayGreeting();
sayGreeting('Hi there', 'Frank');
sayGreeting('Hi there');
sayGreeting(undefined, 'Frank');