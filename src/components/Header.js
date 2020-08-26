import React from "react";
import "./css/SortingVisualiser.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="flex-container">
          <div>
            <button onClick={this.props.generateNewArray}>
              Generate New Array
            </button>
          </div>
          {/* <div>
            <button>Bubble Sort</button>
            <button>Merge Sort</button>
            <button>Quick Sort</button>
            <button>Heap Sort</button>
          </div> */}
        </header>
      </div>
    );
  }
}
