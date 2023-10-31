/* eslint-disable react/prop-types */
import { useState } from "react";
import { MagTable } from "./dashboard/MagTable";
import { MagModal } from "./dashboard/MagModal";

export const Magazines = ({ data }) => {
  const [display, setDisplay] = useState([false, null]);

  return (
    <>
      <div className="col-md-12 bg-dark-subtle rounded p-3">
        <div className="d-flex justify-content-between border-bottom p-2">
          <div className="d-flex align-items-center mb-3">
            <h5>
              Dergiler <small className="text-muted">0</small>
            </h5>
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={() => setDisplay([true, null])}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        {/** TABLE */}
        <MagTable data={data} setDisplay={setDisplay} />
      </div>

      {/** Modal */}
      <MagModal data={data} display={display} setDisplay={setDisplay} />
    </>
  );
};
