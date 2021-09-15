const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const port = 4000;
const app = express();

app.use(cors())
app.use(express.json())

app.use(require("./routes/reviews.route"))
app.use(require("./routes/films.route"))
app.use(require("./routes/genres.route"))
app.use(require("./routes/news.route"))


mongoose
.connect("mongodb+srv://MAGOMED-BASHIR:boomcool171819@cluster0.13msv.mongodb.net/Films?retryWrites=true&w=majority")
.then(() => console.log("Подключились к БД"))
.catch(() => console.log("Ошибка при подключение"));

app.listen(port, () => {
  console.log("Сервер работает");
});