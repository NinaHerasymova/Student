const createPerson = require('../index.logic')
const updatePerson = require('../index.logic')
const deletePerson = require('../index.logic')

describe('createPerson', function() {
  it('create', function() {
    createPerson('1', 'd', 'd', '2')
    expect(state[0]).to.deep.contain({
      id: '1',
      firstname: 'd',
      lastname: 'd',
      age: '2',
    })
  })
  it('create', function() {
    createPerson('2', 'gg', 'd', '6')
    expect(state[1]).to.deep.contain({
      id: 2,
      firstname: 'gg',
      lastname: 'd',
      age: '6',
    })
  })
})
describe('updatePerson', function() {
  it('update', function() {
    updatePerson('1', 'c', 'c', '3')
    expect(state[0]).to.deep.contain({
      id: '1',
      firstname: 'c',
      lastname: 'c',
      age: '3',
    })
  })
  it('update', function() {
    updatePerson('2', 'bb', 'bb', '65')
    expect(state[1]).to.deep.contain({
      id: '2',
      firstname: 'bb',
      lastname: 'bb',
      age: '65',
    })
  })
})
describe('deletePerson', function() {
  it('delete', function() {
    deletePerson('1')
    expect(state.length === 1)
    deletePerson('2')
    expect(state.length === 0)
  })
})
