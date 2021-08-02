import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Audio Production",
          "Voice-Overs",
          "Audio Editing",
          "Podcast Production",
          "Sound Design",
          "Music Production"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
