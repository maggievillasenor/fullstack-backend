const express = require("express");
const mongoose = require("mongoose");
const ProjectRoutes = require("./src/routes/projects");
const app = express();

app.use(express.json());
app.use("/projects", ProjectRoutes);
const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://margaritavillasenormag:<password>@cluster0.emqgora.mongodb.net/?retryWrites=true&w=majority");
        app.listen(3000);
    } catch (err) {
        console.log("failed to connect to Mongo", err);
    }
};

connectDB();
