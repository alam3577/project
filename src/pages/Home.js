import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../components/Chart";
import { dataLoadingStarted } from "../store/actions/dataActions";

function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataLoadingStarted());
  }, []);

  console.log("DADA", { data });
  return (
    <>
      <div className="main__container">
        <div className="container">
          {data?.map((elem, i) => (
            <div className="div__container" key={i}>
              <div className="log">
                <i class="fa fa-bars"></i>
              </div>
              <div className="price__container">
                <p>{elem.scrip}</p>
                <p className="price">${elem.price}</p>
              </div>
              <div className="shares__container">
                <p>Image</p>
              </div>
              <div className="data">
                <div>
                  <p>Qantity </p>
                  <p className="pl">{elem.qty}</p>
                </div>
                <div className="av_c">
                  <p>Avg. Cost</p>
                  <p className="pl"> {elem.avgCost}</p>
                </div>
                <div className="av_c">
                  <p>Invested Amount</p>
                  <p className="pl"> {elem.avgCost}</p>
                </div>
              </div>
              <div className="val__conatiner">
                <div>
                  <p className="pl_pr">Market Value</p>
                  <p className="pl_pr">$9542</p>
                </div>
                <div>
                  <p>% of portfolio Value</p>
                  <p className="pl_pr">{elem.percentageOfPortfolioVal}</p>
                </div>
                <div class="progress mb-1">
                  <div
                    class="progress-bar w-30 bg-success"
                    style={{ width: `${elem.returnPercentage}%` }}
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="30"
                  ></div>
                </div>
              </div>
              <div className="unrealized__pl__conatiner">
                <div className="pl">
                  <p>Unrealized P/L </p>
                  <p>${elem.unreleasedPL}</p>
                </div>
                <div className="return">
                  <p>% Returns </p>
                  <p class="pl_pr">${elem.returnPercentage}%</p>
                </div>
                <div class="progress mb-1">
                  {elem.returnPercentage &&
                  String(elem.returnPercentage).slice(0, 1) !== "-" ? (
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  ) : (
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  )}
                </div>
              </div>
              <div className="buttons">
                <button>Buy</button>
                <button>Sell</button>
              </div>
            </div>
          ))}
        </div>
        <div class="chart">
          <Chart data={data} />
        </div>
      </div>
    </>
  );
}

export default Home;
