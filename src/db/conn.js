const mongoose = require("mongoose");
//cretating a database
mongoose
  .connect("mongodb://localhost:27017/responsive_dynamic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
