import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [myprofile, setMyprofile] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("/myposts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyprofile(data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone-gio");
      data.append("cloud_name", "dvyqlgdkr");

      fetch("https://api.cloudinary.com/v1_1/dvyqlgdkr/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          fetch("/updateprofilepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              profile_picture: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                "user",
                JSON.stringify({
                  ...state,
                  profile_picture: result.profile_picture,
                })
              );
              dispatch({
                type: "UPDATE_PROFILE_PICTURE",
                payload: result.profile_picture,
              });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const updatePhoto = (file) => {
    setImage(file);
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{ width: "160px", height: "160px", borderRadius: "80px" }}
              src={state ? state.profile_picture : "loading"}
            />
            
          </div>
          <div>
            <h4>{state ? state.name : "Loading"}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h6 style={{ width: "40%" }}>{myprofile.length} posts</h6>
              <h6 style={{ width: "40%" }}>
                {state ? state.followers.length : "0"} followers
              </h6>
              <h6 style={{ width: "40%" }}>
                {state ? state.following.length : "0"} following
              </h6>
            </div>
          </div>
        </div>
        <div className="file-field input-field" style={{ margin: "10px" }}>
          <div className="btn #64b5f6 blue darken-1">
            <span style={{ color: "white" }}>Update Picture</span>
            <input
              type="file"
              onChange={(e) => {
                updatePhoto(e.target.files[0]);
              }}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>
      <div className="gallery">
        {myprofile.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
