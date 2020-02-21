import React    from 'react';
import {Router} from "@reach/router";
import Shoes   from './Shoes';
import Shoe   from './Shoe';
import AddShoe from './AddShoe';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Shoes   path='/' />
        <Shoe   path='/shoe/:shoeID' />
        <AddShoe path='/add-shoe/' />
      </Router>
    );
  }

}

export default App;
