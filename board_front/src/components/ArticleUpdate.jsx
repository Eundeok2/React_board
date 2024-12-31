import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/ArticleUpdate.module.css"


const ArticleUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({});

  // 데이터 가져오기
  useEffect(() => {
    axios.get(`http://localhost:8080/react-board/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.log(err))
  },[id])

  useEffect(() => {
    if (article) {
      setTitle(article.title || "");
      setContent(article.content || "");
    }
  }, [article]);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/react-board/${id}`, {
      title: title,
      content: content
    })

    navigate(`/article-detail/${article.postId}`);
  };

  if (!article) return <p>게시글을 찾을 수 없습니다.</p>;

  return(
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>글 수정페이지</h1>
        <form className={styles.formTag} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목: </label>
            <input id="title" className={styles.input1} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <br />
          <div>
            <label htmlFor="content">내용: </label>
            <textarea id="content" className={styles.input2} value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <br />
          <button className={styles.button} type="submit">수정</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleUpdate