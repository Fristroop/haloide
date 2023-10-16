import axios from "axios";

import { API } from "../config";
import "../assets/styles/Login.css";

export const Register = () => {
  const login = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const res = await axios.post(API + "/users/register", "post", data);
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
      <div className="col-md-6 p-4 rounded text-center bg-dark-subtle">
        <h3>Halo&apos;ya kayıt ol!</h3>
        <hr />
        <form onSubmit={login}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="username"
              required
            />
            <label htmlFor="floatingInput">Kullanıcı Adı</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
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
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Kayıt Ol
            </button>
          </div>
          <hr />
          <div className="mb-3 text-center">
            <p>
              Hesabını zaten oluşturduysan
              <a href="/login" className="ms-2">
                Giriş yap!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
