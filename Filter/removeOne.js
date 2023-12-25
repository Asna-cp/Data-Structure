//How to remove 1 item from array
let places = ["Kollam", "Calicut", "Malappuram", "kochi"];
let removeOnePlace = "Calicut";
let result = places.filter((place) => {
  //return all places which is not equal to Calicut
  return place != removeOnePlace;
});
console.log(result);
