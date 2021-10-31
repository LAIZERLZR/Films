const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
//require("dotenv").config()
const app = express();

app.use(cors())
app.use(express.json())

app.use(require("./routes/reviews.route"))
app.use(require("./routes/films.route"))
app.use(require("./routes/genres.route"))
app.use(require("./routes/news.route"))
app.use(require("./routes/users.route"))


mongoose
.connect('mongodb+srv://MAGOMED-BASHIR:boomcool171819@cluster0.13msv.mongodb.net/Films?authSource=admin&replicaSet=atlas-cyqk2k-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Beta&ssl=true')
.then(() => console.log('connected'))
.catch(e => console.log(e))

app.listen(4000, () => console.log("Server has been started..."))