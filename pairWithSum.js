// [1,2,3,9]  sum = 8 => false
// [1,2,4,4,5,12]  sum = 8 => true
let test1 = [1,2,3,9] 
let test2 = [1,2,4,4,5,12]

const pairWithSum = (arr, sum) => {

  let low_index = 0;
  let high_index = 3;

  while (low_index < high_index) {
    let check = arr[low_index] + arr[high_index]

    if (check === sum) return console.log('TRUE')
    else if (check > sum) high_index--;
    else if (sum > check) low_index++;

  }


}

let test_1 = [1,9,3,2] // sum 8 -> false
let test_2 = [12,2,1,4,5,3] // sum = 8 -> true

const pairWithSumNoOrder = (arr, sum) => {
  let memo = {}

  for (let i = 0; i < arr.length; i++) {
    let rem = sum - arr[i];

    if (memo[rem]) return true;
    
    else {
      memo[arr[i]] = true
    }
  }
  return false;
}

pairWithSumNoOrder(test1, 8)
pairWithSumNoOrder(test_2, 8)