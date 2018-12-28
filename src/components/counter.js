import React, { Component } from 'react';
class Counter extends Component {
  state = { //State object will include all the data the component needs
    //props are given to the component. state is private data to that instance object.
    value:this.props.counter.value , //Include a counter to be displayed. get informaion from the props for the object.
    //tags:['tag1', 'tag2', 'tag3'],
    //imageUrl: "https://picsum.photos/200"
  }; //Set the

  render() {
    console.log(this.props);  //Includes all att for the object
        return(
      //We wrapp in the div or React.Fragment tags to allow the react create element
      //wrapper function to know grab the one tag instret of being confuned
      //by the h1 anb button tags
      //dynamic allocation of the js state data.
      //grabbing buttons from bootstrap and appling to are app with the dynamic data.
      <React.Fragment>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button onClick={product => this.handleIncrement(product)} className= "btn btn-secondary btn-sm">Increment</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>

    );
  }

  ///FUNCTIONS within scope fo the Counter component.
  //create functions to keep render less bloated.


  //Binding event handlers. Changes the way it is called in jsx. Seems to be called as object not fun
handleIncrement = product =>{
  console.log(product);
  //Inheritied from component. tells react we are updateing state and the
  //brings the dom and virtual dom in sync reloading from updated state.
  this.setState({value: this.state.value+1 });
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
    classes += (this.state.value === 0 ) ? "warning" : "primary";
    return classes
  }

  //Function to grab and forman the count object data.
  formatCount() {
    const {value} = this.state;
    //Can return a jsx expression instead of just a string value.
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
