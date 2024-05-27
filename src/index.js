const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
app.use(morgan("combined"));

//Template engine
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
