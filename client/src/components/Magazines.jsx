/* eslint-disable react/prop-types */
import axios from "axios";
import { API } from "../config";
import { useState } from "react";

export const Magazines = ({ data }) => {
  const [disBtn, setDisBtn] = useState(false);

  const createMagazine = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    for (const [key, val] of data) {
      console.log(key, val);
    }
    setDisBtn(true);
    const res = await axios.post(API + "/magazines", data, {
      withCredentials: true,
    });
    setDisBtn(false);
    console.log(res);
    location.reload();
  };

  const deleteMag = async (id) => {
    const ok = confirm("Bu dergiyi gerçekten silmek istiyor musun?");
    if (!ok) return;
    const res = await axios.delete(API + "/magazines/" + id);
    console.log(res);
    location.reload();
  };

  return (
    <>
      <div className="col-md-12 bg-dark-subtle rounded p-3">
        <div className="d-flex justify-content-between border-bottom p-2">
          <div className="d-flex align-items-center">
            <h5>
              Dergiler <small className="text-muted ms-1">0</small>
            </h5>
          </div>
          <div>
            <button
              className="btn btn-success btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#createMagazineModal"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        {/** TABLE */}
        <div className="table-responsive mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">Dergi Kategorisi</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {data.map((cat) =>
                cat.magazines.map((m, i) => (
                  <tr key={i}>
                    <td>{(i += 1)}</td>
                    <td>
                      <img src={m.banner} height={"30px"} alt="" />
                    </td>
                    <td>{m.title}</td>
                    <td>{m.catId.substr(0, 10) + "..."}</td>
                    <td>
                      <a
                        href={m.file}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </td>
                    <td>
                      <button className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteMag(m.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/** Modal */}
      <div id="createMagazineModal" className={`modal fade`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Yeni bir dergi oluştur!
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={createMagazine}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Dergi Kategorisi
                  </label>
                  <select
                    className="form-control"
                    name="catId"
                    required
                  >
                    {data.map((d, i) => (
                      <option key={i} value={d.id}>
                        {d.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Dergi Başlığı
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Dergi Açıklaması
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    rows={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Dergi Kapak Fotoğrafı (IMG/* )
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    name="banner"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Dergi Dosyası (PDF)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="form-control"
                    name="file"
                  />
                </div>
                <button type="submit" className={`btn w-100 btn-success`} disabled={disBtn}>
                  {disBtn ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Oluştur"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
