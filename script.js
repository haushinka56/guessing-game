var secretNumber = parseInt(Math.random() * 1001);

while (guess != secretNumber) {
  var guess = prompt("Adivinhe um número entre 1 e 1000");

  if (guess == secretNumber) {
    alert("Acertou!");
  } else if (guess > secretNumber) {
    alert("Errou :c \n O número secreto é menor que " + guess + ".");
  } else if (guess < secretNumber) {
    alert("Errou :c \n O número secreto é maior que " + guess + ".");
  }
}
