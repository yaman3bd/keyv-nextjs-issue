const Keyv = require("keyv");
const CACHE_PATH = "sqlite://cache.sqlite3";
const keyv = new Keyv(CACHE_PATH);

module.exports = keyv;
