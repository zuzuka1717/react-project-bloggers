import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


function Slider() {
  return (
    <Container>
      <Carousel>
  <Carousel.Item style={{'height': '35em'}}>
    <img 
      className="d-block w-100"
      src={require ('./first.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height': '35em'}}>
    <img
      className="d-block w-100"
      src={require ('./second.jpg')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height': '35em'}}>
    <img
      className="d-block w-100"
      src={require ('./third.jpeg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
  );
}

export default Slider;