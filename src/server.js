import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
	return res.send("HOME");
});

app.get("/login", (req, res) => {
	return res.send("Login Page");
});

app.listen(PORT, () =>
	console.log(`Server listening on PORT http://localhost:${PORT} 🐚`)
);
