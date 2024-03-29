import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { sendTweetSubmit } from "../reducers/tweet";
import Image from "next/image";
import styles from "../styles/LastTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import CardTweet from "./CardTweet";

function LastTweet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [tweetsData, setTweetsData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/tweets/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("console log fetch", data);
        setTweetsData(data.tweet);
      });
  }, []);

  console.log("check", tweetsData);
  const lastTweets = tweetsData.map((tweets, i) => {
    const isLiked = likedMovies.some((movie) => movie === movies.title);
    return <CardTweet key={i} {...data} />;
  });

  return <>{}</>;
}

export default LastTweet;
