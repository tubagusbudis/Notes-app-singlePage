import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import { getAllNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/local-data';
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
    };

    // Binding 'this' untuk setiap handler
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getAllNotes() });
  }

  onArchiveHandler(id) {
    const note = this.state.notes.find((note) => note.id === id);
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    this.setState({ notes: getAllNotes() });
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    this.setState({ notes: getAllNotes() });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <header>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <nav className="navigation">
              <ul>
                <li><Link to="/archives">Arsip</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
              <Route path="/archives" element={<ArchivePage notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
              <Route path="/notes/new" element={<AddPage onAddNote={this.onAddNoteHandler} />} />
              <Route path="/notes/:id" element={<DetailPage notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
