import { useEffect, useState } from "react";
import { updateState } from "redux/currency";
import { useDispatch } from "react-redux";
import axios from "axios";
import Sidebar from "components/Sidebar";
import Loading from "components/Loading";
import Dashboard from "components/Dashboard";
import router from "next/router";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);

  const fetchdata = async () => {
    try {
      const rates = (await axios.get("/rates")).data;
      const symbols = (await axios.get("/symbols")).data;
      dispatch(updateState({ rates, symbols }));
      setloading(false);
    } catch (error) {
      router.replace("/404");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col w-full items-center">
      <Dashboard />
      <Sidebar />
    </div>
  );
};

export default Home;
