function bot(str) {
  switch (true) {
    case str.endsWith("?"):
      return "Ouais Ouais...";

    case str === "":
      return "t'es en PLS ?";

    case str === str.toUpperCase():
      return "Pwa, calme-toi...";

    case str.includes("Fortnite"):
      return "on s' fait une partie soum-soum ?";
 
    default:
      return "balek.";
  }
}

// console.log(bot("salut"));
// console.log(bot("salut ?"));
// console.log(bot("osjefiojiAZDSa"));
// console.log(bot("AGFLDODOJIDJ"));
// console.log(bot(""));
// console.log(bot("DELFPLFortnite"));
// console.log(bot("DELFPLFortnite?"));
