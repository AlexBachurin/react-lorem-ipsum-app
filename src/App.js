import React, { useState } from 'react'
import data from './data'
import Title from './Title';
import './App.css';

function App() {
  //get array with random text from data
  const [loremText, setLoremText] = useState([]);
  //get value to track our input value
  const [value, setValue] = useState(0);


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
  //get random value from data with random text arr
  const getRandomText = () => {
    const randomNum = Math.floor(Math.random() * data.length)
    return data[randomNum];
  }

  //submit 
  const submitHandler = (e) => {
    e.preventDefault();
    const randomArr = [];
    //generate random paragraphs based on our value
    for (let i = 0; i < value; i++) {
      const random = getRandomText();
      randomArr.push(random);
    }
    //and set them into state, on every click on generate we will show 
    //proper number of randomly generated text from data
    setLoremText(randomArr);

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
      <article className="lorem-text">
        {
          loremText.map(item => {
            return <p key={new Date().getTime().toString() + Math.random()}>{item}</p>
          })
        }
      </article>
    </section>
  );
}

export default App;
