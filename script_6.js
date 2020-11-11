function replace(str){
  switch (str) {
    case "UCU": case "UCC": case "UCG": case "AGU": case "AGC":
      return "Sérine";

    case "CCU": case "CCC": case "CCA": case "CCG":
      return "Proline";

    case "UUA": case "UUG": 
      return "Leucine";

    case "UUU": case "UUC": 
      return "Phénylanine";

    case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
      return "Arginine";

    case "UAU": case "UAC":
      return "Tyrosine";
  
    default:
      return ""
  }
}

function transform(str){
  let strBis = ""
  for (let index = 0; index < str.length; index+=3) {
    strBis += replace(str.substr(index,3)) + "-"
  }
  return strBis.slice(0,-1)
}

let a = "CCGUCGUUGCGCUACAGC"
let b = "CCUCGCCGGUACUUCUCG"

aBis = transform(a);
bBis = transform(b);

console.log(a + " = " + aBis);
console.log(b + " = " + bBis);