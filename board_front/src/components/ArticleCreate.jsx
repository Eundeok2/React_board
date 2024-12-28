import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArticleCreate = ({ articles, setArticles }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(""); // 작성자 추가
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      postId: Date.now(),     // 게시글 번호 (고유 id)
      title: title,
      content: content,
      author: author,
      viewCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setArticles([...articles, newArticle]); // 기존 데이터에 추가
    navigate(`/article-detail/${newArticle.postId}`)   // 작성된 글의 상세 페이지로 이동
  }  

  return(
    <div>
      <h1>글 작성 페이지</h1>
      <form onSubmit={handleSubmit}>
        <label>작성자: </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <label>제목: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <label>내용: </label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <button type="submit">글 작성</button>
      </form>
    </div>
  );
};

export default ArticleCreate;