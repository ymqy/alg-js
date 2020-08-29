function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function insertionSort(arr, gap = 1) {
  const len = arr.length;

  for (let i = gap; i < len; i+=1) {
    const currentNum = arr[i];
    let j = i - gap;
    while (j >= 0 && arr[j] > currentNum) {
      arr[j+gap] = arr[j]; // 如果没有做两次交换，务必提前保存 currentNum 值
      j-=gap;
    }
    arr[j+gap] = currentNum;
  }

  return arr;
}

function insertionSort1(arr, gap = 1) {
  const len = arr.length;

  for (let i = gap; i < len; i+=1) {
    for (let j = i; j > 0 && arr[j-gap] > arr[j]; j-=gap) {
      swap(arr, j, j-gap);
    }

    // let j = i;
    // while (j > 0 && arr[j-gap] > arr[j]) {
    //   swap(arr, j, j-gap);
    //   j-=gap;
    // }
  }

  return arr;
}

const testData = [6,4,7,3,8];
const result = insertionSort(testData);
console.log(result);
