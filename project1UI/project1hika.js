const url = "http://localhost:8080"; 

document.getElementById("registerUserButton").onclick = registerUser; 
document.getElementById("logInButton").onclick = logIn;
document.getElementById("createTicketButton").onclick = createTicket; 
document.getElementById("getAllTicketsButton").onclick = getAllTickets; 
// document.getElementById("getTicketButton").onclick = getTicket; 
let username; 
let password;
async function registerUser(){

    let userNameInput = document.getElementById("userName").value; 
    let passwordInput = document.getElementById("password").value;
    let isAdminInput = document.getElementById("isAdmin").value;
    
    let newUser = {
        id: 0, 
        userName: userNameInput,
        password: passwordInput,
        isAdmin: isAdminInput 
    } 

    let response = await fetch(url + "/createuser",{
        method: "POST", 
        body: JSON.stringify(newUser) 
    });

    console.log(response)

    if(response.status === 201){
        alert("User Created: " + userNameInput + " " + passwordInput)
    }

} 

async function logIn(){

    let userNameInput = document.getElementById("userName").value; 
    let passwordInput = document.getElementById("password").value;
    
    let newLogIn = {
        userName: userNameInput,
        password: passwordInput, 
    } 

    let response = await fetch(url + "/login/{userName}/{password}",{
        method: "POST", 
        body: JSON.stringify(newLogIn) 
    });

    console.log(response)

    if(response.status === 201){
        username = userNameInput;
        password = passwordInput;
        alert(userNameInput + " Log in Successful" )
    }

} 
async function createTicket(){

    let amountInput = document.getElementById("amount").value; 
    let descriptionInput = document.getElementById("description").value;
    let statusInput = document.getElementById("status").value;
    let userIdInput = document.getElementById("userId").value;
    
    let newTicket = {
        id: 0, 
        amount: amountInput,
        description: descriptionInput,
        status:statusInput,
        userId: userIdInput 
    } 

    let response = await fetch(url + "/createticket",{
        method: "POST", 
        body: JSON.stringify(newTicket) 
    });

    console.log(response)

    if(response.status === 201){
        alert("New ticket submitted")
    }

} 


async function getAllTickets(){

    let userNameInput = document.getElementById("userName").value; 
    let passwordInput = document.getElementById("password").value;
let data = [];
console.log(userNameInput + passwordInput);
let response = await fetch(url + "/allpendingtickets/Adam Smith/abcdef")
                        .then(response => response.json())
                        .then(_data=> data=_data)
                        .catch(error => console.error(error));
                        
// console.log(response) 
       
// let data = await response.json();

// console.log(data) 

if(200 === 200){

for(let ticket of data){
    
            let row = document.createElement("tr");

            let cell1 = document.createElement("td");
            cell1.innerHTML = ticket.id;
            row.appendChild(cell1)

            let cell2 = document.createElement("td");
            cell2.innerHTML = ticket.amount;
            row.appendChild(cell2)

            let cell3 = document.createElement("td");
            cell3.innerHTML = ticket.description;
            row.appendChild(cell3)

            let cell4 = document.createElement("td");
            cell4.innerHTML = ticket.status;
            row.appendChild(cell4)

            let cell5 = document.createElement("td");
            cell4.innerHTML = ticket.userId;
            row.appendChild(cell4)

            document.getElementById("allTicketsBody").appendChild(row);
        }

    } 

}