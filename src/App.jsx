import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar/NavBar";
import UserProfile from "./Components/UserProfile/UserProfile";
import Posts from "./Components/Post/Posts";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return(
    <>
    <main>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </main>
    </>
  )
}

export default App;
