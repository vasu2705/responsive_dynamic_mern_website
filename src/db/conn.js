const mongoose = require("mongoose");
const dotenv = require("dotenv");
//cretating a database
dotenv.config({ path: "./config.env" });
// const DB = process.env.DATABASE;
mongoose
 
.connect("mongodb+srv://responsive_mern:Vasu@1234@cluster0.pwhaa.mongodb.net/responsive_mern?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
