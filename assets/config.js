/* ============================================================
   TGAB site configuration — edit these values only.
   ============================================================ */

// Paste your Finnhub API key between the quotes.
// Leave empty to show the built-in indicative sample quotes.
window.TGAB_CONFIG = {
  FINNHUB_KEY: "",

  // Client portal endpoints (login / registration).
  // Replace once your portal subdomain is live.
  LOGIN_URL: "https://portal.tgab.com/login",
  SIGNUP_URL: "https://portal.tgab.com/register",

  // Symbols shown in the tape and the live markets panel.
  SYMBOLS: ["SPY","QQQ","AAPL","MSFT","NVDA","TSLA","AMZN","META","GOOGL","AMD"],

  CONTACT_EMAIL: "accounts@tgab.net",

  // Name of the third-party licensed trading platform TGAB will run on
  // (TGAB integrates a third-party platform rather than building its own).
  // Candidates under evaluation: cTrader / MT5 / DXtrade — not finalized.
  // LEAVE EMPTY until the choice is confirmed: pages then show their own
  // generic wording. Once set, the name is injected into every
  // [data-platform-name] element site-wide.
  TRADING_PLATFORM_NAME: ""
};
