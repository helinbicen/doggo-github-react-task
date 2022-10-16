import { FaStar } from "react-icons/fa";
import { useState} from "react";

import { useStarred } from "../../context/StarredContext";

function StarButton({repoId}) {
    const {repos, setRepos } = useStarred();

    let isStarred = repos.find(id => id === repoId);

    const [click, setClick] = useState(isStarred);

    const handleClick = () => {
      setClick(!click);
      if (!repos.includes(repoId)) {
        setRepos([...repos, repoId])
      } else {
        setRepos((prevArray) => {
            let filteredId = prevArray.filter(id => id !== repoId);
            return [...filteredId]
          });
      }

    };

  return (
    <div
      onClick={handleClick} style={click ? {"color":"yellow"} : {"color":"#cecece"}}>
        <FaStar />
    </div>
  )
}

export default StarButton;