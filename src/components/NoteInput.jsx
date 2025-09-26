import React, { useState } from "react";
import { HiCheckBadge } from "react-icons/hi2";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState({ title: event.target.innerText });
  }

  onBodyChangeHandler(event) {
    this.setState({ body: event.target.innerText });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.onSubmitHandler}>
        <div
          className="add-new-page__input__title"
          contentEditable="true"
          data-placeholder="Buat judul catatan ..."
          onInput={this.onTitleChangeHandler}
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Tuliskan catatanmu di sini ..."
          onInput={this.onBodyChangeHandler}
        />
        <div className="add-new-page__action">
          <button className="action" type="submit" title="Simpan Catatan">
            <HiCheckBadge />
          </button>
        </div>
      </form>
    );
  }
}


export default NoteInput;
