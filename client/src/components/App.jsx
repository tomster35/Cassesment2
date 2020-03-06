import React    from 'react';
import {Router} from "@reach/router";
import Shoes   from './Shoes';
import Shoe   from './Shoe';
import AddShoe from './AddShoe';
import Header       from './Header';
import Slider       from './Slider';


class App extends React.Component {

  render() {
    return (


      <div className='App'>
        <Header>
      </Header> 
      <Slider>
      </Slider>
      <Router>
       <Shoes   path='/' />
        <Shoe   path='/shoe/:shoeID' />
        <AddShoe path='/add-shoe/' />
      </Router>
          </div>
    
    );
  }

}

export default App;
