num_etages = prompt('"Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?"')

for(let index = num_etages-1; index >=0; index--){
  console.log(" ".repeat(index)+"*".repeat(num_etages-index));
}