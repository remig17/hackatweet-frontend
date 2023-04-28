import { useDispatch, useSelector } from "react-redux";
// import fonctions reducers
import Image from "next/image";
import styles from "../styles/LastTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

function LastTweet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  return (
    <div className={styles.lastTweets}>
      <div className={styles.infoUser}>
        <Image
          className={styles.imageOeuf}
          src="/oeuf.jpeg"
          alt="logo"
          height={40}
          width={40}
        />
        <h4 className={styles.prenom}>{props.user.firstname}</h4>
        <p className={styles.pseudo}>@{props.user.username}</p>
        <span className={styles.point}> . </span>
        <span className={styles.date}>{props.timeStamp}</span>
      </div>
      <div>
        {/* <p>Welcome to <span className={styles.blue}>{props.hashtag}</span> guys</p> */}
        <p>{props.tweetContent}</p>
      </div>
      <div>
        <span className={styles.heartIcone}>{heart}</span>
        <span className={styles.counter}>{props.numLike}</span>
        <span className={styles.trashIcone} onClick={() => deleteTweetSubmit()}>
          {trash}
        </span>
      </div>
    </div>
  );
}

export default LastTweet;
