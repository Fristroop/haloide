/* eslint-disable react/prop-types */

export const MagazineModal = ({ show, onHide, modal }) => {
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <img src={modal.banner} className="w-100 rounded" alt="" />
            </div>
            <div>
              <p
                className="magazine-desc"
                style={{ whiteSpace: "break-spaces" }}
              >
                {" "}
                {modal.description}
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-none justify-content-between mb-3">
              <button className="btn">
                <i className="fa-solid fa-share fs-5 me-1"></i>
              </button>
              <button className="btn">
                <i className="fa-solid fa-comment fs-5 me-1"></i>0
              </button>
              <button className="btn">
                <i className="fa-solid fa-thumbs-up fs-5 me-1"></i>0
              </button>
            </div>
            <a
              href={modal.file}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-lg w-100"
            >
              <i className="fa-solid fa-ghost me-2"></i>
              Simdi Indir ve Oku!
            </a>
            <p className="text-danger magazine-desc">
              <i className="fa-solid fa-warning me-1"></i>
              Butona bastığınızda yeni bir sayfaya yönlendireleceksiniz ve
              indirme otomatik başlayacak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
