import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArticleList from "./components/ArticleList";

const App = () => (
  <Router>
    <nav>
      <Link to="/article-list">글 목록</Link>
    </nav>
    <Routes>
      <Route path="/article-list" element={<ArticleList />} />
    </Routes>
  </Router>
);


export default App;