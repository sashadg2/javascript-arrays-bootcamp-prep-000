var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,addEl) {
  return [addEl, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,addEl){
  arr.unshift(addEl)
  return arr
}

function addElementToEndOfArray(arr,addEl){
  return [...arr,addEl]
}

function destructivelyAddElementToEndOfArray(arr,addEl) {
  arr.push(addEl)
  return arr
}

function accessElementInArray(arr,element) {
  return arr[element]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  return slice.arr(0, arr.length-1)
}
