import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Theme } from "../components/Theme";

export const Contact = () => {
  const submit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    window.open(
      `mailto:haloidergisipau@gmail.com?subject=${data.get(
        "subject"
      )}&body=${data.get("body")}`
    );
  };

  return (
    <div>
      <Theme />
      <Navbar />

      <div className="container mt-5 normal">
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center">İletişim</h1>
            <h6 className="mb-4">
              Bir sorunuz ya da öneriniz mi var? Bizimle iletişime geçin!
              Aşağıdaki iletişim bilgilerini kullanarak çekinmeden bize ulaşın
              veya formu kullanarak mail gönderin.
            </h6>
            <hr />

            <div className="mb-5"></div>
            <div className="mb-5 d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/haloidergisi/"
                className="btn fs-4 ig"
              >
                <i className="fa-brands fa-instagram"></i>
                <br />
                <div className="fs-6">@haloidergisi</div>
              </a>
              <a
                href="mailto:haloidergisipau@gmail.com"
                className="btn fs-4 ig"
              >
                <i className="fa-solid fa-envelope"></i>
                <br />
                <div className="fs-6">halo ide</div>
              </a>
            </div>
            <hr />
            <div className="my-5 normal">
              <h4 className="mb-3 text-center">İletişim formu</h4>
              <form action="" className="row g-3" onSubmit={submit}>
                <div className="col-12 mb-3">
                  <label htmlFor="">Konu</label>
                  <select name="subject" id="" className="form-control">
                    <option>Bir önerim var</option>
                    <option>Hata bildirmek istiyorum</option>
                    <option>Farklı bir konu</option>
                  </select>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="">Mesajınız</label>
                  <textarea
                    className="form-control"
                    name="body"
                    cols="30"
                    rows="5"
                    required
                    minLength={30}
                  ></textarea>
                </div>
                <div className="col-md-12 mb-3">
                  <button type="submit" className="btn btn-success w-100">
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
