/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SearchModal = ({ data = [] }) => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    setMagazines(data);
  }, [data]);

  const handleSearch = (e) => {
    const val = e.target.value.toLowerCase();
    const found = data.filter((a) => a.title.toLowerCase().includes(val));
    setMagazines(found);
  };

  return (
    <>
      <div
        className="modal fade normal"
        id="searchModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Dergiler Arasında Arama Yap
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="fa-solid fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Dergilerde Ara"
                  onChange={handleSearch}
                />
              </div>

              <ul className="list-group table-striped">
                {(magazines.length > 0 &&
                  magazines.map((m, i) => (
                    <Link
                      key={i}
                      to={`/?mId=${m.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      {m.title}
                    </Link>
                  ))) || <div>Uygun sonuç bulunamadı!</div>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
