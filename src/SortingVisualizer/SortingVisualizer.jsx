// https://www.youtube.com/watch?v=pFXYym4Wbkc&t=443s
import React from 'react';
import * as sortingAlgorithms from "../sortingAlgorithms/sortingAlgorithms.js"
import "./SortingVisualizer.css"

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        let array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array
            .sort()
            .sort((a, b) => a - b);
        const sortedArr = sortingAlgorithms.mergeSort(this.state.array);
        console.log(sortedArr);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArr));
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div className='array-container'>
                {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                    backgroundColor: 'turquoise',
                    height: `${value}px`,
                    }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algotithms</button>
            </div>
        );
    };
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}