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

function bucketSort(arr, k, s) {
  const buckets = Array.from({ length: k }, () => []);

  arr.forEach(e => {
    const index = ~~(e/s);
    buckets[index].push(e);
  });

  buckets.forEach(bucket => insertionSort(bucket));

  return [].concat(...buckets);
}

const testData = [6,5,3,3,2,2,1];
const result = bucketSort(testData, 5, 10);
console.log(result);
