import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { setDefaultLocale } from "javascript-time-ago";

const Recommend = ({ uid }) => {
  const [likes, setLikes] = useState([]);
  const users = useSelector((state) => state.firebase.profile);
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);

  const likepost = async () => {
    await db
      .collection("users")
      .doc(uid)
      .collection("likes")

      .add({
        users: users.uid,
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(async () => {
    const unsubscribe = await db
      .collection("users")
      .doc(uid)

      .collection("likes")

      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          likesid: doc.id,
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
      {users.status == "Resource" || !user ? (
        <h1></h1>
      ) : (
        <button type="submit" onClick={() => likepost()}>
          Recommend
        </button>
      )}
      <h4>{likes} Recommends</h4>
    </div>
  );
};

export default Recommend;
