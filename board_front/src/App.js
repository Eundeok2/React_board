import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";

const App = () => (
  <Router>
    <nav>
      <Link to="/article-list">글 목록</Link>
    </nav>
    <Routes>
      <Route path="/article-list" element={<ArticleList />} />
      <Route path="/article-create" element={<ArticleCreate />} />
    </Routes>
  </Router>
);


export default App;