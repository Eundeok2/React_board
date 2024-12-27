import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";
import ArticleDetail from "./components/ArticleDetail";
import ArticleUpdate from "./components/ArticleUpdate";

const App = () => {



  return(
    <Router> 
      <nav>
        <Link to="/article-list">글 목록</Link>
      </nav>
      <Routes>
        <Route path="/article-list" element={<ArticleList />} />
        <Route path="/article-create" element={<ArticleCreate />} />
        <Route path="/article-detail/:id" element={<ArticleDetail />} />
        <Route path="/article-update/:id" element={<ArticleUpdate />} />
      </Routes>
    </Router>

  )
  
};


export default App;