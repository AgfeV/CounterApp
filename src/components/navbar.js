import React,{Component} from 'react';

//Create a statless functional component.


class NavBar extends Component {

  render() {
    return(
      <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
        </a>
      </nav>
      </React.Fragment>

    );

  }
}

export default NavBar;
