import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import { set } from "mongoose";

const Profile = () => {
  const [userProfile, setProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  const [showFollow, setShowFollow] = useState(
    state ? !state.following.includes(userid) : true
  );

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      });
  }, []);

  // @function followUser
  // @desc Follow a user
  // @param {string} userid
  const followUser = (userid) => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [...prevState.user.followers, data._id],
            },
          };
        });
        setShowFollow(false);
      })
      .catch((err) => console.log(err));
  };

  // @function unfollowUser
  // @desc Unfollow a user
  // @param {string} userid
  const unfollowUser = (userid) => {
    fetch("/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        unfollowId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          const newFollower = prevState.user.followers.filter(
            (item) => item !== data._id
          );
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower,
            },
          };
        });
        setShowFollow(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {userProfile ? (
        <div
          style={{
            maxWidth: "550px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                src={userProfile?.user.profile_picture}
                alt=""
              />
            </div>
            <div>
              <h4>{userProfile?.user.name}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h6>{userProfile?.posts.length} posts</h6>
                <h6>{userProfile?.user.followers.length} followers</h6>
                <h6>{userProfile?.user.following.length} following</h6>
                {showFollow ? (
                  <button onClick={() => followUser(userProfile.user._id)}>
                    Follow
                  </button>
                ) : (
                  <button onClick={() => unfollowUser(userProfile.user._id)}>
                    Unfollow
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="gallery">
            {userProfile?.posts.map((item) => {
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
      ) : (
        <h2>Loading...!</h2>
      )}
    </>
  );
};

export default Profile;
