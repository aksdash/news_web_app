// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  carouselContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop : '30px'
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default ImageCarousel;
