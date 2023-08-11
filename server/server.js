const dotenv = require("dotenv");
const app = require("./app");
const db = require("./utils/db");

const port = 5500;
dotenv.config({ path: "./config.env" });

db();

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
