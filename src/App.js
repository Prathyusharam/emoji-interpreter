import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "☺️": "Smiley Face",
  "☹️": "Frowning Face",
  "❤️": "love",
  "☀️": "sun",
  "✌️": "victory hand",
  "☝️": "index pointing up",
  "✍️": "writing hand",
  "⚠️": "warning"
};
var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");
  function emojInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={emojInputHandler} />
      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
