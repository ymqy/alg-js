function countingSort(arr) {
  const max = Math.max(...arr);
  // 累计数组
  const counts = Array(max + 1).fill(0);
  // 累计位递增
  arr.forEach(e => counts[e]+=1);
  // 结果取出
  let j = 0;
  counts.forEach((e, i) => {
    while(e--) {
      arr[j++] = i;
    }
  });

  return arr;
}

const testData = [6,5,3,3,2,2,1];
countingSort(testData);
console.log(testData);
