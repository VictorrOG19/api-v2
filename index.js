const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/enviar-info", (req, res) => {
    if (req.body.username === "victor" && req.body.senha === "123") {
        res.json({ ok: true })
    } else {
        res.json({ ok: false })
    }
});

app.listen(5000, () => {
    console.log("API Ready.")
});

module.exports = app;