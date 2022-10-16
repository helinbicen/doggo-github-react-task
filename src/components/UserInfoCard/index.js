import styles from "./index.module.css";

function UserInfoCard({
  userDetails,
  userDetailsLoading,
}) {
  if (!userDetailsLoading) {
    return <h1 className={styles.loader}></h1>;
  }

  return (
    <div className={styles.userDetailContainer}>
      <div className={styles.upperSide}>
        <div className={styles.photoContainer}>
          <img
            className={styles.userAvatar}
            src={userDetails.avatar_url}
            alt=""
            
          />
        </div>
        <div className={styles.detailsRow}>
          <span className={styles.value}>{userDetails.name ? userDetails.name : "No name added"}</span>
        </div>
        <div className={styles.detailsRow}>
          <label className={styles.infoLabel}>Location</label>
          <span className={styles.value}>{userDetails.location ? userDetails.location : "-"}</span>
        </div>
        <div className={styles.detailsRow}>
          <label className={styles.infoLabel}>Company</label>
          <span className={styles.value}>
            {" "}
            {userDetails.company ? userDetails.company : "-"}
          </span>
        </div>

        <div className={styles.detailsRow}>
          <label className={styles.infoLabel}>Public Repos</label>
          <span className={styles.value}> {userDetails.public_repos}</span>
        </div>
        <div className={styles.detailsRow}>
          <label className={styles.infoLabel}>Followers</label>
          <span className={styles.value}> {userDetails.followers}</span>
        </div>
        <div className={styles.detailsRow}>
          <label className={styles.infoLabel}>Following</label>
          <span className={styles.value}> {userDetails.following}</span>
        </div>
      </div>
      
    </div>
  );
}

export default UserInfoCard;
