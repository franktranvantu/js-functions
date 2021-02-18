// Finally, call the getYear function.
// Store the returned value of the function in a new variable named yearToday.
function getYear() {
  const year = new Date().getFullYear();
  return year;
}

const yearToday = getYear();