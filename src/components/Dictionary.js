import { useState, useEffect } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log("State Updated", word);
  });

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definition for {word2}</h1>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's get the definition for {word2}</h1>
    </>
  );
}
