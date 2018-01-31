var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr,addEl) {
  return [addEl, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,addEl){
  arr.unshift(addEl)
  return arr
}
