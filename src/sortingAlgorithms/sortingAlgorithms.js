export const mergeSort = array => {
    if (array.length === 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIdx));
    const secondHalf = mergeSort(array.slice(middleIdx));
    const sortedArr = [];
    let i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] < secondHalf[j]) {
            sortedArr.push(firstHalf[i++]);
        } else {
            sortedArr.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) sortedArr.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArr.push(secondHalf[j++]);
    return sortedArr;
}