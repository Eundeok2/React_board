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
      <div className={styles.formContainer}>
        <h1 className={styles.title}>글 작성 페이지</h1>
        <form onSubmit={handleSubmit} className={styles.formTag}>
          <div>
            <label htmlFor="author">작성자: </label>
            <input id="author" className={styles.input1} type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <br />
          <div>
            <label htmlFor="title">제목: </label>
            <input id="title" className={styles.input2} type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <br />
          <div>
            <label htmlFor="content">내용: </label>
            <textarea id="content" className={styles.input3} value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <br />
          <button className={styles.button} type="submit">작성</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleCreate;