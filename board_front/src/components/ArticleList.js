import React from "react";
import {Link } from "react-router-dom"; 

const ArticleList = ({ articles }) => {
  return(
    <div>
      <h1>전체 게시글 목록</h1>
        <h3>
          <Link to="/article-create">글 작성</Link>
        </h3>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/article-detail/${article.postId}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
};


export default ArticleList;