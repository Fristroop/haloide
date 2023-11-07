import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../config";
import { Magazines } from "../components/Magazines";
import { Categories } from "../components/Categories";
import { Theme } from "../components/Theme";

export const Dashboard = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSelf = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(API + "/users/@me", {
          withCredentials: true,
        });

        setUser(res.data);
      } catch (error) {
        console.log(error);
        alert("Login is required!");
        location.replace("/login");
      }
    };
    fetchSelf();

    const fetchData = async () => {
      try {
        const res = await axios.get(API + "/categories");
        setData(res.data);
      } catch (error) {
        alert("Something went wrong!");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!user || !data) return <div>Loading...</div>;

  return (
    <div>
      <Theme />
      <div className="d-flex justify-content-between p-3 bg-dark-subtle border-bottom mb-3">
        <div className="d-flex align-items-center">
          <a href="/dashboard" className="fs-5 mt-1">
            Admin Panel
          </a>
        </div>
        <div>
          <button className="btn btn-danger">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row gap-5">
          <Magazines data={data} />
          <Categories data={data} />
        </div>
      </div>
    </div>
  );
};
