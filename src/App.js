import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { currentUserContext } from "./contexts/CurrenteUserContext";

import Home from './components/pages/Home';
import UserBlog from './components/pages/UserBlog';
import Users from './components/pages/Users';
import UserPostForm from "./components/pages/UserPostForm";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <currentUserContext.Provider value= { {currentUser, setCurrentUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/users/:userId" element={<UserBlog />}/>
        <Route path="/users/:userId/post" element={<UserPostForm />}/>

      </Routes>

    </BrowserRouter>
    </currentUserContext.Provider>
  )

}

export default App;
