import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom"; 
import styles from "./styles/ArticleList.module.css"
import axios from "axios";

const ArticleList = () => {
  // 게시글 데이터 상태 관리 (React state)
  const [articles, setArticles] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    axios.get("http://localhost:8080/react-board/articles")
      .then(res => setArticles(res.data))
      .catch(err => console.log(err))
  },[])

  return(
    <div className={styles.container}>
      <h1 className={styles.listTitle}>전체 게시글 목록</h1>
        <h3 className={styles.createTag}>
          <Link to="/article-create">글 작성</Link>
        </h3>
        <ul className={styles.ulTag}>
          {articles.map((article, index) => (
            <>
              <li key={article.id} className={styles.liTag}>
                <span>No. {index + 1} | </span>
                <Link to={`/article-detail/${article.postId}`}>{article.title}</Link>
                <span>작성자 : {article.author} &nbsp;| &nbsp;조회수 : {article.viewCount}</span>
              </li>
              <hr />
            </>
          ))}
        </ul>
    </div>
  );
};


export default ArticleList;