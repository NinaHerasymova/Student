function createPerson() {
  person = new Person(id.value, firstname.value, lastname.value, age.value)
  person.id = id.value
  person.firstname = firstname.value
  person.lastname = lastname.value
  person.age = age.value
  state.push(person)
}

function updatePerson(state) {
  for (let i = 0; i < state.length; i++) {
    if (id.value === state[i].id) {
      state[i].firstname = firstname.value
      state[i].lastname = lastname.value
      state[i].age = age.value
    }
  }
}

function deletePerson(state) {
  for (let i = 0; i < state.length; i++) {
    if (id.value === state[i].id) {
      state.splice(i, 1)
    }
  }
}

module.exports = updatePerson
module.exports = deletePerson
module.exports = createPerson
