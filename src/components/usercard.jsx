import React from "react";
import "./Usercard.css";

const Usercard = () => {
  const profilePhoto =
    "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250";
  const name = "Avishkar";
  const email = "avishkar@example.com";
  const phone = "+91 1234567890";
  const address = "Kalvium MIT";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="name">{name}</h2>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
      <p className="address">{address}</p>
    </div>
  );
};

export default Usercard;
