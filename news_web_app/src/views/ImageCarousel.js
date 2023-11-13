// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({data}) => {

    let arr = []
    if (data instanceof Array){
        arr = data
        arr = data.slice(0,3)
    }
  const images = [
    'https://www.reuters.com/resizer/Fiw4w6C3A4BgFTCXLzoE8SNdC1I=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S3UOMLPB4NLE7KRDP77LYOS3XI.jpg',
    'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3',
  ];

  let imagePlaceholder = "https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3"

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={styles.carouselContainer}>
      <Slider {...settings}>
        {arr.map((obj, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={ (obj.imageUrl) ? obj.imageUrl : imagePlaceholder} alt={`Image ${index + 1}`} style={styles.image} />
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
