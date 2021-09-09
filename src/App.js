import React, { useState } from 'react'
import data from './data'
import Title from './Title';
import './App.css';

function App() {
  //get array with random text from data
  const [loremText, setLoremText] = useState(data);
  //get value to track our input value
  const [value, setValue] = useState(0)

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
  return (
    <section className="section-center">
      <Title />
      <form className="lorem-form">
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
        <p>hello</p>
      </article>
    </section>
  );
}

export default App;
