import React, { useState, useEffect } from "react";
import Profile from "../Components/Homepage/Profile";

import Navbar from "../Components/Navbar/Navbar";
import { db } from "../firebase";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = db
      .collection("users")
      .orderBy("charge", "asc")

      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navbar />
      <h1>Welcome to Maintenaince Nepal</h1>
      <section>
        <div className="jobs">
          {data.map((user) => (
            <div key={user.uid}>
              <Profile data={user} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Homepage;
