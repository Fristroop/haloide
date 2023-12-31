/* eslint-disable react/prop-types */
import { API, CDN } from "../config";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MagazineModal } from "../components/MagazineModal";
import { SearchModal } from "../components/SearchModal";

import { Loader } from "./Loader";

import "../assets/styles/App.css";
import { Theme } from "../components/Theme";

export const App = () => {
  const params = new URLSearchParams(useLocation().search);
  const mId = params.get("mId");

  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({});
  const [data, setData] = useState(null);
  const [, setCategories] = useState(null);
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (data) return;
      try {
        let cats = (await axios.get(API + "/categories")).data;
        let mags = (await axios.get(API + "/magazines")).data;

        setCategories(cats);
        setMagazines(mags);

        for (const cat of cats) {
          cat.magazines = mags.filter((m) => m.catId == cat.id).reverse();
        }

        setData(cats);
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
      if (!magazine) return;
      setModal(magazine);
      setShowModal(true);
    };

    handleUrlChange();

    const myModal = document.getElementById("trModal");
    if (myModal) {
      myModal.classList.add("show");
    }
  }, [data, mId]);

  const findIndex = (arr) => {
    let index = arr.findIndex((v) => v.id === modal?.id);
    return index;
  };

  if (!data) return <Loader />;

  return (
    <>
      <Theme />
      <Navbar />
      <SearchModal data={magazines} />

      <main>
        <div className="container banner">
          <img
            src="https://images.hdqwalls.com/download/halloween-ghosts-ar-1920x1080.jpg"
            alt=""
            className="rounded"
          />
          <div className="title" data-aos="fade-up">
            <div className="text-center pb-2 fs-1">
              HALO: Aylık Fikir, Sanat ve Edebiyat Dergisi
            </div>
          </div>
        </div>

        <div className="my-5"></div>
        <div className="container">
          {data.map((e, i) => (
            <div className="my-5" key={i}>
              <div data-aos="zoom-up">
                <h3>
                  {e.title}{" "}
                  <small className="text-muted">({e.magazines.length})</small>
                </h3>
              </div>

              <hr className="border-3" />
              <div className="magazines d-flex gap-3">
                {e.magazines.map((d, i) => (
                  <div key={i}>
                    <Link
                      className="btn card bg-transparent p-0 border-0"
                      to={`/?mId=${d.id}`}
                    >
                      <img
                        src={CDN + d.thumbnail}
                        className="card-img"
                        alt="..."
                      />
                      <h6 className="p-2">{d.title}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <MagazineModal
        show={showModal}
        modal={modal}
        prev={magazines[findIndex(magazines) - 1]}
        next={magazines[findIndex(magazines) + 1]}
      />
      <Footer />
    </>
  );
};
