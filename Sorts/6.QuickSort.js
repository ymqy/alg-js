function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function partition1(arr, low, high) {
  const pivot = arr[high - 1];
  let i = low, j = high - 1;
  // 小于中心范围：[low, i)
  // 未确认范围为：[i, j)
  // 大于中心点范围为：[j, high - 1)
  while (i !== j) {
    arr[i] <= pivot ? i+=1 : swap(arr, i, --j)
  }
  swap(arr, j, high - 1);

  return j;
}

function quickSort1(arr, low = 0, high = arr.length) {
  if (high - low <= 1) return;

  const p = partition1(arr, low, high);
  quickSort(arr, low, p);
  quickSort(arr, p + 1, high);
}

function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort2(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}

function quickSort3(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr.shift();
  const less = arr.filter(n => n <= pivot);
  const greater = arr.filter(n => n > pivot);

  return [...quickSort3(less), pivot, ...quickSort3(greater)];
}

// const testData = [3,5,8,1,2,9,4,7,6];
const testData = [1,2,5,6,7];
quickSort(testData);
console.log(testData);
