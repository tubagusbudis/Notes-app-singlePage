import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils/index";
import { FiTrash2, FiArchive, FiInbox } from "react-icons/fi";
import { HiArrowLeftCircle } from "react-icons/hi2";

function DetailPageWrapper(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage {...props} id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  render() {
    const { notes, onDelete, onArchive, id, navigate } = this.props;
    const note = notes.find((note) => note.id === id);

    if (!note) {
      return <p>Catatan tidak ditemukan!</p>;
    }

    const handleDelete = () => {
      onDelete(id);
      navigate(note.archived ? "/archives" : "/");
    };

    const handleArchive = () => {
      onArchive(id);
      navigate("/");
    };

    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{note.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="detail-page__body">{note.body}</div>
        <div className="detail-page__action">
          <button className="action" onClick={() => navigate(-1)} title="Kembali">
            <HiArrowLeftCircle />
          </button>
          <button
            className="action"
            onClick={handleArchive}
            title={note.archived ? "Aktifkan" : "Arsipkan"}
          >
            {note.archived ? <FiInbox /> : <FiArchive />}
          </button>
          <button className="action" onClick={handleDelete} title="Hapus">
            <FiTrash2 />
          </button>
        </div>
      </section>
    );
  }
}

export default DetailPageWrapper;
