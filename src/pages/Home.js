import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../components/Chart";
import HomeContent from "../components/HomeContent";
import { dataLoadingStarted } from "../store/actions/dataActions";

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataLoadingStarted());
  }, []);

  return (
    <>
      <div className="main__container">
        <div className="container">
          {data?.map((elem, i) => (
            <HomeContent key={i} elem={elem} i={i} />
          ))}
        </div>
        <div className="chart">
          <Chart data={data} />
        </div>
      </div>
    </>
  );
}

export default Home;
