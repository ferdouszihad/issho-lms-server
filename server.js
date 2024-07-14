const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");
dotenv.config();
mongoose.set("strictQuery", true);
const port = process.env.PORT || 5000;
const app = require("./app");

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log(chalk.bgBlue.bold(`Database Connected `)))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(chalk.bgRed.bold(`LMS server is running \nport ${port} `));
});
