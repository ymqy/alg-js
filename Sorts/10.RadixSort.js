function radixSort(arr) {
  const max = Math.max(...arr);
  const buckets = Array.from({ length: 10 }, () => []);

  let m = 1;
  while(m < max) {
    arr.forEach(number => {
      const digit = ~~((number%(m*10))/m);
      buckets[digit].push(number);
    });

    let j = 0;
    buckets.forEach(bucket => {
      while(bucket.length) {
        arr[j++] = bucket.shift();
      }
    });

    m *= 10;
  }
}

const testData = [6,5,3,3,2,2,1];
radixSort(testData);
console.log(testData);
