import express from "express";
import { client } from "@repo/db";

const app = express();
const port = 3002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    res.json({
        message: "User created successfully",
        id: user.id
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
