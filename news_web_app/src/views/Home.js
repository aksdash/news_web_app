import React, { useEffect, useState } from 'react';
import Header from './template/header.js';
import LatestNews from './Latestnews.js';
import WeatherReport from './WeatherReport.js';
import ImageCarousel from './ImageCarousel.js';
import HeaderView from './template/header.js';
import Footer from './template/footer.js';
import ChatBox from './ChatBox.js';
import { fetchNews } from '../util/api.js';
import News from './Sports.js';

import axios from 'axios';

const Home = () => {
    const [apiData, setApiData] = useState(null)
    const [isChatVisible, setChatVisible] = useState(false);
    const userName = 'test user'
    useEffect(() => {
        fetchNews1()
    },[]) 

    const fetchNews1 = async () => {
       try {
        const news = await fetchNews()
        setApiData(news.data)
        console.log(apiData)
       }catch(err){
        console.log(err)
       }
    };

    const toggleChatVisibility = () => {
        setChatVisible((prevVisibility) => !prevVisibility);
    };

    return (
      <div>
        <HeaderView />
        <WeatherReport />
        <div>
            {/* <LatestNews /> */}
            <ImageCarousel data = {apiData}/>
        </div>
        <LatestNews data = {apiData}/> 
        {/* <WeatherReport />
        <LatestNews />
        <ImageGallery />
    <ChatBox /> */}
         <button style={styles.toggleButton} onClick={toggleChatVisibility}>
            {isChatVisible ? 'Hide Chat' : 'Show Chat'}
        </button>
        {isChatVisible && <ChatBox />}
        <Footer />
      </div>
    );
  };
  
  export default Home;

  const styles = {
    toggleButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '10px',
      cursor: 'pointer',
      zIndex: '999'
    },
  };