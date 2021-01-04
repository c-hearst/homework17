const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`Application is running on port: ${PORT}`);
});