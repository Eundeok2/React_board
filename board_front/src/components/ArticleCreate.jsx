import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles/ArticleCreate.module.css"

const ArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(""); // 작성자 추가
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title: title,
      content: content,
      author: author,
    };

    axios.post("http://localhost:8080/react-board", newArticle)
    .then(() => {
      navigate("/article-list");
    })
    .catch(err => console.log(err));
  }  

  return(
    <div className={styles.container}>
      <h1>글 작성 페이지</h1>
      <form onSubmit={handleSubmit} className={styles.formTag}>
        <div>
          <label>작성자: </label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <br />
        <div>
          <label>제목: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>내용: </label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <br />
        <button type="submit">글 작성</button>
      </form>
    </div>
  );
};

export default ArticleCreate;