import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const ArticleDetail = ({ articles, setArticles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.postId === Number(id));
  const navigate = useNavigate(); // 페이지 이동을 위해 navigate 사용

  if (!article) return <h3>게시글을 찾을 수 없습니다.</h3>;

  // 삭제 핸들로
  const handleDelete = () => {
    // 삭제할 게시글을 제외한 새로운 배열로 설정
    const updateArticles = articles.filter((article) => article.postId !== Number(id));
    setArticles(updateArticles) // 부모 컴포넌트에서 articles 상태를 업데이트

    // 삭제 후 목록 페이지로 이동
    navigate("/article-list")
  }


  return(
    <div>
      <h1>{article.title}</h1>
      <h3>작성자 : {article.author}</h3>
      <p>조회수 : {article.viewContent}</p>
      <p>작성 시간 : {article.createdAt.toLocaleDateString()}</p>
      <p>수정 시간 : {article.updatedAt.toLocaleDateString()}</p>
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