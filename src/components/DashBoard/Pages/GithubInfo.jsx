// src/components/GitHub.js
import React from 'react';
export const githubInfo = {
    username: 'your-username',
    repos: [
      { id: 1, name: 'Repo 1', url: 'https://github.com/your-username/repo1' },
      { id: 2, name: 'Repo 2', url: 'https://github.com/your-username/repo2' },
      { id: 3, name: 'Repo 3', url: 'https://github.com/your-username/repo3' },
    ],
    followers: 150,
    following: 100,
  };
const GitHub = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">GitHub Information</h2>
      <p className="text-lg">Username: {githubInfo.username}</p>
      <p className="text-lg">Followers: {githubInfo.followers}</p>
      <p className="text-lg">Following: {githubInfo.following}</p>
      <h3 className="text-lg font-semibold mt-4">Repositories:</h3>
      <ul className="list-disc list-inside">
        {githubInfo.repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHub;
