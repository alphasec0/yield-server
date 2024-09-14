const utils = require('../utils');

const poolsFunction = async () => {
  const apyData = await utils.getData(
    'https://api.anchorprotocol.com/api/v1/market/ust'
  );
  const dataTvl = await utils.getData(
    'https://api.anchorprotocol.com/api/v1/deposit'
  );

  const nodedPool = {
    pool: "0xCa93A5d889e445CECb42E5386f7d516511d2820f-ethereum", // unique identifier for the pool in the form of: `${ReceivedTokenAddress}-${chain}`.toLowerCase()
    chain: "Ethereum", // chain where the pool is (needs to match the `name` field in here https://api.llama.fi/chains)
    project: 'Masternoded', // protocol (using the slug again)
    symbol: "NODED", // symbol of the tokens in pool, can be a single symbol if pool is single-sided or multiple symbols (eg: USDT-ETH) if it's an LP
    tvlUsd: 58195577514.498245, // number representing current USD TVL in pool
    apy:25,
    rewardTokens: ['0xCa93A5d889e445CECb42E5386f7d516511d2820f'], // Array of reward token addresses (you can omit this field if a pool doesn't have rewards)
    poolMeta: "Noded Pool", // A string value which can stand for any specific details of a pool position, market, fee tier, lock duration, specific strategy etc
  };

  return [nodedPool]; // Anchor only has a single pool with APY
};

module.exports = {
  timetravel: false,
  apy: poolsFunction,
  url: 'https://dapp.masternoded.com/',
};

