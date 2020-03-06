const createPerson = require('./index.logic')
const updatePerson = require('./index.logic')
const deletePerson = require('./index.logic')
let state = require('./index.logic')

const list = document.getElementById('list')
const input = document.querySelectorAll('.data')
const id = document.getElementById('id')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const age = document.getElementById('age')
const create = document.getElementById('create')
const read = document.getElementById('read')
const update = document.getElementById('update')
const del = document.getElementById('del')
const data = JSON.parse(localStorage.getItem('person_data'))
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
input[0].addEventListener('change', validate)
input[3].addEventListener('change', validate)

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
      createPerson(id.value, firstname.value, lastname.value, age.value)
      sync()
    }
  }
})

update.addEventListener('click', function() {
  if (
    id.value === '' ||
    firstname.value === '' ||
    lastname.value === '' ||
    age.value === ''
  ) {
    alert('Some fields are empty!!!')
  } else {
    updatePerson(id.value, firstname.value, lastname.value, age.value)
    sync()
  }
})

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
  deletePerson(id.value)
  sync()
  isId = false
})

read.addEventListener('click', function() {
  state = data
  render()
})
