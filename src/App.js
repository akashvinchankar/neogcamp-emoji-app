import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "😉": "Winking Face",
  "🤑": "Money-Mouth Face",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Ahh! Sorry we don't have it in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojiopedia</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
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
