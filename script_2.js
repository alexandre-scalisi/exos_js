//2.2.1

function fact(n) {
  if (n <= 1)
    return 1;
  return n * fact(n-1);
}

num = prompt('"De quel nombre veux-tu calculer la factorielle ?"');
console.log(`"Le resultat est de ${fact(num)}"`);