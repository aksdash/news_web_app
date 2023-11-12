// News.js
import React from 'react';

const LatestNews = ({data}) => {
    let arr = []
    if (data instanceof Array){
        arr = data
        arr = data.slice(0,3)
    }
    const newsData = [
    {
      title: 'Breaking News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sdfsdfsaf sadfsdafsdf asdfsdf asdfsdf asdfsadf asdfsdf',
    },
    {
      title: 'Latest Update 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Important News 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <div style={styles.newsContainer}>
      {arr.map((news, index) => (
        <div key={index} style={styles.newsBox}>
          <h3 style={styles.title}>{news.title}</h3>
          <p style={styles.description}>{news.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  newsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '300px',
    padding: '10px',
    backgroundColor: '#f2f2f2',
  },
  newsBox: {
    width: '30%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5em',
    margin: '0',
    marginBottom: '10px',
  },
  description: {
    margin: '0',
    wordWrap : 'break-word'
  },
};

export default LatestNews;
