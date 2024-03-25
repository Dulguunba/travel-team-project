import express, { Application } from "express";
import cors from 'cors'
import { connectToDb } from "./connectToDb";
import coockieParser from "cookie-parser"
import dotenv from "dotenv"
import { verify } from "crypto";
import { userRouter } from "./routes/userRoutes";


const app: Application = express()
app.get("/", (req, res) => res.send("Express on Vercel"));
const PORT = 8080;
app.listen(PORT, () => console.log("Server ready on port." + PORT));

module.exports = app;



dotenv.config();


connectToDb();

app.use(cors());
app.use(express.json());
app.use(coockieParser())
app.use(userRouter);

// app.use("/profile", verifyToken)

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log('runnin : http://localhost:' + PORT)
})