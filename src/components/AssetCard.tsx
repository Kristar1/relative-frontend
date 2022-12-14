const AssetCard = ({ asset }: { asset: any }) => {
  return (
    <div>
      {/* <div className="assetCard w-[290px] h-[450px] p-[1px] bg-[#31364a]  "> */}
      {/* Coin  */}
      <div
        // className="box-border h-[100px] w-[100px] absolute left-24  bg-gradient-to-r from-#626a881a to-#eab3000f rounded-full flex items-center justify-center"
        style={{
          top: "40px",
          background: "linear-gradient(180deg,#626a881a 0%,#eab3000f 100%)",
        }}
        className="bg-dark-gray backdrop-blur-2xl rounded-full h-[100px] w-[100px] relative top-[128px] bottom-[5px] left-[96px] flex items-center justify-center "
      >
        <img src={asset.logo.src} />
      </div>
      <div className="assetCard w-[290px] h-[450px] bg-[#181b30] relative">
        {/* Name */}
        <div className="absolute w-[231px] h-[31px] left-[32px] top-[70px] font-tomorrow not-italic font-semibold text-xs text-center opacity-90 text-name-gray leading-8">
          {asset.name}
        </div>
        {/* Box which contains the price */}
        <div className="box-border absolute w-[240px] h-[40px] left-5 top-[110px] bg-[#14172b] rounded-2xl">
          {/* Price */}
          <div
            className={`font-tomorrow flex items-center justify-center font-semibold text-[#ecf0ff] opacity-90 non-italic mt-[5px] `}
          >
            <span className="text-[#ecf0ff] "> ${asset.currentPrice} </span>
          </div>
        </div>
        {/* Percentage Change in Price */}
        <div
          className={`absolute w-[62px] h-[31px] left-48 top-[110px] font-tomorrow not-italic font-semibold text-xs opacity-90 flex items-center  ${
            asset?.name === "Shiba Inu (SHIB)" ? "left-52 pl-2" : ""
          }`}
          style={
            asset.range === "negative"
              ? { color: "#FF4D4D" }
              : { color: "#00ffa3" }
          }
        >
          &nbsp;&nbsp;
          {asset.range === "negative" ? "-" : "+"}
          {asset.percent}%
        </div>
        {/* Price Label */}
        <div className="absolute top-[160px] left-6 w-[241px] h-[31px] font-tomorrow font-semibold text-xs text-center text-[#5a5f7d] opacity-90 non-italic leading-8">
          Price
        </div>
        {/* Box which contains the actual price */}
        <div className="box-border absolute w-[240px] h-[40px] left-6 top-[190px] bg-[#14172b] rounded-2xl flex items-center justify-center font-semibold text-[#ecf0ff] ">
          <div className="text-[#ecf0ff] ">${asset.actualPrice}</div>
        </div>

        <div className="absolute w-[240px] h-[30px] left-[27px] top-[240px] text-center text-xs font-tomorrow non-italic font-semibold leading-8 text-[#5a5f7d] opacity-90 ">
          TVL
        </div>

        <div className="absolute w-[120px] h-[40px] left-[88px] top-[270px] bg-[#14172b] rounded-3xl flex items-center justify-around">
          <img className="w-[22px] h-[22px]" src={asset?.popularPairs?.src1} />
          <img className="w-[22px] h-[22px]" src={asset?.popularPairs?.src2} />
          <img className="w-[22px] h-[22px]" src={asset?.popularPairs?.src3} />
        </div>
        <div className="absolute w-[240px] h-[30px] left-7 top-[310px] font-semibold font-tomorrow non-italic text-xs leading-8 text-center text-[#5a5f7d] opacity-90">
          Popular Pairs
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AssetCard;
