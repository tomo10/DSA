// Given 2 arrays. Whether these 2 arrays comtain any common items
const arr1 = ["a", "b", "c", "x"]
const arr2 = ["z", "y", "i"]
// result = false

const arr3 = ["a", "b", "c", "x"]
const arr4 = ["z", "y", "x"]
// result = true

const containsCommonItems = (arr1, arr2) => {
  const memo = {};
  let result = false;
  arr1.forEach(element => {
    memo[element] = true
  });

  arr2.forEach(element => {
    if (memo[element]) {
      result = true
    }
  });

  return result;
}

containsCommonItems(arr1, arr2)
containsCommonItems(arr3, arr4)

