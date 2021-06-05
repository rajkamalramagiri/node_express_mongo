const mongoose = require("mongoose");
const url = "mongodb://localhost/AlienDB";

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("DB Connected!");
  } else {
    console.log("DB not connected", JSON.stringify(err));
  }
});
