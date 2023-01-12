export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length, animations);
    }
    for (let i = array.length - 1; i > 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, 0, i, animations);
    }
    return animations;
}

/**
 * Build a max heap of subtree with root element of rootIdx.
 * @param {*} mainArray 
 * @param {*} rootIdx 
 */
function heapify(
    mainArray,
    rootIdx,
    endIdx,
    animations
) {
    let largest = rootIdx;
    let leftChild = 2 * rootIdx + 1;
    let rightChild = 2 * rootIdx + 2;

    if (leftChild < endIdx && mainArray[leftChild] > mainArray[largest])
        largest = leftChild;

    if (rightChild < endIdx && mainArray[rightChild] > mainArray[largest])
        largest = rightChild
    
    if (largest !== rootIdx) {
        animations.push([largest, rootIdx]);
        animations.push([largest, rootIdx]);
        animations.push([rootIdx, mainArray[largest]]);
        animations.push([largest, mainArray[rootIdx]]);
        let temp = mainArray[rootIdx];
        mainArray[rootIdx] = mainArray[largest];
        mainArray[largest] = temp;

        // recursively modify the affected substree
        heapify(mainArray, largest, endIdx, animations)
    }
}