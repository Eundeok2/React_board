import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./styles/ArticleDetail.module.css"

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate(); // 페이지 이동을 위해 navigate 사용

  // 데이터 가져오기
  useEffect(() => {
    axios.get(`http://localhost:8080/react-board/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.log(err))
  },[id])

  // 삭제 핸들러
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/react-board/${id}`)
      .then(() => navigate("/article-list")) // 삭제 후 목록 페이지로 이동
      .catch(err => console.log(err));
  };


  if (!article) return <h3>게시글을 찾을 수 없습니다.</h3>; 


  return(
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.info}>
            <p>조회수 : {article.viewCount}</p>
            <p>작성자 : {article.author}</p>
          </div>
        </div>
        <hr />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p>
              {article.content}
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.info2}>
          <p>
            작성 시간 : {article.createdAt 
              ? article.createdAt.replace(/(\d{4})-(\d{2})-(\d{2})T.*/, "$1년 $2월 $3일") 
              : "정보 없음"}
          </p>
          <div className={styles.info3}>
            <Link className={styles.link} to="/article-list" >목록으로</Link>
            <Link className={styles.link} to={`/article-update/${article.postId}`}>수정</Link>
            <button className={styles.button} onClick={handleDelete}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail