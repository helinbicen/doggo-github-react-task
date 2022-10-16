import { createContext, useContext, useState, useEffect } from "react";

const StarredContext = createContext();

const StarredProvider = ({ children }) => {
    const [repos, setRepos] = useState(JSON.parse(localStorage.getItem("_repos")) || []);

    useEffect(() => {
    localStorage.setItem("_repos", JSON.stringify(repos));
    }, [repos]);

  const values = {
    repos,
    setRepos
  };

  return (
    <StarredContext.Provider value={values}>{children}</StarredContext.Provider>
  );
};

const useStarred = () => useContext(StarredContext);

export { useStarred, StarredProvider };
