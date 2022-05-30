const fs = require("fs");
const http = require("http");
const url = require("url");

const oqilganMalumotSync = fs.readFileSync("./dev-data/data.json", "utf-8"); //sinxronniy oqish
// console.log(oqilganMalumotSync);
const oqilganMalumotAsync = fs.readFile(
  // malumotni assinxron yozish
  "./dev-data/data.json",
  "utf-8",
  (err, data) => {
    // console.log(data);
  }
);
//////////////////////////////////////
const malumotYozishSync = fs.writeFileSync(
  // malumotni sinxron yozish
  "./txt/new.json",
  oqilganMalumotSync
);
const malumotYozishAsync = fs.writeFile(
  "./txt/new1.json",
  oqilganMalumotSync,
  (err, data) => {
    console.log("malumot yozildi");
  }
);

const server = http.createServer((req, res) => {
  const zapros = req.url;
  const url1 = url.parse(zapros);

  console.log(zapros);
  console.log(url1.query);
  res.end("server has started");
});
server.listen(8000, "127.0.0.1");
