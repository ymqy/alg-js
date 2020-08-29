function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function insertionSort(arr, gap = 1) {
  const len = arr.length;

  for (let i = gap; i < len; i+=1) {
    let j = i;
    while (j > 0 && arr[j-gap] > arr[j]) {
      swap(arr, j, j-gap);
      j-=gap;
    }
  }

  return arr;
}

function shellSort(arr) {
  const len = arr.length;
  let gap = len >> 1;

  while(gap >= 1) {
    arr = insertionSort(arr, gap);
    gap = gap >> 1;
  }

  return arr;
}

const testData = [8,9,1,7,2,3,5,4,6,0,10];
const result = shellSort(testData);
console.log(result);
