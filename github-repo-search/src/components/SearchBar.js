// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch, setSort }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        onSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for repos..."
            />
            <button onClick={handleSearch}>Search</button>
            <select onChange={handleSortChange}>
                <option value="stars">Stars</option>
                <option value="watchers_count">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>
        </div>
    );
};

export default SearchBar;
