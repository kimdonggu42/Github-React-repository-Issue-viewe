import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssueList from './pages/IssuesList';
import DetailIssue from './pages/DetailIssue';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path="/issues/:id" element={<DetailIssue />} />
      </Routes>
    </BrowserRouter>
  );
}
