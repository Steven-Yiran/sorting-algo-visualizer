// https://www.youtube.com/watch?v=pFXYym4Wbkc&t=443s
import React from 'react';
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
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 800));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
                {array.map((value, idx) => (
                    <div className='array-bar' key={idx}>
                        {value}
                    </div>
                ))}
            </>
        );
    };
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}