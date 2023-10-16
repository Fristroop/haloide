/* eslint-disable react/prop-types */
import axios from "axios";
import { API } from "../config";

export const Categories = ({ data }) => {
  const createCat = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    for (const [key, val] of data) {
      console.log(key, val);
    }

    const res = await axios.post(API + "/categories", data, {
      withCredentials: true,
    });

    console.log(res);

    location.reload();
  };

  const deleteCat = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(API + "/categories/" + id);
      console.log(res);
      location.reload();
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  if (!data) return <>Loading....</>;
  return (
    <>
      <div className="col-md-12 bg-dark-subtle rounded p-3">
        <div className="d-flex justify-content-between border-bottom p-2 mb-3">
          <div className="d-flex align-items-center">
            <h5>
              Kategoriler{" "}
              <small className="text-muted ms-1">{data.length}</small>
            </h5>
          </div>
          <div>
            <button
              className="btn btn-success btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#createCatModal"
              aria-hidden="true"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="table-responsive mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Başlık</th>
                <th scope="col">Dergi Sayısı</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <th scope="row">{(i += 1)}</th>
                  <td>{d.title}</td>
                  <td>{d.magazines.length}</td>
                  <td>
                    <button className="btn btn-secondary btn-sm">
                      <i className="fa-solid fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCat(d.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/** Modal */}
      <div
        className="modal fade"
        id="createCatModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Yeni bir kategori oluştur!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={createCat}>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Kategori İsmi
                  </label>
                  <input type="text" className="form-control" name="title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="id" className="form-label">
                    Kategori Açıklaması
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Oluştur
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
