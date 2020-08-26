import React from "react";
import Header from "./Header";
import * as SortingAlgorithms from "./SortingAlgorithms.js";
import "./css/SortingVisualiser.css";

export class SortingVisualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numArray: [],
    };
  }

  componentDidMount = () => {
    this.generateArray(10);
  };

  generateArray = () => {
    const size = 10;
    const randomArray = [];
    for (let i = 0; i < size; i++) {
      randomArray.push(Math.floor(Math.random() * 600));
    }
    this.setState({
      numArray: randomArray,
    });
    // console.log(this.state.numArray);
  };

  arrayIsEqual = (jsSortedArray, mySortedArray) => {
    if (jsSortedArray.length !== mySortedArray.length) {
      return false;
    }
    for (let i = 0; i < jsSortedArray.lenth; i++) {
      if (jsSortedArray[i] !== mySortedArray[i]) {
        return false;
      }
    }
    return true;
  };

  bubbleSort = () => {
    const jsSortedArray = this.state.numArray.sort((a, b) => a - b);
    const mySortedArray = SortingAlgorithms.bubbleSort(this.state.numArray);
    console.log(jsSortedArray, mySortedArray);
    console.log(this.arrayIsEqual(jsSortedArray, mySortedArray));
  };

  quickSort = () => {
    const jsSortedArray = this.state.numArray.sort((a, b) => a - b);
    const mySortedArray = SortingAlgorithms.quickSort(this.state.numArray);
    console.log(jsSortedArray, mySortedArray);
    console.log(this.arrayIsEqual(jsSortedArray, mySortedArray));
  };

  heapSort = () => {};

  mergeSort = () => {};

  render() {
    return (
      <div>
        <Header generateNewArray={this.generateArray} />
        <div>
          <button onClick={this.bubbleSort}>Bubble Sort</button>
          <button onClick={this.mergeSort}>Merge Sort</button>
          <button onClick={this.quickSort}>Quick Sort</button>
          <button onClick={this.heapSort}>Heap Sort</button>
        </div>
        <div className="arrayContainer flexContainer">
          {this.state.numArray.map((number, idx) => (
            <div
              className="arrayBar"
              key={idx}
              style={{ height: `${number}px` }}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
