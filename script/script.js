/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];



// hieronder komt jullie code - veel succes


//html elementen registratie
const naam = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


// nieuwe registratie
document.querySelector("#registreer").addEventListener("click", () =>{
  const nieuweGebruiker = {
    fullname: naam.value,
    email: email.value,
    password: password.value,
  }
  users.push(nieuweGebruiker)
  console.log(users);
  
})


document.querySelector("#filterbtn").addEventListener("click",() =>{
  element.innerHTML = ''
  lijst.forEach(nieuweGebruiker => {
    const nieuweNaam = document.createElement("div")
    nieuweNaam.innerHTML = `${nieuweGebruiker.fullname} - [${nieuweGebruiker.email}]`
    element.appendchild(nieuweNaam)
  });
})
