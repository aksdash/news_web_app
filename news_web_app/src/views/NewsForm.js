// NewsForm.js
import React, { useState } from 'react';
import { submitNews } from '../util/api.js';
import AdminHeader from './template/admindHeader.js';
import { useNavigate } from 'react-router-dom';
const NewsForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    imageUrl: '',
    publishedAt: '',
    category:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission

    console.log('Form submitted:', formData);
    submitHandler(formData)
    
  };

  const submitHandler = async (news) => {
    try{
        const res = await submitNews(news)
        if(res){
            alert('form submitted Sucessfully')
            navigate('/newslist')
        }
    }catch(err){
        console.log(err)
    }
  }

  const handleAdd = () => {
    // Custom action on Add button
    console.log('Custom action on Add');
    // Add your custom logic here
    console.log(formData)

  };

  const handleReset = () => {
    // Custom action on Reset
    console.log('Form reset');
    setFormData({
      title: '',
      description: '',
      url: '',
      imageUrl: '',
      publishedAt: '',
      category: '',
    });
  };


  return (
   <>
   <AdminHeader />
    <div style={styles.formContainer}>
      <h2>News Form</h2>
      <form>
        <div style={styles.formField}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <br />
        <div style={styles.formField}>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <br />
        <div style={styles.formField}>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <br />
        <div style={styles.formField}>
          <label>URL to Image:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <br />
        <div style={styles.formField}>
          <label>Published At:</label>
          <input
            type="text"
            name="publishedAt"
            value={formData.publishedAt}
            onChange={handleChange}
          />
        </div>
        <div style={styles.formField}>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div style={styles.line}></div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.blueButton} onClick={handleSubmit}>
            Submit
          </button>
          <button type="reset" style={styles.yellowButton} onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
   </>
  );
};

const styles = {
  input: {
    width : '80%'
  },

  formContainer: {
    marginLeft: '200px',
    marginRight: '50px',
  },
  formField: {
    marginBottom: '15px',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  blueButton: {
    backgroundColor: '#34ebd8',
    color: 'white',
    padding: '8px 16px',
    margin: '0 10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  },
  yellowButton: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '8px 16px',
    margin: '0 10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  },

  line: {
    borderBottom: '1px solid #ccc',
    margin: '20px 0',
  }
};

export default NewsForm;
