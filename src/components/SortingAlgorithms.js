// import React from "react";

export const bubbleSort = (array) => {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter += 1;
  }
  return array;
};

const swap = (a, b, array) => {
  let temp = array[b];
  array[b] = array[a];
  array[a] = temp;
};

export const quickSort = (array) => {
  quickSortHelper(array, 0, array.length - 1);
  return array;
};

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) {
    return;
  }
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    swap(pivotIdx, rightIdx, array);
    const leftSubarrayIsSmaller =
      rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
      quickSortHelper(array, startIdx, rightIdx - 1);
      quickSortHelper(array, rightIdx + 1, endIdx);
    } else {
      quickSortHelper(array, rightIdx + 1, endIdx);
      quickSortHelper(array, startIdx, rightIdx - 1);
    }
  }
}

export const mergeSort = (array) => {
  if (array.lenth <= 1) return array;
  const helperArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, helperArray);
  return array;
};

function mergeSortHelper(mainArray, startIdx, endIdx, helperArray) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
}

export const heapSort = (array) => {};
