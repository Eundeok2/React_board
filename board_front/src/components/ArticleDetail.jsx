import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate(); // 페이지 이동을 위해 navigate 사용

  // 데이터 가져오기
  useEffect(() => {
    console.log("???????????????????????????????")
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
    <div>
      <h1>{article.title}</h1>
      <h3>작성자 : {article.author}</h3>
      <p>조회수 : {article.viewCount}</p>
      <p>작성 시간 : {article.createdAt}</p>
      <p>수정 시간 : {article.updatedAt}</p>
      <p>{article.content}</p>
      <Link to="/article-list" >목록으로</Link>
      <br />
      <Link to={`/article-update/${article.postId}`}>수정</Link>
      <br />
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default ArticleDetail