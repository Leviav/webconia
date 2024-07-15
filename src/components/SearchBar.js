import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if ( e.key === 'Enter' ) {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress}
        placeholder="Buscar destinos o tours..." 
      />
      <button onClick={handleSearch}>Buscar</button>
      <style jsx>{`
        .search-bar {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
        input {
          padding: 10px;
          font-size: 16px;
          width: 300px;
          margin-right: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
            align-items: center;
          }
          input {
            width: 80%;
            margin-right: 0;
            margin-bottom: 10px;
          }
          button {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
