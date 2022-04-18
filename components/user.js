import React from "react";

function User({ user }) {
  return (
    <div>
      <p>
        {"name: " + user.name} {"email: " + user.email}
      </p>
    </div>
  );
}

export default User;
