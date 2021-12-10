const { kStringMaxLength } = require("buffer");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_picture: { type: String, default: "https://res.cloudinary.com/dvyqlgdkr/image/upload/v1637283790/instagram-default-profile-picture-11562973083brycehrmyv_xsdory.png" },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

mongoose.model("User", userSchema);
