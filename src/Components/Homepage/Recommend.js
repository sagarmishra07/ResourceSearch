import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiTwotoneLike } from "react-icons/all";
import { AiOutlineLike } from "react-icons/all";
const Recommend = ({ uid }) => {
  const [likes, setLikes] = useState([]);
  const [hasliked, setHasliked] = useState(false);
  const users = useSelector((state) => state.firebase.profile);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState();
  const [user] = useAuthState(auth);

  const likepost = async () => {
    if (hasliked) {
      await db
        .collection("users")
        .doc(uid)
        .collection("likes")
        .doc(data.likessid)
        .delete();
    } else {
      await db
        .collection("users")
        .doc(uid)
        .collection("likes")
        .doc(users.uid)
        .set({
          users: users.uid,
        });
    }
  };

  useEffect(
    () =>
      setHasliked(data.findIndex((like) => like.likessid === users.uid) !== -1),

    []
  );
  useEffect(async () => {
    const unsubscribe = await db
      .collection("users")
      .doc(uid)

      .collection("likes")

      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          likessid: doc.id,
          ...doc.data(),
        }));

        setLikes(data.length);
        setData(data);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <AiOutlineLike size="35" onClick={() => likepost()}></AiOutlineLike>

      <h4>{likes} Recommends</h4>
    </div>
  );
};

export default Recommend;
