export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1]);
                animations.push([j, j + 1]);
                animations.push([j, array[j + 1]]);
                animations.push([j + 1, array[j]]);

                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return [array, animations];
}