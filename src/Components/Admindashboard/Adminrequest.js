import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import Moment from "react-moment";
const Adminrequest = ({ userdata }) => {
  const [request, setRequest] = useState([]);

  const [requestcount, setRequestcount] = useState([]);

  useEffect(async () => {
    let unsubscribe;
    unsubscribe = db
      .collection("users")
      .doc(userdata)

      .collection("request")

      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          requestid: doc.id,
          ...doc.data(),
        }));
        setRequest(data);

        setRequestcount(data.length);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const deleterequest = (requestid) => {
    db.collection("users")
      .doc(userdata)

      .collection("request")
      .doc(requestid)
      .delete();
  };

  return (
    <div>
      <center>
        {requestcount} Requests
        <section>
          <div>
            {request.map((user, index) => (
              <div key={index}>
                <div className="card">
                  <h1>Name:{user.user}</h1>

                  <img
                    src={user.image}
                    alt="no image"
                    height="100"
                    width="100"
                  />

                  <h1>{user.address}</h1>
                  <h1>{user.phone}</h1>

                  <Moment fromNow>{user.created_at.toDate()}</Moment>

                  <button
                    type="submit"
                    onClick={() => deleterequest(user.requestid)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </center>
    </div>
  );
};
export default Adminrequest;
