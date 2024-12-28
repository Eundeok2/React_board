import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";
import ArticleDetail from "./components/ArticleDetail";
import ArticleUpdate from "./components/ArticleUpdate";
import styles from './App.module.css';

const App = () => {
  // 게시글 데이터 상태 관리 (React state)
  const [articles, setArticles] = useState([]);


  return(
    <div className={styles.container}>
      <Router> 
        <nav>
          <Link to="/article-list">글 목록</Link>
        </nav>
        <Routes>
          <Route path="/article-list" element={<ArticleList articles={articles} />} />
          <Route path="/article-create" element={<ArticleCreate setArticles={setArticles} articles={articles}/>} />
          <Route path="/article-detail/:id" element={<ArticleDetail articles={articles} setArticles={setArticles} />} />
          <Route path="/article-update/:id" element={<ArticleUpdate articles={articles} setArticles={setArticles} />} />
        </Routes>
      </Router>
    </div>
  )
};


export default App;