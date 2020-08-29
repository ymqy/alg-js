function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
  constructor(data) {
    this.list = data;
    this.heapSize = data.length;
    this.build();
  }

  build() {
    let i = this.heapSize >> 1 - 1;
    while (i>=0) {
      this.max_heapify(i--);
    }
  }

  max_heapify(i) {
    const arr = this.list;
    const len = this.heapSize;
    const left = 2*i+1;
    const right = 2*i+2;
    let largest = i;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(this.list, i, largest);
      this.max_heapify(largest);
    }
  }

  extract() {
    if (this.heapSize === 0) return null;
    const item = this.list[0];
    swap(this.list, 0, this.heapSize-1);
    this.heapSize-=1;
    this.max_heapify(0);
    return item;
  }
}

function heapSort(arr) {
  const heap = new MaxHeap(arr);

  while (heap.heapSize > 0) {
    arr[heap.heapSize-1] = heap.extract();
  }
}

function buildMaxHeap(arr) {
  const len = arr.length;
  let i = (len >> 1) - 1;
  while (i>=0) {
    heapify(arr, i--, len);
  }
}

function heapify(arr, i, len) {
  const left = 2*i+1;
  const right = 2*i+2;
  let largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

function heapSort2(arr) {
  let len = arr.length;
  buildMaxHeap(arr);

  while (len) {
    swap(arr, 0, --len);
    heapify(arr, 0, len);
  }
}

const testData = [3, 5, 8, 1, 2, 9, 4, 7, 6];
const result = heapSort2(testData);
console.log(testData);
