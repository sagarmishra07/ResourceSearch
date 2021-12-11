import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Adminnavbar from "../Components/Navbar/Adminnavbar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Admindashboard = ({ userdata }) => {
  const history = useHistory;
  const [data, setData] = useState([]);

  useEffect(async () => {
    const unsubscribe = await db
      .collection("users")

      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));

        setData(data);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const DeleteUser = (id) => {
    try {
      db.collection("users").doc(id).delete();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <>
      <Adminnavbar />
      <div>
        <section className="jobs">
          <div>
            <h1>Welcome {userdata.name}</h1>
            <img src={userdata.image} height="300" width="200" alt="" />

            <h1>Service Providers:{data.length}</h1>
          </div>
        </section>

        <h1>All Users</h1>
        <table id="customers">
          {data
            .filter((val) => {
              if (val.status != "Admin") {
                return val;
              }
            })
            .map((val) => {
              return (
                <div key={val.uid}>
                  <tr>
                    <td>Name : {val.name}</td>
                    <td>Email: {val.email}</td>
                    <td>
                      {" "}
                      <Link to={`/userprofile/${val.uid}`}>
                        {" "}
                        <button>View Details</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => DeleteUser(val.uid)}>
                        Delete User
                      </button>
                    </td>
                  </tr>
                </div>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default Admindashboard;
