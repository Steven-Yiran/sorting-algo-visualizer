import { getMergeSortAnimations, getQuickSortAnimations } from "../sortingAlgorithms/sortingAlgorithms";
import { getHeapSortAnimations } from "../sortingAlgorithms/heapSort";
import { randomIntFromInterval } from "../SortingVisualizer/SortingVisualizer";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";

function randomArray() {
    let array = [];
    for (let i = 0; i < 250; i++) {
        array.push(randomIntFromInterval(5, 800));
    }
    return array;
}

test('merge sort algorithm', () => {
    for (let i = 0; i < 100; i++) {
        const array = randomArray();
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const mergeSortedArray = getMergeSortAnimations(array)[0];
        expect(mergeSortedArray).toEqual(javaScriptSortedArray);
    }
});

test('quick sort algorithm', () => {
    for (let i = 0; i < 100; i++) {
        const array = randomArray();
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const quickSortedArray = getQuickSortAnimations(array)[0];
        expect(quickSortedArray).toEqual(javaScriptSortedArray);
    }
});

test('heap sort algorithm', () => {
    for (let i = 0; i < 100; i++) {
        const array = randomArray();
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const quickSortedArray = getHeapSortAnimations(array)[0];
        expect(quickSortedArray).toEqual(javaScriptSortedArray);
    }
});

test('bubble sort algorithm', () => {
    for (let i = 0; i < 100; i++) {
        const array = randomArray();
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const quickSortedArray = getBubbleSortAnimations(array)[0];
        expect(quickSortedArray).toEqual(javaScriptSortedArray);
    }
});