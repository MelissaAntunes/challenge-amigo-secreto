//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendsList = [];

function addFriend() {
  let name = document.querySelector("input").value;

  if (name === "") {
    alert("Digite um nome válido");
  } else {
    friendsList.push(name);
    console.log(friendsList);
    updateFriendsList();
  }
  clearField();
}

function updateFriendsList() {
  let list = document.querySelector("ul");

  list.innerHTML = "";

  for (let friend of friendsList) {
    let listItem = document.createElement("li");
    listItem.textContent = friend;
    list.appendChild(listItem);
  }
}

function clearField() {
  document.querySelector("input").value = "";
}

function clearList() {
  list = document.querySelector("ul");
  list.innerHTML = "";
}

function drawFriend() {
  if (friendsList.length == 0) {
    alert("Adicione amigos antes de sortear");
  } else {
    let randomIndex = Math.floor(Math.random() * friendsList.length);
    let friend = friendsList[randomIndex];
    let result = document.querySelector("h3");

    result.textContent = `O Amigo secreto sorteado é: ${friend}`;
    clearList();
  }
}
