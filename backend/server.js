import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const app = express();

const PORT = 5000;
const JWT_SECRET = "my_secret_key_123";

app.use(cors());
app.use(express.json());

const User = [];


app.get("/", (req, res) => {

    res.send("Backend is working");

});


app.post("/api/register", async (req, res) => {

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        10
    );

    console.log("Original password:", req.body.password);
    console.log("Hashed password:", hashedPassword);

    const newUser = {
        id: User.length + 1,
        email: req.body.email,
        password: hashedPassword
    };

    User.push(newUser);

    console.log("Registered User:", User);

    res.json(newUser);
});
app.post("/api/login", async (req, res) => {

    const { email, password } = req.body;

    const user = User.find(
        (user) => user.email === email
    );

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatch) {
        return res.status(401).json({
            message: "Wrong password"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login successful",
        token: token,
        user: {
            id: user.id,
            email: user.email
        }
    });

});


app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});