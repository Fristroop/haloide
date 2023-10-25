/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/App.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MagazineModal } from "../components/MagazineModal";
import axios from "axios";
import { API } from "../config";
import { Loader } from "./Loader";
import { Link, useLocation } from "react-router-dom";

//import bg from "../assets/imgs/hallowen.jpg";

//${d.title.replace(/\s/g, "")}
export const App = () => {
  const params = new URLSearchParams(useLocation().search);
  const mId = params.get("mId");

  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (data) return;
      try {
        const res = await axios.get(API + "/categories");
        setData(res.data);
      } catch (error) {
        alert("Bir hata oluştu!");
        console.error(error);
      }
    };

    fetch();

    const handleUrlChange = () => {
      if (!mId || !data) return setShowModal(false);
      const magazine = data.reduce((acc, currCategory) => {
        const foundMagazine = currCategory.magazines.find((m) => m.id === mId);
        if (foundMagazine) {
          return foundMagazine;
        }
        return acc;
      }, null);

      setModal(magazine);
      setShowModal(true);
    };

    handleUrlChange();
  }, [data, mId]);

  if (!data) return <Loader />;

  return (
    <>
      <Navbar data={data} />

      <main className="container">
        <div className="banner my-3">
          <img
            src="https://images.hdqwalls.com/download/halloween-ghosts-ar-1920x1080.jpg"
            alt=""
            className="rounded"
          />
          <div className="title">
            <div className="text-center pb-2 fs-1">
              Halo: Aylık Fikir, Sanat ve Edebiyat Dergisi
            </div>
          </div>
        </div>

        <div className="my-5"></div>
        <div>
          {data.map((e, i) => (
            <div className="mb-5" key={i}>
              <h3>
                {e.title}{" "}
                <small className="text-muted">({e.magazines.length})</small>
              </h3>
              <hr className="border-3" />
              <div className="magazines d-flex overflow-auto gap-3">
                {e.magazines.map((d, i) => (
                  <div key={i}>
                    <Link
                      className="btn card p-0 border-0"
                      to={`/?mId=${d.id}`}
                    >
                      <img src={d.banner} className="card-img" alt="..." />
                      <h6 className="p-2">{d.title}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <MagazineModal show={showModal} modal={modal} />
      <Footer />
    </>
  );
};
