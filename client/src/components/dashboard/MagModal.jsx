/* eslint-disable react/prop-types */
import axios from "axios";
import { API, CDN } from "../../config";
import { useState } from "react";

export const MagModal = ({ display, setDisplay, data }) => {
  const [loading, setLoading] = useState(false);

  const mag = display[1];
  console.log(mag);

  const deleteMag = async (id) => {
    const ok = confirm("Bu dergiyi gerçekten silmek istiyor musun?");
    if (!ok) return;
    const res = await axios.delete(API + "/magazines/" + id);
    console.log(res);
    location.reload();
  };

  const createMagazine = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    for (const [key, val] of data) {
      console.log(key, val);
    }

    setLoading(true);

    try {
      const res = await axios[mag ? "put" : "post"](
        API + `/magazines/${mag?.id || ""}`,
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      location.reload();
    } catch (error) {
      alert("an error occured");
      console.error(error);
    }

    setLoading(false);
  };

  const convertURL = (str) => {
    if (!str) return "";
    return str.replace("download/storage/v1/b/halodergisi/o", "halodergisi");
  };

  const banner = mag ? (
    <>
      <br />
      <a
        href={convertURL(CDN + mag?.thumbnail)}
        target="_blank"
        rel="noreferrer"
      >
        Kapak fotoğrafını yeni sekmede göster.
      </a>
    </>
  ) : null;

  const file = mag ? (
    <>
      <br />
      <a href={convertURL(CDN + mag?.file)} target="_blank" rel="noreferrer">
        Dergiyi yeni sekmede göster.
      </a>
    </>
  ) : null;

  const info = mag ? (
    <>
      <br />
      <small className="text-danger">
        <i className="fa-solid fa-warning me-2"></i>
        Düzenleme yaparken kategori görünmez eğer değiştirmek istemiyorsanız boş
        bırakınız.
        <br />
        Kategori Id: {mag.catId}
      </small>
    </>
  ) : null;

  const loader = loading ? (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : null;

  return (
    <div
      className={`modal ${display[0] ? "d-block show" : "d-none"}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {!mag ? "Yeni bir dergi oluştur!" : "Bir dergiyi düzenle!"}
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={() => setDisplay([false, null])}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={createMagazine}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Dergi Kategorisi
                  {info}
                </label>
                <select
                  className="form-control"
                  name="catId"
                  defaultValue="null"
                  required
                >
                  <option value="null" disabled>
                    Lütfen bir seçim yapınız!
                  </option>
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
                  defaultValue={mag?.title}
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
                  defaultValue={mag?.description || ""}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Dergi Kapak Fotoğrafı (IMG/* ){banner}
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
                  {file}
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="form-control"
                  name="file"
                />
              </div>

              <button
                type="submit"
                className={`btn w-100 btn-success mb-5`}
                disabled={loading}
              >
                {loader || !mag ? "Oluştur" : "Düzenle"}
              </button>
            </form>

            <div className={mag ? "d-block" : "d-none" + " mb-5"}>
              <h5 className="mb-3 text-center">Bu işlem geri alınamaz!!!</h5>
              <button
                className="btn btn-danger w-100"
                onClick={() => deleteMag(mag.id)}
              >
                Bu öğeyi kalıcı olarak sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
