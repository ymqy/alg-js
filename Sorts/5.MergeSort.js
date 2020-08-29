function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;

  const middle = len >> 1;
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const testData = [8,9,1,7,2,3,5,4,6,0];
const result = mergeSort(testData);
console.log(result);
