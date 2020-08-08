//CREATE FORM
function create_form(){
    //Create Form
    let form = document.createElement("form");
    form.setAttribute("id", "myForm");

    //USERNAME
    let UN = document.createElement("input");
    UN.setAttribute("type", "text");
    UN.setAttribute("id", "username");
    UN.setAttribute("placeholder", "Enter Username");

    //PASSWORD
    let PA = document.createElement("input");
    PA.setAttribute("type", "text");
    PA.setAttribute("id", "password");
    PA.setAttribute("placeholder", "Enter password");

 // create a submit button 
    var SUB = document.createElement("input"); 
    SUB.setAttribute("type", "submit"); 
    SUB.setAttribute("value", "Submit");
    SUB.setAttribute("id", "Submit"); 

    //add inputs to form
    form.appendChild(UN);
    form.appendChild(PA);
    form.appendChild(SUB);

    //form is new, old is 
    //replacment element object
    //let item  = document.getElementById("add_form")
    document.getElementsByTagName("body")[0].appendChild(form)
}


create_form();

var userInput = document.createElement("input").app;
var passInput;

    var handle_form = function() {
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    s = `USERNAME: ${user}  PASSWORD: ${pass}`;

    alert(s);
    console.log(s);
    next_level()

    return [user, pass];
  }

  document.getElementById("myForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    var returnValue = handle_form();
    console.log(returnValue);
  });

/***************************************
 * 
 * Environment
 * 
 * 
 */

// Get Current Level
let current_level

const regex = /\d+/gm;
const str =  new URL( window.location.href);
let m;

while ((m = regex.exec(str)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
      regex.lastIndex++;
  }
  
  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
      console.log(`Found level, group ${groupIndex}: ${match}`);
      current_level=parseInt(match)
  });
}
//set password and username
let level_password 
let level_username  

fetch("pass.json")
  .then( response => response.json())
  .then(json => {console.log(json);
  level_password = json[current_level]["Password"];
  level_username = json[current_level]["Username"]}
  )


//INSTRUCTIONS

//Set Up Level Text
let instructions1 = `You will bring up your browsers developer tools to access the javascript console.`

let instructions2 = `Whenever you find a password for a level, you will enter it and the username ( bandit${current_level} ) into the web form to get to log into the next level and continue the game.`

//create webpage

// instruct_div = document.createElement("div")
// instruct_div.setAttribute("id","instructions")

inst_par1 = document.createElement("p")
inst_par1.textContent = instructions1

inst_par2 =  document.createElement("p")
inst_par2.textContent = instructions2

// instruct_div.appendChild(inst_par1)
// instruct_div.appendChild(inst_par2)
//document.getElementsByTagName("body")[0].appendChild(instruct_div)
document.getElementById("instructions").appendChild(inst_par1)
document.getElementById("instructions").appendChild(inst_par2)

//LEVEL CONTENTS
let level_contents 
fetch("level_contents.json")
  .then( response => response.json())
  .then(json => {console.log(json);
      level_contents = json[current_level]["level_text"];
      }
  )
  .then(contents => {
let content_par = document.createElement("p")
console.log(level_contents)
content_par.textContent =  level_contents
document.getElementById("contents").appendChild(content_par)
  })

//CHECK password
function creds(user, pass) {
  console.log("checking user and pass function loaded")
  if (user === level_username && pass === level_password){
         return true;
      }
}
//goto next level if password true
function next_level(check_password=creds(user, pass)){
  if (check_password===true){
  window.location.assign(`https://normandantzig1.github.io/webconsolepuzzle/demo-1.html?level=${parseInt(current_level)+1}`) 
  }
}


//LEVEL TITLE MOVE
document.getElementById("level_title").innerHTML = `Level ${current_level}`

//apply level 
//function from level_setup.js
apply_level_setup()
