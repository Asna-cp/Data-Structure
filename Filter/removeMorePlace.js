let places = ["Kollam", "Calicut", "Malappuram", "kochi"];
let placeToRemove = ["Kollam","Calicut","kochi"];
let result = places.filter((place) => {
    return !placeToRemove.includes(place)
})
console.log(result);