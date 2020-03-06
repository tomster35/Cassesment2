import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Shoe extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.shoe && this.state.shoeLoaded === true) {
      return (
        <p>Error loading shoes. Try again later.</p>
      );
    } else if (!this.state.shoe) {
      return (
        <p>Loading shoes...</p>
      );
    } else if (this.state.shoe.length === 0) {
      return (
        <p>Sorry, no shoes are available</p>
      );
    } else {
      return (
        <div>
          <h1>Shoe Design</h1><p>{this.state.shoe.title}</p>
         <p>Size{this.state.shoe.size}</p>
      <h1><img src={this.state.shoe.image}></img></h1>
           




          <Link to='/'>Back to All shoes</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.shoesAPI}/${this.props.shoeID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({shoe      : json});
        this.setState({shoeLoaded : true});
      })
      .catch(err => {
        this.setState({shoeLoaded: true});
      });
  }

}

export default Shoe;
