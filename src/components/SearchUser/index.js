import { useState, useEffect } from "react";

import { api } from "../../services/api";
import styles from "./index.module.css";

import UserInfoCard from "../UserInfoCard";
import RepoCard from "../RepoCard";

const SearchUser = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsLoading, setUserDetailsLoading] = useState(false);

  useEffect(() => {
    setUsers([]);
    setUserDetails({});
    setUserDetailsLoading(false);
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchUsers();
  }

  function searchUsers() {
    setUserDetailsLoading(true);
    api.get(`/users/${username}`).then((res) => {
      // setUserDetailsLoading(false);
      setUserDetails(res.data);
      console.log(res.data);
    });
  }

  function renderUser(user) {
    return (
      <div
        className={styles.userInfoContainer}
        onClick={() => getUserDetails(user.name)}
        key={user.id}
      >
        <h2 className={styles.username}>{user.name}</h2>
      </div>
    );
  }

  function getUserDetails(username) {
    setUserDetailsLoading(true);
    api.get(`/users/${username}`).then((res) => {
      setUserDetailsLoading(false);
      setUserDetails(res.data);
    });
  }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={username}
          placeholder="Bir kullanıcı adı giriniz"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className={styles.searchButton} onClick={handleSubmit}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className={styles.resultsContainer}>{users.map(renderUser)}</div>
      <UserInfoCard
        userDetails={userDetails}
        userDetailsLoading={userDetailsLoading}
      />

      <RepoCard username={username} />
    </div>
  );
};

export default SearchUser;
