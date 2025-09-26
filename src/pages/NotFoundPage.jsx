import React from "react";
import {Link} from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <section>
        <h2>404 - Halaman Tidak Ditemukan</h2>
        <p>Maaf, halaman yang Anda cari tidak ada.</p>
        <Link to="/">Kembali ke Beranda</Link>
      </section>
    );
  }
}

export default NotFoundPage;