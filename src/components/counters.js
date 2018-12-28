//Will be comprised of counter Components
import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
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

        <button
          onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter =>
          <Counter key = {counter.id} onDelete={this.handleDelete} counter={counter} >

          </Counter>)}
      </React.Fragment>
    );

  }
  //Event handlers.

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
export default Counters
