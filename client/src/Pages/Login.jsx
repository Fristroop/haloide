import axios from "axios";
import { API } from "../config";

export const Login = () => {
  const login = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const res = await axios.post(API + "/users/login", data, {
        withCredentials: true,
      });

      console.log(res);
      return location.replace("/dashboard");
    } catch (error) {
      alert("Something went wrong see console for detailed informations!");
      console.log(error);
    }
  };

  return (
    <div
      className="login d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-5 p-4 rounded text-center bg-dark-subtle">
        <h4>Halo&apos;ya tekrardan hoşgeldin!</h4>
        <hr />
        <form onSubmit={login}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="username"
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              required
            />
            <label htmlFor="floatingPassword">Şifre</label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success w-100">
              Giriş Yap
            </button>
          </div>
          <hr />
          <div className="mb-3 text-center">
            <p>
              Bir hesabın yok mu?
              <a href="/register" className="ms-2">
                Şimdi kaydol!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
