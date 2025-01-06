import React, { useState } from "react";

const InputForm = ({ onFetch }) => {
  const [chapter, setChapter] = useState("");
  const [slok, setSlok] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetch(chapter, slok);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Chapter"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)} 
      />
      <input
        type="number"
        placeholder="Slok"
        value={slok}
        onChange={(e) => setSlok(e.target.value)} // Update slok value
      />
      <button type="submit">Get Shlok</button>
    </form>
  );
};

export default InputForm;
