// export const mergeSort =(array,animations = [])=>{
//     if (array.length === 1) return array;
//     const middle = Math.floor(array.length/2);
//     const firstHalf = mergeSort(array.slice(0,middle));
//     const secondHalf = mergeSort(array.slice(middle));
//     const sortedArray = [];
//     let i = 0, j = 0;
//     while(i<firstHalf.length && j<secondHalf.length){
//         if(firstHalf[i]<secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);
//         }
//         else{
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while(i<firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while(j<secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// }


// export function mergeSort(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
// }

// function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
//     if (startIndex === endIndex) return;
//     const middleIndex = Math.floor((startIndex + endIndex) / 2);
//     mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
//     doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
// }

// function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
//     let k = startIndex;
//     let i = startIndex;
//     let j = middleIndex + 1;
//     while (i <= middleIndex && j <= endIndex) {
//         const animation = {};
//         animation.comparison = [i, j];
//         if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//             animation.swap = [k, i];
//             mainArray[k++] = auxiliaryArray[i++];
//         }
//         else {
//             animation.swap = [k, j];
//             mainArray[k++] = auxiliaryArray[j++];
//         }
//         animations.push(animation);
//     }
//     while (i <= middleIndex) {
//         animations.push({
//             comparison: [i, i],
//             swap: [k, i],
//         });
//         mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIndex) {
//         animations.push({
//             comparison: [j, j],
//             swap: [k, j],
//         });
//         mainArray[k++] = auxiliaryArray[j++];
//     }
// }

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
