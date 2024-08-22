import React from "react";
import blogData from "../data/blog";
import About from "./About"
import ArticeleList from "./ArticleList"
import Header from "./Header";
import "../index.css"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}  />
      <ArticeleList posts={blogData.posts} />
    </div>
  );
}

export default App;
