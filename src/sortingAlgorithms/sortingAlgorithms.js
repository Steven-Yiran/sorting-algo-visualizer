export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return [array, animations];
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
        // change color
        animations.push([i, j]);
        // revert color
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return [array, animations];
    quickSortHelper(array, 0, array.length - 1, animations)
    return [array, animations];
}

function quickSortHelper(array, low, high, animations) {
    if (low < high) {
        let pivot = doPartition(array, low, high, animations);
        quickSortHelper(array, low, pivot - 1, animations);
        quickSortHelper(array, pivot + 1, high, animations);
    }
    return array;
}

function doPartition(array, low, high, animations) {
    let pivot = array[high];
    let k = low - 1;

    for (let i = low; i < high; i++) {
        if (array[i] < pivot) {
            k++;
            animations.push([i, k]);
            animations.push([i, k]);
            animations.push([k, array[i]]);
            animations.push([i, array[k]]);
            let temp = array[i];
            array[i] = array[k];
            array[k] = temp;
        }
    }
    animations.push([k + 1, high]);
    animations.push([k + 1, high]);
    animations.push([k + 1, pivot]);
    animations.push([high, array[k + 1]]);
    let temp = array[k + 1];
    array[k + 1] = pivot;
    array[high] = temp;
    return k + 1;
}
