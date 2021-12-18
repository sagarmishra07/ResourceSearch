import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Adminnavbar from "../Components/Navbar/Adminnavbar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Request from "../Components/Userdashboard/Request";
import Adminrequest from "../Components/Admindashboard/Adminrequest";
const Admindashboard = ({ userdata }) => {
  const history = useHistory;
  const [data, setData] = useState([]);

  useEffect(async () => {
    const unsubscribe = await db
      .collection("users")
      .where("status", "!=", "Admin")

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
      <div
      // style={{
      //   border: "1px solid ",
      //   marginLeft: "36em",
      //   marginRight: "36em",
      //   boxShadow: " 10px 10px 20px #1a1b1d",
      // }}
      />
      <div>
        <section>
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome {userdata.name}</h1>

            <h1 style={{ textAlign: "center" }}>
              Service Providers:{data.length}
            </h1>
          </div>
        </section>

        <h1 style={{ textAlign: "center" }}>All Users</h1>
        <div>
          {data
            .filter((val) => {
              if (val.status != "Admin") {
                return val;
              }
            })
            .map((val) => {
              return (
                <div
                  style={{ paddingLeft: "700px", marginTop: "50px" }}
                  key={val.uid}
                >
                  <tr>
                    <tr style={{ paddingBottom: "10px" }}>
                      <td>Name: {val.name}</td>
                    </tr>
                    <tr style={{ paddingBottom: "10px" }}>
                      <td>Email: {val.email}</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <Link to={`/userprofile/${val.uid}`}>
                          {" "}
                          <button style={{ marginBottom: "10px" }}>
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr style={{ paddingBottom: "10px" }}>
                      <td>
                        <button
                          style={{ marginBottom: "10px" }}
                          onClick={() => DeleteUser(val.uid)}
                        >
                          Delete User
                        </button>
                        <div>
                          <Adminrequest userdata={val.uid} />
                        </div>
                      </td>
                    </tr>
                  </tr>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
