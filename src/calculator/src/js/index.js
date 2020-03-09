//const { math } = require('./logic')

const number = document.querySelectorAll('.number')
const sign = document.querySelectorAll('.sign')
const result = document.querySelector('.result')
const clear = document.querySelector('.clear')
const inp = document.querySelector('#inp')
const preview = document.querySelector('#preview')
const dot = document.querySelector('#dot')
let val1 = ''
let val2 = ''
let oper = ''
let isOpClick = false
let isDot1 = false
let isDot2 = false
let num

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function() {
    num = this.value
    if (isOpClick === false) {
      val1 += num
      inp.value = val1
      preview.textContent += num
      return val1
    }
    if (isOpClick === true) {
      val2 += num
      inp.value = val2
      preview.textContent += num
      return val2
    }
    return num
  })
}

dot.addEventListener('click', function() {
  if (isDot1 === false && isOpClick === false) {
    val1 += this.value
    inp.value += this.value
    preview.textContent += this.value
    isDot1 = true
  } else if (isDot2 === false && isOpClick === true) {
    val2 += this.value
    inp.value += this.value
    preview.textContent += this.value
    isDot2 = true
  }
})

for (let i = 0; i < sign.length; i++) {
  sign[i].addEventListener('click', function() {
    if (isOpClick === false) {
      oper = this.value
      preview.textContent += this.value
      isOpClick = true
    }
  })
}

function reset() {
  preview.textContent += `= ${inp.value}`
  val1 = inp.value
  val2 = ''
  isOpClick = false
  isDot1 = false
  isDot2 = false
}
result.addEventListener('click', function() {
  switch (oper) {
    case '+':
      inp.value = add(val1, val2)
      reset()
      break
    case '-':
      inp.value = sub(val1, val2)
      reset()
      break
    case '*':
      inp.value = mul(val1, val2)
      reset()
      break
    case '/':
      inp.value = div(val1, val2)
      reset()
      break
  }
})

clear.addEventListener('click', function() {
  inp.value = ''
  preview.textContent = ''
  val1 = ''
  val2 = ''
  oper = ''
  isOpClick = false
  isDot1 = false
  isDot2 = false
})
function add(val1, val2) {
  return parseFloat(val1) + parseFloat(val2)
}
function sub(val1, val2) {
  return parseFloat(val1) - parseFloat(val2)
}
function mul(val1, val2) {
  return parseFloat(val1) * parseFloat(val2)
}
function div(val1, val2) {
  if ((val1 === 0 && val2 === 0) || val2 === 0) {
    return 'Error'
  }
  return val1 / val2
}
