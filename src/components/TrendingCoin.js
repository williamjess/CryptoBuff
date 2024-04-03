import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-[36%] bg-gray-200 mb-12
    last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-10
    "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="text-red">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              market cap ranking:&nbsp;
            </span>
            <span className="text-red">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              BTC price:&nbsp;
            </span>
            <span className="text-red">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">CryptoBuff rank:&nbsp;</span>
            <span className="text-red">{data.score}</span>
          </h3>

          <img
            src={data.large}
            alt={data.name}
            className="w-[35%] h-auto rounded-full absolute top-2/4 -right-12
-translate-y-2/4
"
          />
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          <div
            className="w-8 h-8 border-4 border-red rounded-full
             border-b-gray-200 animate-spin 
             "
            role="status"
          />
          <span className="ml-2">this broke ill fix it eventually</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
