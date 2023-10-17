export const Loader = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-dark-subtle"
      style={{ height: "100vh" }}
    >
      <div className="spinner-border fs-1" role="status" style={{width: "50px", height: "50px"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
