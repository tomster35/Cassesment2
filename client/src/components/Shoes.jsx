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
        <center> <div>
         <center> <u><h1>**** All Shoes in Factory ****</h1></u> </center>
      <em><h2> With  11 special and <u> Creative Designs </u> to view.</h2></em> 
         
            {this.state.shoes.map(shoe => (
              <li key={`shoe_${shoe._id}`}><Link to={`/shoe/${shoe._id}`}>{shoe.title}</Link></li>
            ))}
         
          <p><Link to='/add-shoe'>Click to add a new Shoe</Link></p>
        </div> </center>
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

