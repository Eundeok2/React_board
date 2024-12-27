import React from "react";
import {Link } from "react-router-dom"; 
import ArticleCreate from "./ArticleCreate";

const ArticleList = () => {
  return(
    <div>
      <h1>전체 글 목록</h1>
        <h3>
          <Link to="/article-create">글 작성</Link>
        </h3>
    </div>
  );
};


export default ArticleList;