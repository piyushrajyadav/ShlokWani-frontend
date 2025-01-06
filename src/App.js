import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

const App = () => {
  const [shlok, setShlok] = useState(null); // Start with null until data is fetched

  // Fetch Shlok data from backend
  const fetchShlok = async (chapter, slok) => {
    try {
      const response = await fetch(`https://shlokwani.onrender.com/get-shlok/${chapter}/${slok}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setShlok(data);
    } catch (error) {
      console.error("Error fetching shlok:", error);
    }
  };
  
  return (
    <div>
      <h1> Shlokavani 🦚 </h1>
      <InputForm onFetch={fetchShlok} /> {/* Pass fetchShlok to InputForm */}
      <Result shlok={shlok} /> {/* Pass shlok state to Result */}
    </div>
  );
};

export default App;
