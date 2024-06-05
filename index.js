const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//Connect to database
require("./drivers/connect-db");

const app = express();
app.set("PORT", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/teams", require("./routes/teamRoutes"));
app.use("/players", require("./routes/playerRoutes"));

app.listen(app.get("PORT"), () =>
  console.log(`Server Ready al port ${app.get("PORT")}`)
);
