import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";
const App = () => {
  const [loaded, setLoaded] = useState(false);
  let [userInput, setInput] = useState("");

  const handleClick = () => {
    setLoaded(true);
  };

  useEffect(() => {
    console.log(`Input typed ${userInput}`);
  }, [userInput]);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

  if (loaded === false) {
    return (
      <>
        <h1>Website Loading...</h1>
        <button onClick={handleClick}>Click Me!</button>
      </>
    );
  } else {
    return (
      <>
        <Greeter name="Andrew" phrase="Hope your well?!" />
        <Greeter name="James" phrase="React is jolly hardwork what!" />
        <Greeter name="Jane" phrase="Are you enjoying the lab?" />
        <input
          value={userInput}
          onChange={(event) => setInput(event.target.value)}
        />
        <p>You are logging in as {userInput}</p>
      </>
    );
  }
};

export default App;
