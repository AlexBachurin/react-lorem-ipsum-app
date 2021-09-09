import React, { useState } from 'react'
import data from './data'
import Title from './Title';
import './App.css';

function App() {
  //get array with random text from data
  const [loremText, setLoremText] = useState(data);
  //get value to track our input value
  const [value, setValue] = useState(0);
  //value to store our paragraphs
  const [paragraph, setParagraph] = useState([]);

  //watch input changes
  const handleChange = (e) => {
    e.preventDefault();
    const currentValue = e.target.value;
    //prevent value to go below 0
    if (currentValue < 0) {
      setValue(0);
    } else {
      setValue(currentValue);
    }
  }
  //get random value from arr
  const getRandomText = () => {
    const randomNum = Math.floor(Math.random() * loremText.length)
    return loremText[randomNum];
  }

  //submit 
  const submitHandler = (e) => {
    e.preventDefault();
    //generate random paragraphs based on our value
    for (let i = 0; i < value; i++) {
      const random = getRandomText();
      setParagraph((paragraph) => {
        return [...paragraph, random]
      })
    }
  }
  return (
    <section className="section-center">
      <Title />
      <form onSubmit={submitHandler} className="lorem-form">
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={value}
          onChange={handleChange}
        />
        <button className="btn">generate</button>
      </form>

    </section>
  );
}

export default App;
