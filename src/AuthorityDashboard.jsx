import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import IssuesPage from './pages/IssuesPage';
import AuthorityPage from './pages/AuthorityPage';
import './AuthorityDashboard.css'

const App = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <Header />
        <Routes>
          <Route path="/" element={<IssuesPage />} />
          <Route path="/announcements" element={<AuthorityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
