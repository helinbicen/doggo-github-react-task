import "./style.css";
import { useStarred } from "../../context/StarredContext";
import { useState } from "react";
const HomeScreen = () => {
  const { repos, setRepos } = useStarred();

  return (
    <div>
      <h1>Starred Repos</h1>
      {repos.map((element) => {
        return (
          <div className="starred-repos-page">
            <div className="starred-repo-container">
              <p className="starred-repo">{element}</p>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default HomeScreen;
