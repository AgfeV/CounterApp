//Will be comprised of counter Components
import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {

  render() {
    //Object destructuring. Grab only the elements we a intrested in from prop
    //shortcut for organizing the data we need for the react Fragment
    const {onReset, counters, onDelete,onIncrement} = this.props;

    return (
      //Note we are inheriting the counters objects from the props passed
      //down from app.js, swith all attrubutes for event handling 
      <React.Fragment>
        <button
          onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter =>
          <Counter
            key = {counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} >

          </Counter>)}
      </React.Fragment>
    );
  }
}
export default Counters
