// mergeSortedArrays([0,3,5,31], [4,6,12])
// [0,3,4,4,6,12,31]

const mergeSortedArrays = (arr1, arr2) => {
  // loop through arr1

  // check first value in arr1 against first value in arr 2

  // if value in arr1 is lower add to result array and increment arr 1 index
  // if higher add the value in array 2 and increment array 2 index


  let result = []
  let loop = arr1.length + arr2.length
  let i = 0;
  let j = 0;

  // would be better off with a while loop 
  // while (arr1[i] || arr2[j])
  
  for (let k = 0; k < loop; k++) {

    if (arr1[i] === undefined) {
      result.push(arr2[j])
    }
    if (arr2[j] === undefined) {
      result.push(arr1[i])
    }

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i])
      i++
    } else if (arr1[i] >= arr2[j]) {
      result.push(arr2[j])
      j++
    }
  }

  console.log(result)

}

mergeSortedArrays([0,3,4,31], [4,6,12])