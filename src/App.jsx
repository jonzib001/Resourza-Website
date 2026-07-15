import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SubjectMarketplace from './Pages/SubjectMarketplace';
import TopicalPastPapers from './Pages/TopicalPastPapers';
import Components from './Pages/Components';
import Topics from './Pages/Topics';
import MockPapers from './Pages/MockPapers';
import BoardSelection from './Pages/BoardSelection';
import TopicalNotes from './Pages/TopicalNotes';
import NotesLevelSelection from './Pages/NotesLevelSelection';
import ScrollToTop from './SharedComponents/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/board/:boardId" element={<SubjectMarketplace />} />
        <Route path="/topical/:boardId" element={<TopicalPastPapers />} />
        <Route path="/topical/:boardId/:subjectId" element={<Components />} />

        <Route path="/topical/:boardId/:subjectId/:componentId" element={<Topics />} />

        <Route path="/notes/:boardId" element={<TopicalNotes />} />
        <Route path="/notes/:boardId/:subjectId" element={<NotesLevelSelection />} />
        <Route path="/mock-papers" element={<MockPapers />} />
        <Route path="/boards/:examBoardId" element={<BoardSelection />} />
      </Routes>
    </Router>
  );
}

export default App;