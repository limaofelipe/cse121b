/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Felipe Lima",
  photo: "https://avatars.githubusercontent.com/u/63979005?v=4",
  favoriteFoods: [
    "Pizza",
    "Hamburger",
    "Barbecue",
    "Lasanha"
  ],
  hobbies: [
    "Play Videogames",
    "Workout",
    "Walk on the Beach"
  ],
  placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
      place: "Fortaleza",
      length: "20 Years"
    },
    {
      place: "Fortaleza",
      length: "20 Years"
    }
  )
  
  /* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
/* Name */

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').setAttribute("alt", "Profile picture")

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
  let ul = document.createElement('ul');
  ul.textContent = hobbie;
  document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
let teste = myProfile.placesLived.forEach(placeObj => {
  const dtElement = document.createElement("dt");
  dtElement.textContent = placeObj.place;

  const ddElement = document.createElement("dd");
  ddElement.textContent = `Length: ${placeObj.length}`;

  // Append <dt> and <dd> elements to the <dl> element
  document.getElementById("places-lived").appendChild(dtElement);
  document.getElementById("places-lived").appendChild(ddElement);
});console.log(teste)