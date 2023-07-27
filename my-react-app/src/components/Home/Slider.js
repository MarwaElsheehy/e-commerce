import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{height: "450px", width: "100%"}}
          src={p1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: "450px", width: "100%"}}
          src={p2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider
