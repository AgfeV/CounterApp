import React, { Component } from 'react';
class Counter extends Component {
  state = { //State object will include all the data the component needs

    count:0 , //Include a counter to be displayed
    tags:['tag1', 'tag2', 'tag3'],
    imageUrl: "https://picsum.photos/200"
  }; //Set the
  render() {

        return(
      //We wrapp in the div or React.Fragment tags to allow the react create element
      //wrapper function to know grab the one tag instret of being confuned
      //by the h1 anb button tags
      //dynamic allocation of the js state data.
      //grabbing buttons from bootstrap and appling to are app with the dynamic data.
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button onClick={() => this.handleIncrement({id:1})} className= "btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>

    );
  }

  ///FUNCTIONS within scope fo the Counter component.
  //create functions to keep render less bloated.

  doHandleIncrement = () =>{

    this.handleIncrement(product);
  };
    //Binding event handlers. Changes the way it is called in jsx. Seems to be called as object not fun
  handleIncrement = products =>{
    console.log(e);
    //Inheritied from component. tells react we are updateing state and the
    //brings the dom and virtual dom in sync reloading from updated state.
    this.setState({count: this.state.count+1 })
  };
  //Used to render a list on screen based on conditions
  renderTags(){
    if(this.state.tags.length === 0 ) return <p>There is no tags</p>;
    return <ul> {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>  ;
}
//Example of condtional formatting with buttons
  getBadgeClasses(){
    let classes = "badge m-2 badge-"; //badge from the bootstrap with margin 2
    //Append a diffrent bootstrap badge depending on a condition. Appending based on cond var
    classes += (this.state.count === 0 ) ? "warning" : "primary";
    return classes
  }

  //Function to grab and forman the count object data.
  formatCount() {
    const {count} = this.state;
    //Can return a jsx expression instead of just a string value.
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
