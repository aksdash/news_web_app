import React, {useState,useEffect} from "react";
import { fetchNews,fetchNewsByCategory } from "../util/api";
import HeaderView from "./template/header";
import Footer from "./template/footer";
const articles = [
    {
      title: 'Breaking News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/image1.jpg',
      publishedAt: '2023-11-10T12:30:00Z',
      author: 'John Doe',
    },
    {
      title: 'Latest Update 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://example.com/image2.jpg',
      publishedAt: '2023-11-09T15:45:00Z',
      author: 'Jane Doe',
    },
    // Add more articles as needed
  ];
  
  // News component
  const News = () => {
    const [apiData, setApiData] = useState(articles)
    useEffect (() => {
        fetchNewsCategory("sports")
      },[])
      const fetchNewsCategory = async (category) => {
        try {
          const mdn  = await fetchNewsByCategory(category)
          console.log(mdn)
          setApiData(mdn.data)
        }catch (err){
          setApiData([])
          console.log("error happened")
        } 
      }
    return (
        
        <>
        <HeaderView />
        <div>
        <h2>Sports News</h2>
        {apiData.map((article, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <img src={article.imageUrl} alt={article.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>
              <strong>Published at:</strong> {article.publishedAt}
            </p>
          </div>
        ))}
      </div>
      <Footer />
        </>
      
    );
  };
  
  export default News;
  