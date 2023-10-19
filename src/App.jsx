import { useState } from "react";
import data from "./data";
 
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  return <section>
    <h4>tired of boring lorem ipsum?</h4>
    <form>
      <label htmlFor="amount">paragraphs: </label>
      <input type="number" 
      id="amount" 
      name="amount" 
      value={count}
      min="1" 
      step="1" 
      max="8"></input>
      <button type="submit" onChange={(e) => setCount(e.target.value)}>generate</button>
    </form>
  </section>;
};
export default App;
