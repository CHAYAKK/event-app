const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static("public"));

let users = [];

app.post("/register", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "All fields required" });
    }

    users.push({ name, email });
    res.json({ message: "Registered successfully" });
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});