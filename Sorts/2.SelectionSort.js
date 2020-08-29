function findMinIndex(arr) {
  return arr.indexOf(Math.min(...arr));
}

function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i+=1) {
    const minIndex = findMinIndex(arr.slice(i)) + i;
    if (arr[minIndex] < arr[i]) swap(arr, i, minIndex);
  }

  return arr;
}

const testData = [6,4,7,3,8];
const result = selectionSort(testData);
console.log(result);
