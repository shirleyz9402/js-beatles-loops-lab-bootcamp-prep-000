
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,instruments){
var array = []
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array
}

function johnLennonFacts(facts) {
var shoutFacts = []
let i = 0
 while (i<facts.length)  {
    shoutFacts.push(`${facts[i]}!!!`);
  i++
 }
  return shoutFacts;
}
function iLoveTheBeatles(x) {
  var array = [];
  x = 0
  do {
   array.push("I love the Beatles!")
   x++
  }
  while (x < 15)
  return array;
}