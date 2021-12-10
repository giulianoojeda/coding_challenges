import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    if (url) {
      UploadFields();
    }
  }, [url]);

  const UploadPicture = () => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UploadFields = () => {
    //Regex to check if email is valid
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        profile_picture: url,
      }),
    }) //fetch
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "green darken-1" });
          history.push("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  const PostData = () => {
    if (image) {
      UploadPicture();
    } else {
      UploadFields();
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Profile Picture</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          className=" btn btn-primary #64b5f6 blue darken-1"
          onClick={() => PostData()}
        >
          Sign UP
        </button>
        <h5>
          <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;