import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import IssueList from './pages/IssuesList';
import DetailIssue from './pages/DetailIssue';
import NotFoundError from './pages/NotFoundError';
import HeaderLayout from './pages/HeaderLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/facebook/react/issues" />} />
        <Route path="/" element={<HeaderLayout />}>
          <Route path="facebook/react/issues" element={<IssueList />} />
          <Route path="facebook/react/issues/:id" element={<DetailIssue />} />
        </Route>
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
}
