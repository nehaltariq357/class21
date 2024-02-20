import React, { useState } from "react";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = (username) => {
    setCurrentUser(username);
  };

  return (
    <div>
      {currentUser ? (
        <Dashboard currentUser={currentUser} />
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;
