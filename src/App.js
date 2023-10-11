import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import {  Route, Routes } from "react-router-dom";
// import Posts from "./Posts";
// import PostLayout from "./PostLayout";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import api from "./api/Posts";
import Edit from "./Edit";

import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      .
      <DataProvider>
        <Header title={"Hacker"} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
          </Route>
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
