import Button from "./Button.js";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(() => console.log("call the API"), []);
  useEffect(() => {
    if (keyword !== "") console.log("Search for", keyword);
  }, [keyword]); //keyword가 변할때만 실행
  useEffect(() => {
    if (counter !== "") console.log("change counter : ", counter);
  }, [counter]);
  useEffect(() => {
    if (counter !== "") console.log("keyword or counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
