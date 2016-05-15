/*

Write your implementation code in here.
*/

function hello(person) {
  if(person !== undefined) {
    return "Hello, " + person + "!";
  } else {
  return "Hello!";
  }
}

function echo(str) {
  return str;
}

function shout(words) {
  return words.toUpperCase();
}

function repeat(message, times) {
  if (!times) {
    times = 2;
  }
  var ret = message;
  for (var i = 1; i < times; i++) {
    ret = ret + " " + message;
  }
  return ret;
}

function start_of_word(text, n) {
  return text.slice(0, n);
}

function first_word(line) {
  var words = line.split(' ');
  return words[0];
}

function f2c(fTemp) {
  celsius = Number((fTemp - 32) * 5 / 9);
  return celsius;
}
f2c(fTemp);

function c2f(cTemp) {
  fahrenheit = Number((cTemp * 1.8) + 32);
  return fahrenheit;
}
c2f(cTemp);
