// ArticleListView.js
import React, { useEffect, useState } from 'react';
import { fetchNews,deleteNews } from '../util/api';
import AdminHeader from './template/admindHeader';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
  const navigate = useNavigate()
  const [news, setNews] = useState( [{
    "_id": "65489d3cc997685d5bd874ab",
    "title": "Over 30,000 pro-Palestinian protesters march in London, draw counter-protests",
    "description": "More than 300,000 pro-Palestinian demonstrators marched through central London on Saturday, drawing counter protests from far-right groups. Police arrested nearly 100 people from the far-right faction of protesters to stop them from disrupting the main rally.",
    "imageUrl": "",
    "author": "65489d03c997685d5bd874aa",
    "tags": [
        "XYZ"
    ],
    "publicationDate": "2023-11-06T08:01:00.256Z",
    "__v": 0
  }])

  useEffect (() => {
    fetchNewsTop10()
  },[])
  const fetchNewsTop10 = async () => {
    try {
      const mdn  = await fetchNews()
      setNews(mdn.data)
    }catch (err){
      setNews([])
      console.log("error happened")
    } 
  }

  const handleEdit = (articleId) => {
    // Add your logic to handle the edit action
    console.log(`Edit article with ID: ${articleId}`);
  };
  
  const handleDelete = (articleId) => {
    console.log(`Delete article with Id ${articleId}`)
    delAPi(articleId)
  }
  
  const delAPi = async(id) => {
    try{
      const res = await deleteNews(id)
      if (res){
        alert("item deleted ")
        window.location.reload();
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <AdminHeader />
      <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.titleColumn}>Title</div>
        <div style={styles.descriptionColumn}>Description</div>
        <div style={styles.publishedAtColumn}>Published At</div>
        <div style={styles.editColumn}>Edit</div>
      </div>

      {news.map((article) => (
        <div key={article._id} style={styles.row}>
          <div style={styles.titleColumn}>{article.title}</div>
          <div style={styles.descriptionColumn}>{article.description}</div>
          <div style={styles.publishedAtColumn}>{article.publishedAt}</div>
          <div style={styles.editColumn}>
            <button onClick={() => handleEdit(article._id)}>Edit</button>
            <button onClick={() => handleDelete(article._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );

};


const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
  },
  row: {
    display: 'flex',
    borderBottom: '1px solid #ccc',
    padding: '8px 0',
  },
  titleColumn: {
    flex: 2, // Takes 2/5 of the available space
    paddingRight: '10px',
  },
  descriptionColumn: {
    flex: 2, // Takes 2/5 of the available space
    paddingRight: '10px',
  },
  publishedAtColumn: {
    flex: 1, // Takes 1/5 of the available space
    paddingRight: '10px',
  },
  editColumn: {
    flex: 1, // Takes 1/5 of the available space
  },
};

export default NewsList;
