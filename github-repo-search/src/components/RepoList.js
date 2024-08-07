// src/components/RepoList.js
import React from 'react';

const RepoList = ({ repos }) => {
    return (
        <div>
            {repos.map((repo) => (
                <div key={repo.id} className="card">
                    <img src={repo.owner.avatar_url} alt="avatar" />
                    <h3>{repo.name}</h3>
                    <p>⭐ {repo.stargazers_count}</p>
                    <p>{repo.description}</p>
                    <p>{repo.language}</p>
                </div>
            ))}
        </div>
    );
};

export default RepoList;
