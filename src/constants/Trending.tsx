import BitcoinBg from "./../Assets/Bitcoin/bitcoin-bg.svg";
import BitcoinLogo from "./../Assets/Bitcoin/bitcoin.svg";
import EthereumBg from "./../Assets/Ethereum/ethereum-bg.svg";
import EthereumLogo from "./../Assets/Ethereum/ethereum.svg";
import SolanaBg from "./../Assets/Solana/solana-bg.svg";
import SolanaLogo from "./../Assets/Solana/solana.svg";
import BinanceLogo from "./../Assets/Binance/binance.svg";
import BinanceBg from "./../Assets/Binance/binance-bg.svg";
import ShibaLogo from "./../Assets/Shiba/shiba.svg";
import ShibaBg from "./../Assets/Shiba/shiba-bg.svg";
export const TrendingAssets = [
  {
    name: "Bitcoin (BTC)",
    currentPrice: "31812.80",
    actualPrice: "60000",
    percent: "10",
    range: "positive",
    logoBg: { src: BitcoinBg },
    logo: { src: BitcoinLogo },
    popularPairs: {
      src1: EthereumLogo,
      src2: BinanceLogo,
      src3: SolanaLogo,
    },
  },
  {
    name: "Solana (SOL)",
    currentPrice: "32.83",
    actualPrice: "60000",
    percent: "12.32",
    range: "negative",
    logoBg: { src: SolanaBg },
    logo: { src: SolanaLogo },
    popularPairs: { src1: BitcoinLogo, src2: EthereumLogo, src3: BinanceLogo },
  },
  {
    name: "Ethereum (ETH)",
    currentPrice: "1,466.45",
    actualPrice: "60000",
    percent: "11.93",
    range: "negative",
    logoBg: { src: EthereumBg },
    logo: { src: EthereumLogo },
    popularPairs: { src1: SolanaLogo, src2: BitcoinLogo, src3: BinanceLogo },
  },
  {
    name: "Binance USD (BUSD)",
    currentPrice: "1.00",
    actualPrice: "60000",
    percent: "0.26",
    range: "positive",
    logoBg: { src: BinanceBg },
    logo: { src: BinanceLogo },
    popularPairs: { src1: SolanaLogo, src2: EthereumLogo, src3: BinanceLogo },
  },
  {
    name: "Shiba Inu (SHIB)",
    currentPrice: "0.00000001948",
    actualPrice: "60000",
    percent: "8.1",
    range: "negative",
    logoBg: { src: ShibaBg },
    logo: { src: ShibaLogo },
    popularPairs: { src1: SolanaLogo, src2: EthereumLogo, src3: BinanceLogo },
  },
];
