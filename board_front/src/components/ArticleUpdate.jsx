import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ArticleUpdate = ({ articles, setArticles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((article) => article.postId === Number(id));

  const [title, setTitle] = useState(article ? article.title : "")
  const [content, setContent] = useState(article ? article.content : "");

  if (!article) return <p>게시글을 찾을 수 없습니다.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles(
      articles.map((a) =>
        a.postId === article.postId ? { ...a, title, content } : a
      )
    );
    navigate(`/article-detail/${article.postId}`);
  };

  return(
    <div>
      <h1>글 수정페이지</h1>
      <form onSubmit={handleSubmit}>
        <label>제목: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>내용: </label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default ArticleUpdate