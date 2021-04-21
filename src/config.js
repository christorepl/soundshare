require("dotenv").config();

module.exports = {
  API_BASE_URL: process.env.REACT_APP_DEVELOPMENT
    ? "http://localhost:8000"
    : "https://soundshare.herokuapp.com",
};
