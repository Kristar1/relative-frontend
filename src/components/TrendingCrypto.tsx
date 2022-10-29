import React from "react";
import Trending from "./../Assets/TrendingCrypto/trending.png";
import { TrendingAssets } from "../constants/Trending";
import AssetCard from "./AssetCard";

const TrendingCrypto = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex text-white justify-start items-center mb-20 ml-[20px] ">
        <img
          alt="trending"
          className="w-4 h-4 mr-3"
          src={Trending}
        />

        <h4 className=" text-white text-base font-semibold">Trending Assets</h4>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-[390px]:flex flex-col items-center justify-center ">

      {TrendingAssets.map((asset) => (
        
        <AssetCard key={asset.name} asset={asset} />
        ))}
        </div>
    </div>
  );
};

export default TrendingCrypto;
