import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Shoes extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.shoes && this.state.shoesLoaded === true) {
      return (
        <p>Error loading shoes. Try again later.</p>
      );
    } else if (!this.state.shoes) {
      return (
        <p>Loading shoes...</p>
      );
    } else if (this.state.shoes.length === 0) {
      return (
        <p>Sorry, no shoes are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Shoes in the database</h1>
          <ul>
            {this.state.shoes.map(shoe => (
              <li key={`shoe_${shoe._id}`}><Link to={`/shoe/${shoe._id}`}>{shoe.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-shoe'>Add a new Shoe</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.shoesAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({shoes       : json});
        this.setState({shoesLoaded : true});
      })
      .catch(err => {
        this.setState({shoesLoaded: true});
      });
  }

}

export default Shoes;

