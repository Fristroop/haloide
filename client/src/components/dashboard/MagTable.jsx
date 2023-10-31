/* eslint-disable react/prop-types */
export const MagTable = ({ data, setDisplay }) => {
  return (
    <div className="table-responsive mb-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th scope="col">Başlık</th>
            <th scope="col">Dergi Kategorisi</th>
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
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setDisplay([true, m])}
                  >
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
