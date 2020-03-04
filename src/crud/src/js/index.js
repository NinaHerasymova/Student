const list = document.getElementById('list')
const li = document.getElementById('list').children
const id = document.getElementById('id')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const age = document.getElementById('age')
const input = document.querySelectorAll('.data')
const create = document.getElementById('create')
const read = document.getElementById('read')
const update = document.getElementById('update')
const del = document.getElementById('del')
let state = []
const data = JSON.parse(localStorage.getItem('person_data'))
let person
let isId = false

function sync() {
  render()
  localStorage.setItem('person_data', JSON.stringify(state))
}

function validate() {
  const regex = /\D/g
  if (regex.test(this.value)) {
    id.value = ''
    age.value = ''
    alert('Please, enter only digits!!!')
  }
}
id.addEventListener('change', validate)
age.addEventListener('change', validate)

const Person = function(id, firstname, lastname, age) {
  this.id = id
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
}

function createPerson() {
  person = new Person(id.value, firstname.value, lastname.value, age.value)
  person.id = id.value
  person.firstname = firstname.value
  person.lastname = lastname.value
  person.age = age.value
  state.push(person)
}

function render() {
  list.innerHTML = ''
  for (let i = 0; i < state.length; i++) {
    const newLi = document.createElement('li')
    newLi.innerHTML = `<div>${state[i].id}</div><div>${state[i].firstname}</div><div>${state[i].lastname}</div><div>${state[i].age}</div>`
    list.append(newLi)
  }
  for (let i = 0; i < input.length; i++) {
    input[i].value = ''
  }
}

create.addEventListener('click', function() {
  if (
    id.value === '' ||
    firstname.value === '' ||
    lastname.value === '' ||
    age.value === ''
  ) {
    alert('Some fields are empty!!!')
  } else {
    for (let i = 0; i < state.length; i++) {
      if (id.value === state[i].id) {
        isId = true
      }
    }
    if (isId === true) {
      alert('This id is already exist!!!')
      isId = false
    } else {
      createPerson()
      sync()
    }
  }
})

function updatePerson() {
  for (let i = 0; i < state.length; i++) {
    if (id.value === state[i].id) {
      state[i].firstname = firstname.value
      state[i].lastname = lastname.value
      state[i].age = age.value
    }
  }
}

update.addEventListener('click', function() {
  if (
    id.value === '' ||
    firstname.value === '' ||
    lastname.value === '' ||
    age.value === ''
  ) {
    alert('Some fields are empty!!!')
  } else {
    updatePerson()
    sync()
  }
})

function deletePerson() {
  for (let i = 0; i < state.length; i++) {
    if (id.value === state[i].id) {
      state.splice(i, 1)
    }
  }
}

del.addEventListener('click', function() {
  for (let i = 0; i < state.length; i++) {
    if (id.value === state[i].id) {
      state.splice(i, 1)
      isId = true
    }
  }
  if (isId === false) {
    alert('This id is absent')
  }
  deletePerson()
  sync()
  isId = false
})

read.addEventListener('click', function() {
  state = data
  render()
})
