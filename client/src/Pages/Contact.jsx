import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center">İletişim</h1>
            <h6 className="mb-4">
              Bir sorunuz ya da öneriniz mi var? Bizimle iletişime geçin!
              Aşağıdaki iletişim bilgilerini kullanarak çekinmeden bize ulaşın
              veya formu kullanarak mesaj gönderin.
            </h6>
            <hr />

            <div className="mb-5"></div>
            <div className="mb-5 d-flex justify-content-center gap-3     flex-wrap">
              <a
                href="https://www.instagram.com/haloidergisi/"
                className="btn fs-4"
              >
                <i className="fa-brands fa-instagram"></i>
                <br />
                <div className="fs-6">@haloidergisi</div>
              </a>
            </div>
            <hr />
            <div className="my-5">
              <h4 className="mb-3 text-center">İletişim formu</h4>
              <form action="" className="row g-3" onSubmit={submit}>
                <div className="col-md-6 form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="null"
                    required
                  />
                  <label htmlFor="floatingInput">İsim</label>
                </div>
                <div className="col-md-6 form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="null"
                    required
                  />
                  <label htmlFor="floatingInput">E-posta</label>
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    cols="30"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 mb-3">
                  <button className="btn btn-success w-100" disabled>
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
