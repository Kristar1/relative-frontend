import React from "react";
import AssetCard from "./AssetCard";
import Trending from "./../Assets/TrendingCrypto/trending.png";
import { TrendingAssets } from "../constants/Trending";

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
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

      {TrendingAssets.map((asset) => (
        
        <AssetCard key={asset.name} asset={asset} />
        ))}
        </div>
    </div>
  );
};

export default TrendingCrypto;
