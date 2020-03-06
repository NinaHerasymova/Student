const createPerson = require('../index.logic')
const updatePerson = require('../index.logic')
const deletePerson = require('../index.logic')
const state = require('../index.logic')

const list = document.getElementById('list')
const input = document.querySelectorAll('.data')
let id = document.getElementById('id')
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let age = document.getElementById('age')
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
    id = ''
    age = ''
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
      createPerson()
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
    updatePerson()
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
  deletePerson()
  sync()
  isId = false
})

read.addEventListener('click', function() {
  state = data
  render()
})
