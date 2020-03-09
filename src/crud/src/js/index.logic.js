const state = [];

function createPerson(id, firstname, lastname, age) {
  const Person = function() {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  };
  const person = new Person();
  state.push(person);
  return state;
}

function updatePerson(id, firstname, lastname, age) {
  for (let i = 0; i < state.length; i++) {
    if (id === state[i].id) {
      state[i].firstname = firstname;
      state[i].lastname = lastname;
      state[i].age = age;
      return state[i];
    }
  }
  return state;
}

function deletePerson(id) {
  for (let i = 0; i < state.length; i++) {
    if (id === state[i].id) {
      state.splice(i, 1);
    }
  }
  return state;
}

// module.exports.updatePerson = updatePerson
// module.exports.deletePerson = deletePerson
// module.exports.createPerson = createPerson
// module.exports.state = state
