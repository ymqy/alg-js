function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function bubbleSort(arr) {
  const len = arr.length;
  const lastIndex = len - 1;

  for (let i = 0; i < len; i+=1) {
    for (let j = lastIndex; j > i; j-=1) {
      if (arr[j-1] > arr[j]) swap(arr, j, j-1);
    }
  }

  return arr;
}

const testData = [6,4,7,3,8];
const result = bubbleSort(testData);
console.log(result);
