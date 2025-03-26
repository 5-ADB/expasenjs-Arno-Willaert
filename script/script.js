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
  if(naam == none || email== none || password == none){
    console.log("er mist een element");
  }
  users.push(nieuweGebruiker)
  console.log(users);
  
})



//htlm elementen filter
const filter = document.querySelector("#filter")
document.querySelector("#filterBtn").addEventListener("click",()=>{
  if (filter.value< 4){
    alert("minimum 4 letters aub")
  }
})
