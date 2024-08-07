// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import axios from 'axios'

const App = () => {
  const [repos, setRepos] = useState([]);
  const [sort, setSort] = useState('stars');

  const handleSearch = async (query) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc`);
    setRepos(response.data.items);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} setSort={setSort} />
      <RepoList repos={repos} />
    </div>
  );
};

export default App;
