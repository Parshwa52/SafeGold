import web3 from './web3';
import safegold from './build/SafeGold.json';

const instance = new web3.eth.Contract(
  JSON.parse(safegold.interface), '0xBbdffd14AAC7ac2d99979Cb7132Be92e3446dC52');

export default instance;
