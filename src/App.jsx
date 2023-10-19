import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";
 
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0,amount));
  }

  return <section>
    <h4>tired of boring lorem ipsum?</h4>
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs: </label>
      <input type="number" 
      id="amount" 
      name="amount" 
      min="1" 
      step="1" 
      max="8"
      value={count}
      onChange={(e) => setCount(e.target.value)}>
      </input>
      <button type="submit">generate</button>
    </form>
    <article>
      {text.map((item) => {
        return <p key={nanoid}>{item}</p>
      })}
    </article>
  </section>;
};
export default App;
