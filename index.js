const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config()
const app = express();

app.use(cors())
app.use(express.json())

app.use(require("./routes/reviews.route"))
app.use(require("./routes/films.route"))
app.use(require("./routes/genres.route"))
app.use(require("./routes/news.route"))
app.use(require("./routes/users.route"))


mongoose.connect(process.env.MONGO_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.listen(process.env.PORT, () => console.log("Server has been started..."))