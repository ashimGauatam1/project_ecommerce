import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css'; 

const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setData(response.data);
        } else {
          alert("Error while fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSuggestions(data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())));
  }, [search, data]);

  return (
    <div>
      <div className="Search-container">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search Here.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search !== '' && (
            <div className="resultBox">
              {suggestions.map(item => (
                <ul key={item.id}>
                  <Link
                  to={`/singleproduct/${item.id}`}
  style={{
    color: '#000', 
    textDecoration: 'none', 
    fontWeight: 'bold',
  }} 
  onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; }}
  onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                  >{item.title}</Link>
                </ul>
              ))}
            </div>
          )}
          <div className="icon"><i className="fas fa-search"></i></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
