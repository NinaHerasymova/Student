let list = document.getElementById('list');
let li = document.getElementById('list').children;
let id = document.getElementById('id');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let input = document.querySelectorAll('.data');
let button = document.querySelectorAll('.buttons');
let create = document.getElementById('create');
let read = document.getElementById('read');
let update = document.getElementById('update');
let del = document.getElementById('del');
let state = [];
//let state = localStorage.getItem('person_data') ? JSON.parse(localStorage.getItem('person_data')) : []
let data = JSON.parse(localStorage.getItem('person_data'));

let Person = function (id, firstname, lastname, age) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

id.addEventListener('change', validate);
function validate() {
    let regex = /\D/g;
    if (regex.test(this.value)) {
        id.value = '';
        alert('Please, enter only digits!!!')
    }
}

age.addEventListener('change', validate);


create.addEventListener('click', createPerson);
function createPerson() {
    for (i = 0; i < state.length; i++) {
        if (id.value == state[i].id) {
            alert('This id already exist!');
            for (i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
    }
    if (id.value == '' || firstname.value == '' || lastname.value == '' || age.value == '') {
        alert('Some fields are empty!!!');
    } else {        
        let person = new Person(id.value, firstname.value, lastname.value, age.value);
        person.id = id.value;
        person.firstname = firstname.value;
        person.lastname = lastname.value;
        person.age = age.value;
        state.push(person);
        for (i = 0; i < input.length; i++) {
            input[i].value = "";
        }
        localStorage.setItem('person_data', JSON.stringify(state));

        let newLi = document.createElement('li');
        newLi.innerHTML += `<div>${person.id}</div><div>${person.firstname}</div><div>${person.lastname}</div><div>${person.age}</div>`;
        list.append(newLi);
    }
}

update.addEventListener('click', updatePerson);
function updatePerson() {
    if (id.value == '' || firstname.value == '' || lastname.value == '' || age.value == '') {
        alert('Some fields are empty!!!');
    } else {
        for (i = 0; i < state.length; i++) {
            if (id.value == state[i].id) {
                state[i].firstname = firstname.value;
                state[i].lastname = lastname.value;
                state[i].age = age.value;
                li[i].innerHTML = `<div>${state[i].id}</div><div>${state[i].firstname}</div><div>${state[i].lastname}</div><div>${state[i].age}</div>`;
            }      
        }        
    }
    

    for (i = 0; i < input.length; i++) {
        input[i].value = "";
    }

    localStorage.setItem('person_data', JSON.stringify(state));
}

del.addEventListener('click', deletePerson);
function deletePerson() {
    for (i = 0; i < state.length; i++) {
        if (id.value == state[i].id) {
            state.splice(i, 1)
            li[i].remove();
            id.value = "";
        }
    }
    localStorage.setItem('person_data', JSON.stringify(state));
}

read.addEventListener('click', readData);
function readData() {
    for (let i = 0; i < data.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML += `<div>${data[i].id}</div><div>${data[i].firstname}</div><div>${data[i].lastname}</div><div>${data[i].age}</div>`;
        list.append(newLi);
    }
    state=data;
}
