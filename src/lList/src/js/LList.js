let List = require('../../../list/List')
let { Node } = require('./Node')

function LList(array) {
  List.apply(this, arguments)
  this.defArray = array
  this._length = 0
  this.root = null
  this.init()
}

LList.prototype = Object.create(List.prototype)
LList.prototype.constructor = LList

LList.prototype.addStart = function(element) {
  let node = new Node(element)
  node.next = this.root
  this.root = node
  this._length++
  return this._length
}

LList.prototype.init = function() {
  for (let i = this.defArray.length - 1; i >= 0; i--) {
    this.addStart(this.defArray[i])
  }
}

LList.prototype.size = function() {
  return this._length
}

LList.prototype.addEnd = function(element) {
  let node = new Node(element)
  let current = this.root
  while (current.next) {
    current = current.next
  }
  current.next = node
  this._length++
  return this._length
}

LList.prototype.delEnd = function() {
  let current = this.root
  while (current.next.next) {
    current = current.next
  }
  let last = current.next
  current.next = null
  this._length--
  return last.data
}

LList.prototype.delStart = function() {
  let start = this.root
  this.root = this.root.next
  this._length--
  return start.data
}

LList.prototype.delPosition = function(index) {
  if (this.root) {
    let data
    if (index === 0) {
      data = this.root.data
      this.delStart()
    } else if (index < this._length && index >= 0) {
      let i = 0
      let current = this.root
      while (index - 1 > i) {
        current = current.next
        i += 1
      }
      data = current.next.data
      current.next = current.next.next
    }
    this.length--
    return data
  }
}

LList.prototype.get = function(index) {
  if (this.root) {
    let i = 0
    let current = this.root
    if (index < this._length && index >= 0) {
      while (i !== index) {
        current = current.next
        i += 1
      }
      return current.data
    }
  }
  return
}

LList.prototype.set = function(index, value) {
  if (this.root) {
    let i = 0
    let current = this.root
    if (index < this._length && index >= 0) {
      while (i !== index) {
        current = current.next
        i++
      }
      current.data = value
    }
    return current
  }
}

LList.prototype.toString = function() {
  let strList = ''
  let current = this.root
  while (current) {
    strList += current.data
    current = current.next
  }
  return strList
}

LList.prototype.clear = function() {
  this._length = 0
  this.root = null
  this.init()
}

LList.prototype.min = function() {
  if (this.root) {
    let current = this.root
    let minNode = current
    while (current.next) {
      current = current.next
      if (current.data < minNode.data) {
        minNode = current
      }
    }
    return minNode.data
  }
}

LList.prototype.max = function() {
  if (this.root) {
    let current = this.root
    let maxNode = current
    while (current.next) {
      current = current.next
      if (current.data > maxNode.data) {
        maxNode = current
      }
    }
    return maxNode.data
  }
}

LList.prototype.sort = function() {
  let arr = this.toArray()
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = current
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    this.addStart(arr[i])
  }
  let sorted = new LList(arr)
  return sorted
}

LList.prototype.maxIndex = function() {
  if (this.root) {
    let current = this.root
    let maxNode = current
    let maxIndex = 0
    let i = 0
    while (current.next) {
      current = current.next
      i += 1
      if (current.data > maxNode.data) {
        maxNode = current
        maxIndex = i
      }
    }
    return maxIndex
  }
  return
}

LList.prototype.minIndex = function() {
  if (this.root) {
    let current = this.root
    let minNode = current
    let minIndex = 0
    let i = 0
    while (current.next) {
      current = current.next
      i += 1
      if (current.data < minNode.data) {
        minNode = current
        minIndex = i
      }
    }
    return minIndex
  }
}

LList.prototype.addPosition = function(index, element) {
  let node
  if (this.root) {
    let i = 0
    let current = this.root

    if (index === 0) {
      this.addStart(element)
    } else if (index < this._length && index >= 0) {
      while (index - i > 1) {
        current = current.next
        i++
      }
      node = new Node(element)
      node.next = current.next
      current.next = node
    }
  }
  this._length++
  return this.root
}

LList.prototype.toArray = function() {
  const array = []
  let current = this.root
  while (current) {
    array.push(current.data)
    current = current.next
  }
  return array
}

LList.prototype.reverse = function() {
  const array = this.toArray()
  const res = []
  let k = 0
  for (let i = array.length - 1; i >= 0; i--) {
    res[k] = array[i]
    k++
  }
  let reversed = new LList(res)
  return reversed
}

LList.prototype.halfReverse = function() {
  const array = this.toArray()
  const subArr = []
  let i = 0
  if (array.length % 2 === 0) {
    while (i < array.length / 2) {
      subArr[i] = array[array.length / 2 - 1 - i]
      i++
    }
    while (i < array.length) {
      subArr[i] = array[array.length + array.length / 2 - 1 - i]
      i++
    }
  } else {
    while (i < array.length / 2 - 0.5) {
      subArr[i] = array[array.length / 2 - 1.5 - i]
      i++
    }
    while (i === array.length / 2 - 0.5) {
      subArr[i] = array[i]
      i++
    }
    while (i < array.length) {
      subArr[i] = array[array.length + array.length / 2 - 0.5 - i]
      i++
    }
  }
  let half = new LList(subArr)
  return half
}

// const array = new LList([2, 4, 58, 6, 10, 31, -82, 23, 14])
// let a = array.reverse()
// console.log(a.toArray())
module.exports.LList = LList
