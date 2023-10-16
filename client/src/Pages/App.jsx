/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/App.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MagazineModal } from "../components/MagazineModal";
import axios from "axios";
import { API } from "../config";

//${d.title.replace(/\s/g, "")}
export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({});
  const [data, setData] = useState(null);

  const handleButtonClick = (modal) => {
    setModal(modal);
    setShowModal(true);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(API + "/categories");
        console.log(res);
        setData(res.data);
      } catch (error) {
        alert("Bir hata oluştu!");
        console.error(error);
      }
    };
    fetch();
  }, []);

  if (!data) return <>Loading...</>;

  return (
    <>
      <Navbar />

      <div className="main container mt-5">
        <div className="banner mb-3">
          <img
            src="https://haloedebiyat.files.wordpress.com/2023/03/halo-e1682951997831.png"
            alt=""
            className="rounded"
          />
          <div className="title">
            Halo: Aylık Fikir, Sanat ve Edebiyat Dergisi
            <hr className="w-50 d-flex mx-auto" />
          </div>
        </div>

        <div className="px-3 mb-3">
          {data.map((e, i) => (
            <div className="mb-5" key={i}>
              <h3>{e.title}</h3>
              <hr className="border-3" />
              <div className="magazines d-flex overflow-auto gap-3">
                {e.magazines.map((d, i) => (
                  <div key={i}>
                    <button
                      className="card p-0 border-0 text-bg-dark"
                      onClick={() => handleButtonClick(d)}
                    >
                      <img src={d.banner} className="card-img" alt="..." />
                      <h6 className="p-2">{d.title}</h6>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <MagazineModal
            show={showModal}
            onHide={() => setShowModal(false)}
            modal={modal}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
