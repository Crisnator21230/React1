const moongose = require("mongoose");
const express = require("express");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const routerApi = require("./src/routes");

moongose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
  { useNewUrlParser: true, useUnifiedTopology: true },  
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Success connection with mongo");
      app.listen(PORT_SERVER, () => {
        console.log("##############");
        console.log("###API REST###");
        console.log("##############");
        console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
      });
    }
  }
);

app.get("/", (req, res) => {
  res.send("Primer Proyecto React - Despliegue");
});

routerApi(app);

app.use(express.json());