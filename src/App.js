import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import Movies from './components/movies';

class App extends Component {
  state = {
    counters: [
      { key: 1, value: 1 },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    let counters = [...this.state.counters];
    counters[index].value = this.state.counters[index].value + 1;
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    let counters = [...this.state.counters];
    counters[index].value = this.state.counters[index].value - 1;
    this.setState({ counters: counters });
  }

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((counter) => ({
        key: counter.key,
        value: (counter.value = 0),
      })),
    });
  };

  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter(
        (counter) => counter.key != counterId
      ),
    });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          {/* <Counters counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} /> */}
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
