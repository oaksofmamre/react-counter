import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  onDecrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return (
      <CounterPresenter
        counter={this.state.counter}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
      />
    );
  }
}

function CounterPresenter(props) {
  const { counter, onIncrement, onDecrement } = props;
  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
