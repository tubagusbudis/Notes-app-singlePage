import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";

class NoteItem extends React.Component {
  render() {
    const { id, title, createdAt, body } = this.props;
    return (
      <article className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__title">
            <Link to={`/notes/${id}`}>{title}</Link>
          </h3>
          <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
      </article>
    );
  }
}

export default NoteItem;
