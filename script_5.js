let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let emprunte1Fois = true;
for (let index = 0; index < books.length; index++) {
  if (books[index].rented === 0) {
    emprunte1Fois = false;
    break;
  }
}
if (emprunte1Fois) {
  console.log("Tous les livres ont été empruntés au moins une fois");
} else {
  console.log("Pas tous les livres ont été emprunté au moins une fois");
}

//array avec juste le nombre d'emprunts
let rentedArray = (books.map(b => b.rented))

// Quel est livre le plus emprunté ?
console.log("\nQuel est livre le plus emprunté ?");
maxRented = Math.max.apply(null,rentedArray)
maxRentedTitle = books.filter(b => b.rented === maxRented)[0].title
console.log("Le livre le plus emprunté est " + maxRentedTitle);

// Quel est livre le moins emprunté ?
console.log("\nQuel est livre le moins emprunté ?");
minRented = Math.min.apply(null,rentedArray)
minRentedTitle = books.filter(b => b.rented === minRented)[0].title
console.log("Le livre le moins emprunté est " + minRentedTitle);


// Trouve le livre avec l'ID: 873495 ;

id873495 = books.filter(b => b.id === 873495)[0]
console.log(`\nLe livre avec l'id 873495 est ${id873495.title}`);

// Supprime le livre avec l'ID: 133712 ;

books = books.filter(b => b.id !== 133712)
console.log(books);


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

books = books.sort((a,b) => a.title.localeCompare(b.title) )
console.log(books);

