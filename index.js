const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (res) => {
    res.json({ message: "Teste" })
});

app.listen(3000, () => {
    console.log("API Ready.")
});