const express = require("express");
const { comparisonRoute } = require("./routes/comparison.routes");
const { productonRoute } = require("./routes/product.routes");
const { connectiontodb } = require("./config/db");
const cors = require("cors")
const app = express();

app.use(cors())

app.use(express.json());
app.use(express.text());

app.use("/", comparisonRoute);
app.use("/", productonRoute);

app.listen(5000, async() => {
    try {
        await connectiontodb
        console.log("Connected to DB");
        console.log("Server running on port 5000");

    } catch (error) {
        console.log(error);
    }
})


