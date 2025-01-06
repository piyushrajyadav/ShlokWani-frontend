
import React from 'react';

const Result = ({ shlok }) => {
  // If `shlok` is not available or still being fetched, show loading state
  if (!shlok) {
    return <div>Loading...</div>; // Loading message
  }

  // Destructure the necessary data from the JSON
  const {
    _id,
    chapter,
    verse,
    slok,
    transliteration,
    tej,
    siva,
    purohit,
    chinmay,
    san,
    adi,
    gambir,
    madhav,
    anand,
    rams,
    raman,
    abhinav
  } = shlok;

  // Check if the required fields are present
  if (!chapter || !verse || !slok || !transliteration) {
    return <div>Error: Missing some data for the selected Shlok.</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '70%', margin: '20px auto' }}>
      <h2 style={{ color: '#4CAF50' }}>Chapter {chapter}, Verse {verse}</h2>
      <p><strong>Slok:</strong> {slok}</p>
      <p><strong>Transliteration:</strong> {transliteration}</p>
      
      <h3>Translations by Different Authors</h3>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Tejomayananda</h4>
        <p>{tej?.ht}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Sivananda</h4>
        <p><strong>Translation:</strong> {siva?.et}</p>
        <p><strong>Commentary:</strong> {siva?.ec}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Shri Purohit Swami</h4>
        <p>{purohit?.et}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Chinmayananda</h4>
        <p>{chinmay?.hc}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Dr. S. Sankaranarayan</h4>
        <p>{san?.et}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Adidevananda</h4>
        <p>{adi?.et}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Gambirananda</h4>
        <p>{gambir?.et}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Sri Madhavacharya</h4>
        <p>{madhav?.sc}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Sri Anandgiri</h4>
        <p>{anand?.sc}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Swami Ramsukhdas</h4>
        <p><strong>Translation:</strong> {rams?.ht}</p>
        <p><strong>Commentary:</strong> {rams?.hc}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Sri Ramanuja</h4>
        <p>{raman?.sc}</p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h4>Sri Abhinav</h4>
        <p>{abhinav?.sc}</p>
      </div>

    </div>
  );
};

export default Result;

