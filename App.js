const express = require("express");
const router = require("./routes");
const cors = require("cors"); //Permite que cualquier Ip pueda realizar consultas a la API.
const { dbConnection } = require("./models");
const config = require("./config");
const { errors } = require('celebrate')
const PORT = process.env.PORT || config.storageConfig.port;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); //Si necesito que solo una IP pueda consumir la API, la pongo dentro de cors(), sino cualquier IP puede.

app.use("/api/v1", router);
app.use(errors())

dbConnection
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
