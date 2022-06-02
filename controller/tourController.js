const fs = require("fs");

const formatJson = JSON.parse(fs.readFileSync("./dev-data/data.json", "utf-8"));

//jsonni get qilish
const getTours = (req, res) => {
  console.log(1);
  res.status(200).json({
    status: "succes",
    data: "hi",
  });
};
// jsonni post qilish
const postTours = (req, res) => {
  const obj = req.body;
  formatJson.push(obj);
  fs.writeFile("./dev-data/new.json", JSON.stringify(formatJson), (err) => {
    console.log(err);
  });
  console.log(formatJson);
  res.status(200).json({
    status: "succes",
    data: {
      formatJson,
    },
  });
};
// jsonni delete qilish
const deleteTours = (req, res) => {
  const id = req.params.id;
  const need = formatJson.filter((val) => {
    return val.id != id;
  });
  console.log(req.params);
  res.status(200).json({
    status: "succes",
    data: need,
  });
};

module.exports = {
  getTours,
  deleteTours,
  postTours,
};
