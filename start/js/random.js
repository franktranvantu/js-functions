function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

const randomNumber = getRandomNumber();
console.log(randomNumber);
alert(randomNumber);
