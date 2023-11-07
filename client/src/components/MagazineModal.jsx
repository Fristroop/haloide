/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const MagazineModal = ({ show, modal }) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={{ backgroundColor: "" }}>
          <div className="modal-header">
            <h4 className="modal-title fw-bold">{modal.title}</h4>
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-primary d-flex align-items-center"
                onClick={() =>
                  navigator.clipboard.writeText(location.href) &&
                  alert("Copied share link!")
                }
              >
                <i className="fa-solid fa-share-from-square fs-5 me-2"></i>
                Paylaş
              </button>
              <Link className="btn-close" to={"/"}></Link>
            </div>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <img src={modal.banner} className="w-100 rounded" alt="" />
            </div>
            <div>
              <p className="normal" style={{ whiteSpace: "break-spaces" }}>
                {modal.description}
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <div className="justify-content-between mb-3"></div>
            <a
              href={modal.file}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success w-100"
            >
              Dergiyi İndir
            </a>
            <p className="text-danger normal">
              <i className="fa-solid fa-warning me-1"></i>
              Butona bastığınızda yeni bir sayfaya yönlendireleceksiniz ve
              indirme otomatik olarak başlayacak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
