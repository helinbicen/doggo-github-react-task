import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { FaExternalLinkAlt, FaFlag } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarButton from "../StarButton";

const RepoCard = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [repoDetails, setRepoDetails] = useState([]);
  const [repoDetailsLoading, setRepoDetailsLoading] = useState(false);

  const starredRepos = [];

  useEffect(() => {
    // setRepos([]);
    setRepoDetails([]);
    setRepoDetailsLoading(false);
  }, [username]);

  function searchRepos() {
    // repoDetailsLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepoDetails(data);
        console.log(username);
        console.log(repoDetails);
      });
  }

  function renderRepo(repo) {
    return (
      <div
        className={styles.repoContainer}
        onClick={() => getRepoDetails(repo.name)}
        key={repo.id}
      >
        <h2 className={styles.repoName}>{repo.name}</h2>
      </div>
    );
  }

  function getRepoDetails(repoName) {
    setRepoDetailsLoading(true);
    fetch(`https://api.github.com/repos/${username}/${repoName}`).then(
      (res) => {
        setRepoDetailsLoading(false);
        setRepoDetails(res.data);
        console.log(res.data);
      }
    );
  }

  return (
    <div className={styles.reposContainer}>
      <button className={styles.listRepos} onClick={searchRepos}>
        List public repos
      </button>
      <div className={styles.timeline}>
        <VerticalTimeline>
          {repoDetails.map((repoDetails) => (
            <VerticalTimelineElement
              className={styles.verticalTimelineElementWork}
              contentStyle={{
                background: "transparent",
                color: "#fff",
                marginTop: "3rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={repoDetails.created_at}
              iconStyle={{
                background: "#181818",
                color: "rgb(86, 29, 29)",
                border: "1px solid #cecece",
                borderRadius: "3px",
                display: "none",
              }}
              icon={<FaFlag />}
            >
              <div className={styles.repoInfo}>
                <div className={styles.starRepo}>
                  <div>
                    <StarButton
                      repoId={username + "/" + repoDetails.name}
                      starredRepos={starredRepos}
                      username={username}
                    />
                  </div>
                </div>

                <div className={styles.repoDetail}>
                  <label className={styles.repoLabel}>Repo Name</label>
                  <span className={styles.value}>
                    {" "}
                    <a target="_blank" href={repoDetails?.svn_url}>
                      {repoDetails?.name} <FaExternalLinkAlt />
                    </a>
                  </span>
                </div>
                <hr></hr>
                <div className={styles.repoDetail}>
                  <label className={styles.repoLabel}>Created at</label>
                  <span className={styles.value}>
                    {repoDetails?.created_at}
                  </span>
                </div>
                <hr></hr>

                <div className={styles.repoDetail}>
                  <label className={styles.repoLabel}>Language</label>
                  <span className={styles.value}> {repoDetails?.language}</span>
                </div>
                <hr></hr>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default RepoCard;
