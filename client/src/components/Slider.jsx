import React           from 'react';
import {Carousel} from 'react-bootstrap';

class Slider extends React.Component{
 render(){
      return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://nike.brickworksoftware.com/assets?format=webp&source=https://cdn.filepicker.io/api/file/hROLsYnRUul4givtUjOx"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The Future is here</h3>
      <p>The advancement of technology has arrived.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      
      src="https://oratek360.com/wp-content/uploads/2018/06/img_4804-e1527888830285-1800x600.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Special Features have arised</h3>
      <p>Limited Stock available.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/RCU_yJ0WLaHLJkJD76LP2RN58vs5vJxpqFiBM1aAvoTvzIDY0FtfL5eBjWmmm2zjk5me1LE5jvuPyvmsWRhtDEqCsOUM9pgxOvAQC2I7TpazSPY0LeMb0tqPqJ_DOzdsTug2wA"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Pre-Order now</h3>
      <p>Recieve an outstanding 30% discount.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 );
}
}

export default Slider;