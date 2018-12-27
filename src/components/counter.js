import React, { Component } from 'react';
class Counter extends Component {
  state = { //State object will include all the data the component needs

    count:0 , //Include a counter to be displayed
    imageUrl: "https://picsum.photos/200"
  }; //Set the

  styles = {
    fontSize:10,
    fontWeight:"bold"
  };
  render() {

    let classes = "badge m-2 badge-"; //badge from the bootstrap with margin 2
    //Append a diffrent bootstrap badge depending on a condition.
    classes += (this.state.count === 0 ) ? "warning" : "primary";
        return(
      //We wrapp in the div or React.Fragment tags to allow the react create element
      //wrapper function to know grab the one tag instret of being confuned
      //by the h1 anb button tags

      //dynamic allocation of the js state data.
      //grabbing buttons from bootstrap and appling to are app with the dynamic data.
      <React.Fragment>
          <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>

    );
  }
  //Function to grab and forman the count object data.
  formatCount() {
    const {count} = this.state;

    //Can return a jsx expression instead of just a string value.
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
