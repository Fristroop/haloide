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
            <h4 className="modal-title  text-white fw-bold">{modal.title}</h4>
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
              <img
                src={modal.banner}
                className="w-100 rounded"
                alt=""
              />
            </div>
            <div>
              <p style={{ whiteSpace: "break-spaces" }}> {modal.description}</p>
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
              className="btn btn-success w-100"
            >
              Şimdi İndir ve Oku!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
