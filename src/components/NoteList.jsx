import React from "react";
import NoteItem from "./NoteItem";

class NoteList extends React.Component {
  render() {
    const { notes, onDelete, onArchive, emptyMessage } = this.props;
    if (!notes.length) {
      return (
        <section className="notes-list-empty">
          <p className="notes-list__empty">
            {emptyMessage || "Tidak ada catatan aktif"}
          </p>
        </section>
      );
    }
    return (
      <section className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </section>
    );
  }
}


export default NoteList;