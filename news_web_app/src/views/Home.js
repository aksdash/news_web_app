import React from 'react';
import Header from './template/header.js';
import LatestNews from './Latestnews.js';
import WeatherReport from './WeatherReport.js';
import ImageCarousel from './ImageCarousel.js';
import HeaderView from './template/header.js';
import Footer from './template/footer.js';

const Home = () => {
    return (
      <div>
        <HeaderView />
        <WeatherReport />
        <div>
            {/* <LatestNews /> */}
            <ImageCarousel />
        </div>
        <LatestNews /> 
        {/* <WeatherReport />
        <LatestNews />
        <ImageGallery />
    <ChatBox /> */}
        <Footer />
      </div>
    );
  };
  
  export default Home;