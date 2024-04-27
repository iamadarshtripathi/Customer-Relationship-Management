import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Images/imgn1.jpg'; // Import the first image
import SecondImage from './Images/imgn2.jpg'; // Import the second image
import ThirdImage from './Images/img3.jpg'; // Import the third image

const Home = () => {
    return (
        <div className='row'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SecondImage} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ThirdImage} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional images */}
      </Carousel>
    </div>
    );
};

export default Home;





