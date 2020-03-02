let list = document.getElementById("list");
let li = document.getElementById("list").children;
let id = document.getElementById("id");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let input = document.querySelectorAll(".data");
let button = document.querySelectorAll(".buttons");
let create = document.getElementById("create");
let read = document.getElementById("read");
let update = document.getElementById("update");
let del = document.getElementById("del");
let state = [];
let data = JSON.parse(localStorage.getItem("person_data"));
let person;
let isId = false;

id.addEventListener("change", validate);
function validate() {
  let regex = /\D/g;
  if (regex.test(this.value)) {
    id.value = "";
    alert("Please, enter only digits!!!");
  }
}

age.addEventListener("change", validate);

function render() {
  for (let i = 0; i < state.length; i++) {
    li[i].innerHTML = `<div>${state[i].id}</div><div>${state[i].firstname}</div><div>${state[i].lastname}</div><div>${state[i].age}</div>`;
  }
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}

let Person = function(id, firstname, lastname, age) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
};

function createPerson() {
  if (
    id.value == "" ||
    firstname.value == "" ||
    lastname.value == "" ||
    age.value == ""
  ) {
    alert("Some fields are empty!!!");
  } else {
    for (let i = 0; i < state.length; i++) {
      if (id.value == state[i].id) {
        isId = true;
      }
    }
    if (isId == true) {
      alert("This id is already exist!!!");
      isId = false;
    } else {
      person = new Person(id.value, firstname.value, lastname.value, age.value);
      person.id = id.value;
      person.firstname = firstname.value;
      person.lastname = lastname.value;
      person.age = age.value;
      state.push(person);
      isId = true;
    }
  }
  localStorage.setItem("person_data", JSON.stringify(state));
}

create.addEventListener("click", createEl);
function createEl() {
  createPerson();
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  if (isId == true) {
    let newLi = document.createElement("li");
    newLi.innerHTML += `<div>${person.id}</div><div>${person.firstname}</div><div>${person.lastname}</div><div>${person.age}</div>`;
    list.append(newLi);
  }
}

function updatePerson() {
  if (
    id.value == "" ||
    firstname.value == "" ||
    lastname.value == "" ||
    age.value == ""
  ) {
    alert("Some fields are empty!!!");
  } else {
    for (let i = 0; i < state.length; i++) {
      if (id.value == state[i].id) {
        state[i].firstname = firstname.value;
        state[i].lastname = lastname.value;
        state[i].age = age.value;
      }
    }
  }
  localStorage.setItem("person_data", JSON.stringify(state));
}

update.addEventListener("click", updateEl);
function updateEl() {
  updatePerson();
  render();
}

function deletePerson() {
  for (let i = 0; i < state.length; i++) {
    if (id.value == state[i].id) {
      state.splice(i, 1);
      isId = true;
    }
  }
  if (isId == false) {
    alert("This id is absent");
  }
  localStorage.setItem("person_data", JSON.stringify(state));
}

del.addEventListener("click", deleteEl);
function deleteEl() {
  deletePerson();
  render();
  li[state.length].remove();
}

read.addEventListener("click", readData);
function readData() {
  if (isId == false) {
    for (let i = 0; i < data.length; i++) {
      let newLi = document.createElement("li");
      newLi.innerHTML += `<div>${data[i].id}</div><div>${data[i].firstname}</div><div>${data[i].lastname}</div><div>${data[i].age}</div>`;
      list.append(newLi);
    }
  }
  state = data;
}
