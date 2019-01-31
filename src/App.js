import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters';


class App extends Component {
  state = {
    //Array of counter objects to be rendered.
    counters: [
      {id:1, value: 0},
      {id:2, value: 0},
      {id:3, value: 0},
      {id:4, value: 0}
    ]
  };

  render() {
    return (
    <React.Fragment>
        <NavBar
          totalCounters= {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete}

            />
        </main>
    </React.Fragment>
    );
  }
// Moving all the event handlers to the app class so we have a single  source of truth
//All counters will send up and event and the actual increment will be done here.
//Event handlers.

//Additon of handleDecrement
handleDecrement = counter =>
{
  const counters = [...this.state.counters] //Create a copy of the counters object
  const index = counters.indexOf(counter);  //Grab the index of the counter object passed up with event handler

  counters[index] = {...counter};
  counters[index].value--; //Decrent the clone index
  this.setState({counters});
}

handleIncrement= counter =>
{
  console.log("Handle Increment");
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  //Using spread operator to clone the previous object
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters});
}

//Creating a single source of truth in counters data
handleReset=()=>{
  console.log("Reset all CAlled")
  const counters = this.state.counters.map(c => {
    c.value = 0;
    return c;}
  );
  this.setState({counters})
}

handleDelete=(counterId)=>{
  const counters = this.state.counters.filter(c=>c.id !== counterId);
  this.setState({counters})
  console.log('Event Handler Called',counterId);
}

}

export default App;
