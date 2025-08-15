import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoute.js"

const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api/auth", authRoutes)


app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000")
} )

//mongodb+srv://aldofarizfadilla:<db_password>@cluster0.djj7itq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0